declare module "react-native-button-component" {

	import * as React from 'react';

	export interface InnerButtonProperties {
		imageAnim?: object,
		textAnim?: object,
		textStyle?: number | React.TextStyle,
		imageStyle?: number | React.ImageStyle,
		progressAnim?: object,
		progressStyle?: number | React.ViewStyle,
		progressSize?: number,
		progressWidth?: number,
		progressTintColor?: string,
		progressBackgroundColor?: string,
		progressFill?: number,
		progressText?: string,
		textInsideProgress?: boolean,
		progress?: boolean,
		spinnerAnim?: object,
		spinner?: boolean,
		spinnerSize?: number,
		spinnerType?: string,
		spinnerStyle?: number | React.ViewStyle,
		spinnerColor?: string,
		image?: any,
		text?: string,
	}

	export interface ButtonProperties extends InnerButtonProperties {
		states?: ButtonComponentProperties,
		buttonState?: ButtonComponentProperties | string,
	}

	export interface ButtonComponentProperties extends ButtonProperties, React.Props<ButtonComponent>{
		width?: number,
		height?: number,
		type?: "primary" | "secondary" | string,
		shape?: "rectangle" | "cicle" | string,
		gradientStart?: object,
		gradientEnd?: object,
		gradientLocations?: Array<any>,
		backgroundColors?: Array<string>,
		buttonStyle?: number | React.ViewStyle,
		style?: number | React.ViewStyle,
		progressSize?: number,
		onPress?: Function,
	}
	
	export interface ButtonComponentStatic extends React.NativeMethodsMixin, React.ComponentClass<ButtonComponentProperties>{}
	
	var ButtonComponent: ButtonComponentStatic;
	type ButtonComponent = ButtonComponentStatic;

	export default ButtonComponent;
}