import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Rank from './components/Rank/Rank';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
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
      imageUrl : '',
      boxes:[],
      route : 'signin',
      isSignedIn : false
    }
  }

  calculateFaceLocation = (data) =>{
    const clarifaiFace = data.outputs[0].data.regions;
    let boxes = [];

    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);

    
    clarifaiFace.map(value =>{
      const boundingBox = value.region_info.bounding_box;
        boxes.push({
          leftCol: boundingBox.left_col * width,
          topRow : boundingBox.top_row *height,
          rightCol : width - (boundingBox.right_col * width),
          bottomRow : height - (boundingBox.bottom_row * height)
        })
        return value;
    })
    

    return boxes;
  }

  displayFaceBox = (boxes) =>{
    this.setState({boxes})
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
      app.models.predict(Clarifai.FACE_DETECT_MODEL , this.state.imageUrl)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err))
    }
    )
  }

  onRouteChange = (route) =>{
    if(route === 'signout')
     this.setState({ isSignedIn : false})
    else if(route === 'home')
     this.setState({ isSignedIn : true})

    this.setState({route});
  }

  render(){
    const {isSignedIn,imageUrl,boxes} = this.state;
    return(
        <div className = "App" >
          <Particles
            className='particles'
            params={particlesOptions}

          />
          <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
          {
            this.state.route === 'home' 
          ? <div>
            <Logo></Logo>
            <Rank></Rank>
            <ImageLinkForm
            onInputChange={this.onInputChange}
            onSubmit={this.onSubmit}
            ></ImageLinkForm>
            <FaceRecognition boxes={boxes} imageUrl={imageUrl}/>
            </div>
          : (
            this.state.route === 'signin' 
            ? <Signin onRouteChange={this.onRouteChange}/>
            : <Register onRouteChange={this.onRouteChange}/>
          )


          }
        </div>
    );
  }
  
  

}

export default App;
