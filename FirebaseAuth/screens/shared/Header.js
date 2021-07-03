import React,{Component} from 'react'
import {View,Text,LogBox } from 'react-native'
import { Appbar,TextInput,Button } from 'react-native-paper';
import * as firebase from 'firebase'


export default  Header = (props) =>{   
    return(
        <View>
            <Appbar.Header style={{backgroundColor:'#eb1776',justifyContent:'center'}}>
                <Text style={{fontSize:24,color:'#fff'}}>{props.name}</Text>
            </Appbar.Header>
        </View>
    )
}