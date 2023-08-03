import React, { useState } from 'react';

/**
 * Imports the ParticlesBg component from 'particles-bg'
 */
import ParticlesBg from 'particles-bg';

/**
 * Imports components
 */
import { Navigation } from '../Navigation';
import { Logo } from '../Logo';
import { ImageLinkForm } from '../ImageLinkForm';
import { FaceRecognition } from '../FaceRecognition';
import { Rank } from '../Rank';
import { Signin } from '../Signin';
import { Register } from '../Register';

/**
 * Imports styles
 */
import { Container, ParticlesContainer } from './MainApp.styles';

/**
 * Imports types
 */
import { Region, UserData } from './MainApp.types';

/**
 * Displays the component
 */
export const MainApp: React.FC = () => {
  /**
   * Initializes the input state
   */
  const [input, setInput] = useState<string>('');

  /**
   * Initializes the imageUrl state
   */
  const [imageUrl, setImageUrl] = useState<string>('');

  /**
   * Initializes the box state
   */
  const [box, setBox] = useState<Region[]>([]);

  /**
   * Initializes the route state
   */
  const [route, setRoute] = useState<string>('signin');

  /**
   * Initializes the signed In state
   */
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  /**
   * Initializes the user In state
   */
  const [user, setUser] = useState<UserData>({
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: '',
  });

  /**
   * Handles the load user data
   */
  const loadUser = (data: UserData): void => {
    setUser({
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined,
    });
  };

  /**
   * Handles calculate face locations on the image
   */
  const calculateFaceLocation = (data: any): Region[] => {
    // Extracts regions from API response
    const regions: Region[] = data.outputs[0].data.regions;

    // Gets image dimensions
    const image: HTMLImageElement | null = document.getElementById(
      'inputimage'
    ) as HTMLImageElement;
    const width: number = Number(image.width);
    const height: number = Number(image.height);

    // Calculates and returns adjusted bounding box coordinates
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

  /**
   * Handles display face bounding boxes
   */
  const displayFaceBox = (box: Region[]): void => {
    setBox(box);
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(event.target.value);
  };

  /**
   * Event handler for button submit
   */
  const onButtonSubmit = (): void => {
    // Sets the input URL for the image
    setImageUrl(input);

    // Sends API request to Clarifai for face recognition
    fetch('http://localhost:3000/clarifai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input: input,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        // Calls the function to display face bounding boxes
        displayFaceBox(calculateFaceLocation(result));

        // If faces are detected, updates user entry count
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

  /**
   * Event handler for route change
   */
  const onRouteChange = (route: string): void => {
    // Updates route and user sign-in status
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
    <Container className="main-app">
      <ParticlesContainer className="particles">
        <ParticlesBg type="circle" bg={true} />
      </ParticlesContainer>

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
    </Container>
  );
};
