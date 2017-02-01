# Single State Button
## Props
| Prop | Type | Default | Note |
|---|---|---|---|
| `image` | `ImageSource` | |
| `text`  | `String` | |
| `onPress` | `Function` | | | |
| `states` | `Object` | | If you pass the states object & the buttonState string into the `ButtonComponent` then the `ButtonComponent` will become a multiple states button. <br> The states object contain different button states each state is an object, the button state object can have the following state object attributes. | |
| `buttonState` | `String` | | Represent the current button state. | |
| `width` | `Number` | `null` | | |
| `Height` | `Number` | `50` | | |
| `type` | `String` | `primary` | | |
| `shape` | `String` | `round` | | |
| `gradientStart` | `Object` | `{x: 0.5, y: 1}` | | |
| `gradientEnd` | `Object` | `{x: 1, y: 1}` | | |
| `gradientLocations` | `Array` | `null` | example: [0,0.5,0.6] | |
| `backgroundColors` | `Array` | `['#4DC7A4', '#66D37A']` | | |
| `buttonStyle` | `Object, Number` | `['#4DC7A4', '#66D37A']` | | |


<!-- # Multiple States Button
## Props
| Prop | Type | Default | Note |
|---|---|---|---|
| image | ImageSource | |
| text  | String | |
| onPress | Function | | | |
| states | Object | | | |
| buttonState | String | | | |
| width | Number | null | | |
| Height | Number | 50 | | |
| type | String | primary | | |
| shape | String | round | | |
| gradientStart | Object | {x: 0.5, y: 1} | | |
| gradientEnd | Object | {x: 1, y: 1} | | |
| backgroundColors | Array | ['#4DC7A4', '#66D37A'] | | | -->


# State Object Attributes

## Button State Object Attributes - Progress
<a href="https://github.com/jacklam718/react-native-button-component/blob/master/docs/progress-button-state-attributes.md" target="_blank">
  Progress Button State Object Attributes
</a>

## Button State Object Attributes - Spinner
<a href="https://github.com/jacklam718/react-native-button-component/blob/master/docs/spinner-button-state-attributes.md" target="_blank">
  Spinner Button State Object Attributes
</a>

## Button State Object Attributes - ALL
| Attribute | Type | Default | Note |
|---|---|---|---|
| `image` | `ImageSource` | |
| `text`  |` String` | |
| `onPress` | `Function` | | | |
| `buttonState` | `String` | | | |
| `width` | `Number` | `null` | | |
| `Height` | `Number` | `50` | | |
| `type` | `String` | `primary` | | |
| `shape` | `String` | `round` | | |
| `gradientStart` | `Object` | `{x: 0.5, y: 1}` | | |
| `gradientEnd` | `Object` | `{x: 1, y: 1}` | | |
| `backgroundColors` | `Array` | `['#4DC7A4', '#66D37A']` | | |
| `buttonStyle` | `Object, Number` | | | |
| `imageAnimConfig` | `Object` | | | |
| `textAnimConfig` | `Object` | | | |
| `progress` | `Boolean` | | | |
| `progressStyle` | `Object, Number` | | | |
| `progressAnimConfig` | `Object` | | | |
| `progressSize` | `Number` | | | |
| `progressWidth` | `Number` | | | |
| `progressFill` | `Number` | | | |
| `progressTintColor` | `String` | | | |
| `progressBackgroundColor` | `String` | | | |
| `spinner` | `Boolean` | | | |
| `spinnerStyle` | `Object, Number` | | | |
| `spinnerAnimConfig` | `Object` | | | |
| `spinnerSize` | `Number` | | | |
| `spinnerType` | `String` | | | |
| `spinnerColor` | `String` | | | |
