import React, { useState } from 'react';
import ParticlesBg from 'particles-bg';

import { Navigation } from '../Navigation/Navigation';
import { Logo } from '../Logo/Logo';
import { ImageLinkForm } from '../ImageLinkForm/ImageLinkForm';
import { FaceRecognition } from '../FaceRecognition/FaceRecognition';
import { Rank } from '../Rank/Rank';
import { Signin } from '../Signin/Signin';
import { Register } from '../Register/Register';

import { Region, UserData } from './MainApp.types';

export const MainApp: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [box, setBox] = useState<Region[]>([]); // Updated type
  const [route, setRoute] = useState<string>('signin');
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [user, setUser] = useState<UserData>({
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: '',
  });

  const loadUser = (data: UserData): void => {
    setUser({
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined,
    });
  };

  const calculateFaceLocation = (data: any): Region[] => {
    const regions: Region[] = data.outputs[0].data.regions;
    const image: HTMLImageElement | null = document.getElementById(
      'inputimage'
    ) as HTMLImageElement;
    const width: number = Number(image.width);
    const height: number = Number(image.height);

    return regions.map((region: Region) => ({
      region_info: {
        bounding_box: {
          left_col: region.region_info.bounding_box.left_col * width,
          top_row: region.region_info.bounding_box.top_row * height,
          right_col: width - region.region_info.bounding_box.right_col * width,
          bottom_row:
            height - region.region_info.bounding_box.bottom_row * height,
        },
      },
    }));
  };

  const displayFaceBox = (box: Region[]): void => {
    setBox(box);
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(event.target.value);
  };

  const onButtonSubmit = (): void => {
    setImageUrl(input);

    fetch('http://localhost:3000/clarifai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input: input,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        displayFaceBox(calculateFaceLocation(result));

        if (result && result.outputs[0].data.regions) {
          fetch('http://localhost:3000/image', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: user.id,
            }),
          })
            .then((response) => response.json())
            .then((count) => {
              setUser((prevUser) => ({ ...prevUser, entries: count }));
            });
        }
      })
      .catch((error) => console.log('error', error));
  };

  const onRouteChange = (route: string): void => {
    if (route === 'signout') {
      setUser({
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: '',
      });
      setIsSignedIn(false);
      setRoute('signin');
    } else if (route === 'home') {
      setIsSignedIn(true);
      setRoute('home');
    } else if (route === 'signin') {
      setRoute('signin');
    } else if (route === 'register') {
      setRoute('register');
    }
  };

  return (
    <div className="main-app">
      <div className="particles">
        <ParticlesBg type="circle" bg={true} />
      </div>

      <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} />
      {route === 'home' ? (
        <div>
          <Logo />
          <Rank name={user.name} entries={user.entries} />
          <ImageLinkForm
            onInputChange={onInputChange}
            onButtonSubmit={onButtonSubmit}
          />
          <FaceRecognition box={box} imageUrl={imageUrl} />
        </div>
      ) : route === 'signin' ? (
        <Signin loadUser={loadUser} onRouteChange={onRouteChange} />
      ) : (
        <Register loadUser={loadUser} onRouteChange={onRouteChange} />
      )}
    </div>
  );
};
