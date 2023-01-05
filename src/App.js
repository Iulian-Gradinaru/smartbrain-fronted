// import React, { Component } from "react";
import React from "react";
import ParticlesBg from "particles-bg";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Rank from "./components/Rank/Rank";

import "./App.css";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Navigation />
//         {/* //      <Logo />
// //     <ImageLinkForm />
// //     <FaceRecognition /> */}
//       </div>
//     );
//   }
// }

function App() {
  return (
    <div className="App">
      <>
        <div>...</div>
        <ParticlesBg type="circle" bg={true} />
      </>
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      <FaceRecognition />
    </div>
  );
}

export default App;
