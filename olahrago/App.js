import React, { Component, View } from "react";
import Expo from "expo";
import { Provider } from "react-redux";

import LoginScreen from "./src/container/LoginScreen.js";
import loginStore from "./src/store/LoginStore";

export default class OlahragoApp extends Component {
    constructor() {
        super();
        this.state = {
            isReady: false
        };
    }
    async componentDidMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("native-base/Fonts/Ionicons.ttf")
        });
        this.setState({ isReady: true });
    }
    render() {
        if (!this.state.isReady) {
            console.log(this.state.isReady)
            return <Expo.AppLoading /> ;
        }
        return (
            <Provider store={loginStore}> 
                <LoginScreen />  
            </Provider>
        );
    }
}