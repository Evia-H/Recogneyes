import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';



import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Logo></Logo>
      <Rank></Rank>
      <ImageLinkForm></ImageLinkForm>
    </div>
  );
}

export default App;
