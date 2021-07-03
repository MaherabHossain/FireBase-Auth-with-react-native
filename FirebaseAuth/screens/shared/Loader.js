import React,{Component} from 'react'
import {View,Text,LogBox ,TouchableOpacity, Alert} from 'react-native'
import { Appbar,TextInput,Button,ActivityIndicator,Colors } from 'react-native-paper';

export default Loader = () =>{
    return(
        <View style={{flex:1,justifyContent:'center'}}>
                <ActivityIndicator animating={true} color={Colors.red800} size='large' />
            </View>
    )
}