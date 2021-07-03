import React,{Component} from 'react'
import {View,Text,LogBox } from 'react-native'
import { Appbar,TextInput,Button ,ActivityIndicator,Colors} from 'react-native-paper';
import * as firebase from 'firebase'
import Loader from './shared/Loader';

export default class Home extends Component{

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              var uid = user.uid;
              var email = user.email
              this.props.navigation.navigate('Home',email)
              // ...
            } else {
              // User is signed out
              this.props.navigation.navigate('Signup')
            }           
          });
    }
    render(){
        return(
          <Loader />
        )
    }
}