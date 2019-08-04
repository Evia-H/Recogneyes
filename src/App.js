import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import './App.css';
import Clarifai from 'clarifai'


const app = new Clarifai.App({
  apiKey: '71bd2f8c3e7348998e61203c2fa4b66b'
 });


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
      imageUrl : ''
    }
  }

  onInputChange = event =>{
    this.setState({
      input : event.target.value
    })
  }

  onSubmit = event =>{
    this.setState({
      imageUrl : this.state.input
    },
    ()=>{
      app.models.predict(Clarifai.FACE_DETECT_MODEL , this.state.imageUrl).then(
        function(response) {
          console.log(response)
        },
        function(err) {
          // there was an error
        }
      );
    }
    )

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
          <FaceRecognition imageUrl={this.state.imageUrl}/>
        </div>
    );
  }
  
  

}

export default App;
