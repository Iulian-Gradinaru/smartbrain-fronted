import React, { useState } from 'react';
import ParticlesBg from 'particles-bg';
import { Navigation } from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import { ImageLinkForm } from './components/ImageLinkForm/ImageLinkForm';
import { FaceRecognition } from './components/FaceRecognition/FaceRecognition';
import { Rank } from './components/Rank/Rank';
import { Signin } from './components/Signin/Signin';
import { Register } from './components/Register/Register';
import './App.css';

const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: '',
  },
};

export const App = () => {
  const [input, setInput] = useState(initialState.input);
  const [imageUrl, setImageUrl] = useState(initialState.imageUrl);
  const [box, setBox] = useState(initialState.box);
  const [route, setRoute] = useState(initialState.route);
  const [isSignedIn, setIsSignedIn] = useState(initialState.isSignedIn);
  const [user, setUser] = useState(initialState.user);

  const loadUser = (data) => {
    setUser({
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined,
    });
  };

  // const calculateFaceLocation = (data) => {
  //   const clarifaiFace =
  //     data.outputs[0].data.regions[0].region_info.bounding_box;
  //   const image = document.getElementById('inputimage');
  //   const width = Number(image.width);
  //   const height = Number(image.height);
  //   return {
  //     leftCol: clarifaiFace.left_col * width,
  //     topRow: clarifaiFace.top_row * height,
  //     rightCol: width - clarifaiFace.right_col * width,
  //     bottomRow: height - clarifaiFace.bottom_row * height,
  //   };
  // };

  const calculateFaceLocation = (data) => {
    const regions = data.outputs[0].data.regions;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);

    // Returnăm un array cu coordonatele fiecărei fețe
    return regions.map((region) => {
      const clarifaiFace = region.region_info.bounding_box;
      return {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - clarifaiFace.right_col * width,
        bottomRow: height - clarifaiFace.bottom_row * height,
      };
    });
  };

  console.log('functia calculateFaceLocation', calculateFaceLocation);

  const displayFaceBox = (box) => {
    setBox(box);
  };

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  // const onButtonSubmit = () => {
  //   setImageUrl(input);
  //   fetch('http://localhost:3000/clarifai', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       input: input,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((result) => {
  //       displayFaceBox(calculateFaceLocation(result));
  //       if (result) {
  //         fetch('http://localhost:3000/image', {
  //           method: 'PUT',
  //           headers: { 'Content-Type': 'application/json' },
  //           body: JSON.stringify({
  //             id: user.id,
  //           }),
  //         })
  //           .then((response) => response.json())
  //           .then((count) => {
  //             setUser((prevUser) => ({ ...prevUser, entries: count }));
  //           });
  //       }
  //     })
  //     .catch((error) => console.log('error', error));
  // };

  const onButtonSubmit = () => {
    setImageUrl(input);
    console.log('imageonbutton', imageUrl);
    fetch('http://localhost:3000/clarifai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input: input,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        displayFaceBox(calculateFaceLocation(result));
        console.log('boxonsubmit', box);
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

  const onRouteChange = (route) => {
    if (route === 'signout') {
      setUser(initialState.user);
      setIsSignedIn(false);
      setRoute('signin'); // Redirecționăm către formularul de Sign In după ce se face Sign Out
    } else if (route === 'home') {
      setIsSignedIn(true);
      setRoute('home'); // Redirecționăm către pagina principală (Home) după autentificare (Sign In)
    } else if (route === 'signin') {
      setRoute('signin'); // Asigurăm că, dacă se dă click pe butonul "Sign In", afișăm formularul de Sign In
    } else if (route === 'register') {
      setRoute('register'); // Asigurăm că, dacă se dă click pe butonul "Register", afișăm formularul de Register
    }
  };

  return (
    <div className="App">
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
