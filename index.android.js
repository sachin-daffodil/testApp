
import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    ToastAndroid,
    TouchableOpacity
} from 'react-native';

class TestApp extends Component {
    onPress1 (){
        var a = "5 ".trim();
        ToastAndroid.show(a,0);
    }
    onPress2 (){
        var a = (5).toString().trim();
        ToastAndroid.show(a,0);
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.onPress1}>
                    <Text style={{borderWidth:1,padding:5,textAlign:"center"}}>Button1</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.onPress2}>
                    <Text style={{borderWidth:1,padding:5,textAlign:"center"}}>Button2</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


AppRegistry.registerComponent('testApp', () => TestApp);
