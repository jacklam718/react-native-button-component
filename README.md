## React Native Button component

React Native Button component for iOS & Android

![Example](https://www.dropbox.com/s/opuuuk11ckykk0l/demo.gif?dl=1)


## Installation
`npm install --save react-native-button-component`

## Some Simple Examples
<a href="https://github.com/jacklam718/react-native-button-component/blob/master/example/ButtonComponentExample/js/containers/OneStateButtons.js" target="_blank">
  One State Button
</a>
<br>
<a href="https://github.com/jacklam718/react-native-button-component/blob/master/example/ButtonComponentExample/js/containers/MultipleStatesButtons.js" target="_blank">
  Multiple States Button
</a>
<br>
<a href="https://github.com/jacklam718/react-native-button-component/blob/master/example/ButtonComponentExample/js/containers/SpinnerButtons.js" target="_blank">
  Spinner Button
</a>
<br>
<a href="https://github.com/jacklam718/react-native-button-component/blob/master/example/ButtonComponentExample/js/containers/ProgressButtons.js" target="_blank">
  Progress Button
</a>

## Documents
<a href="https://github.com/jacklam718/react-native-button-component/blob/master/docs/props-and-button-state-attributes.md" target="_blank">
  Props & Button State Object Attributes
</a>
<br />
<a href="https://github.com/jacklam718/react-native-button-component/blob/master/docs/progress-button-state-attributes.md" target="_blank">
  Progress Button State Object Attributes
</a>
<br />
<a href="https://github.com/jacklam718/react-native-button-component/blob/master/docs/spinner-button-state-attributes.md" target="_blank">
  Spinner Button State Object Attributes
</a>

## Usage - Basic

#### Button with one state
```javascript
import ButtonComponent from 'react-native-button-component';

<ButtonComponent
  onPress={() => {}}
  image={require('button-image.png')}
  text="Button"
>
</ButtonComponent>
```

#### Button with multiple states
```javascript
import ButtonComponent from 'react-native-button-component';

<ButtonComponent
  buttonState={this.state.uploadButtonState}
  states={{
    upload: {
      onPress={() => {
        this.imageUploader.upload();
        this.state.setState({ uploadButtonState: 'uploading' });
      }}
      image: require('upload-image.png'),
      text: 'Upload Image',
    },
    uploading: {
      onPress={() => {
        this.imageUploader.cancelUpload();
        this.state.setState({ uploadButtonState: 'upload' });
      }}
      spinner: true,
      text: 'Uploding Image...',
    },
  }}
>
</ButtonComponent>
```

## Usage - With Your Configurations

#### Button with one state
```javascript
<ButtonComponent
  type="primary"
  shape="rectangle",
  backgroundColors: ['#4DC7A4', '#66D37A'],
  gradientStart=[0.5, 1]
  gradientEnd=[1, 1]
  height: 80,
  onPress={() => {}}
  image={require('button-image.png')}
  text="Button"
>
</ButtonComponent>
```

#### Button with multiple states - different config for different states
```javascript
import ButtonComponent from 'react-native-button-component';

<ButtonComponent
  buttonState={this.state.uploadButtonState}
  gradientStart=[0.5, 1]
  gradientEnd=[1, 1]
  states={{
    upload: {
      backgroundColors: ['#4DC7A4', '#66D37A'],
      image: require('upload-image.png'),
      text: 'Upload Image',
      onPress={() => {
        this.imageUploader.upload();
        this.state.setState({ uploadButtonState: 'uploading' });
      }}
    },
    uploading: {
      gradientStart=[0.8, 1]
      gradientEnd=[1, 1]
      backgroundColors: ['#ff4949', '#fe6060'],
      spinner: true,
      text: 'Uploding Image...',
      onPress={() => {
        this.imageUploader.cancelUpload();
        this.state.setState({ uploadButtonState: 'upload' });
      }}
    },
  }}
>
</ButtonComponent>
```

#### Button with multiple states - one config for different states
```javascript
<ButtonComponent
  buttonState={this.state.uploadButtonState}
  gradientStart=[0.5, 1]
  gradientEnd=[1, 1]
  backgroundColors: ['#4DC7A4', '#66D37A'],
  states={{
    upload: {
      image: require('upload-image.png'),
      text: 'Upload Image',
      onPress={() => {
        this.imageUploader.upload();
        this.state.setState({ uploadButtonState: 'uploading' });
      }}
    },
    uploading: {
      spinner: true,
      text: 'Uploding Image...',
      onPress={() => {
        this.imageUploader.cancelUpload();
        this.state.setState({ uploadButtonState: 'upload' });
      }}
    },
  }}
>
</ButtonComponent>
```
