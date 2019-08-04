import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 70,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }

}
class App extends Component {

  constructor(){
    super();

    this.state = {
      input : '',
    }
  }

  onInputChange = event =>{
    this.setState({
      input : event.target.value
    },()=> console.log(this.state.input))
  }

  onSubmit = event =>{
    console.log('submit')
  }

  render(){
    return(
        <div className = "App" >
          <Particles
            className='particles'
            params={particlesOptions}

          />
          <Navigation></Navigation>
          <Logo></Logo>
          <Rank></Rank>
          <ImageLinkForm
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
          ></ImageLinkForm>
        </div>
    );
  }
  
  

}

export default App;
