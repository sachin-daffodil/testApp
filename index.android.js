
import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    ToastAndroid,
    TouchableOpacity
} from 'react-native';
import codePush from "react-native-code-push";

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

class TestApp extends Component {
    componentDidMount(){
        var updateDialogOptions = {
            updateTitle: "You have an update",
            optionalUpdateMessage: "Update available. Install?",
            optionalIgnoreButtonLabel: "Nop",
            optionalInstallButtonLabel: "Yep",
        };
        codePush.sync({ updateDialog: updateDialogOptions});
    }
    onPress1 (){
        var a = " sourbh gupta ".trim();
        ToastAndroid.show(a,0);
    }
    onPress2 (){
        var c = (27).toString().trim();
        ToastAndroid.show(c,0);
    }
    onPress4 (){
        var c = (3).toString.trim();
        ToastAndroid.show(c,0);
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
                <TouchableOpacity onPress={this.onPress4}>
                    <Text style={{borderWidth:1,padding:5,textAlign:"center"}}>Button3</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


TestApp = codePush(codePushOptions)(TestApp);


AppRegistry.registerComponent('testApp', () => TestApp);
