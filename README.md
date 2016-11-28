## React Native Button component

React Native Button component for iOS & Android.

![Example](https://jacklam718.github.io/react-native-button-component/build/video/circle-button-demo.gif)
![Example](https://jacklam718.github.io/react-native-button-component/build/video/button-demo.gif)


## Provided Components
This library provided the following button components:
```
ButtonComponent
CircleButton
RoundButton
RectangleButton
```

#### Note:
CircleButton, RoundButton, RectangleButton is on top of ButtonComponent.
So I recommend you should use CircleButton, RoundButton, RectangleButton, rather than directly use ButtonComponent because those button components may have preset some options.


## Installation
1. `npm install --save react-native-button-component`

2. `react-native link` or `rnpm link`

3. Link ART library to your ReactNative project ([how to link a library?](https://facebook.github.io/react-native/docs/linking-libraries-ios.html#content)). You'll find ReactART library in `node_modules/react-native/Libraries/ART/ART.xcodeproj`

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
<br>
<a href="https://github.com/jacklam718/react-native-button-component/blob/master/example/ButtonComponentExample/js/containers/CircleButtons.js" target="_blank">
  Circle Button
</a>

## Documents
<a href="https://github.com/jacklam718/react-native-button-component/blob/master/docs/props-and-button-state-attributes.md" target="_blank">
  Props & Button Options
</a>
<br />
<a href="https://github.com/jacklam718/react-native-button-component/blob/master/docs/progress-button-state-attributes.md" target="_blank">
  Options for Progress Button
</a>
<br />
<a href="https://github.com/jacklam718/react-native-button-component/blob/master/docs/spinner-button-state-attributes.md" target="_blank">
  Options for Spinner Button
</a>
<br />
<a href="https://github.com/jacklam718/react-native-button-component/blob/master/docs/circle-button-attributes.md" target="_blank">
  Options for Circle Button
</a>

## Usage - Basic

#### Button with one state
```javascript
import ButtonComponent, { CircleButton, RoundButton, RectangleButton } from 'react-native-button-component';

// You can use CircleButton, RoundButton, RectangleButton to instead ButtonComponent
<ButtonComponent
  onPress={() => {}}
  image={require('button-image.png')}
  text="Button"
>
</ButtonComponent>
```

#### Button with multiple states
```javascript
import ButtonComponent, { CircleButton, RoundButton, RectangleButton } from 'react-native-button-component';

// You can use CircleButton, RoundButton, RectangleButton to instead ButtonComponent
<ButtonComponent
  buttonState={this.state.uploadButtonState}
  states={{
    upload: {
      onPress: () => {
        this.imageUploader.upload();
        this.state.setState({ uploadButtonState: 'uploading' });
      },
      image: require('upload-image.png'),
      text: 'Upload Image',
    },
    uploading: {
      onPress: () => {
        this.imageUploader.cancelUpload();
        this.state.setState({ uploadButtonState: 'upload' });
      },
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
import ButtonComponent, { CircleButton, RoundButton, RectangleButton } from 'react-native-button-component';

// You can use CircleButton, RoundButton, RectangleButton to instead ButtonComponent
<ButtonComponent
  buttonState={this.state.uploadButtonState}
  gradientStart=[0.5, 1]
  gradientEnd=[1, 1]
  states={{
    upload: {
      backgroundColors: ['#4DC7A4', '#66D37A'],
      image: require('upload-image.png'),
      text: 'Upload Image',
      onPress: () => {
        this.imageUploader.upload();
        this.state.setState({ uploadButtonState: 'uploading' });
      },
    },
    uploading: {
      gradientStart=[0.8, 1]
      gradientEnd=[1, 1]
      backgroundColors: ['#ff4949', '#fe6060'],
      spinner: true,
      text: 'Uploding Image...',
      onPress: () => {
        this.imageUploader.cancelUpload();
        this.state.setState({ uploadButtonState: 'upload' });
      },
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
      onPress: () => {
        this.imageUploader.upload();
        this.state.setState({ uploadButtonState: 'uploading' });
      },
    },
    uploading: {
      spinner: true,
      text: 'Uploding Image...',
      onPress: () => {
        this.imageUploader.cancelUpload();
        this.state.setState({ uploadButtonState: 'upload' });
      },
    },
  }}
>
</ButtonComponent>
```

## License
MIT
