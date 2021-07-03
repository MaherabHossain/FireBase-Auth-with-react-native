import React,{Component} from 'react'
import {View,Text,LogBox,TouchableOpacity } from 'react-native'
import { Appbar,TextInput,Button,ActivityIndicator,Colors } from 'react-native-paper';
import * as firebase from 'firebase'
import Header from './shared/Header';
import Loader from './shared/Loader';
export default class Home extends Component{
    state = {
        loading:false
    }
    LogOut = async() =>{
        this.setState({loading:true})
        try {
            await firebase.auth().signOut();
            this.props.navigation.navigate('Signup')
        } catch (e) {
            console.log(e);
        }
        this.setState({loading:false})
    }
    render(){
        var email = this.props.route.params
        if(this.state.loading){
            return(
                <Loader />
            )
        }else{
            return(
                <View>
                    <Header name="Home" />
                    <Text style={{fontSize:20,padding:10}}>Login as {' '+email}</Text>
                    <TouchableOpacity style={{width:100,backgroundColor:'#eb1776',marginLeft:120,borderRadius:30}} onPress={this.LogOut}>
                        <Text style={{padding:10,color:'#fff',textAlign:'center',borderRadius:30}}>Log Out</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }
}