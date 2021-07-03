import React,{Component} from 'react'
import {View,Text,LogBox,TouchableOpacity, Alert } from 'react-native'
import { Appbar,TextInput,Button } from 'react-native-paper';
import * as firebase from 'firebase'
import Header from './shared/Header';
import Loader from './shared/Loader';
export default class Signin extends Component{
    state={
        text:'',
        pass:'',
        loading:false
    }
    addNewUser = () => {
        this.setState({loading:true})
        firebase.auth().createUserWithEmailAndPassword(this.state.text, this.state.pass)
        .then((userCredential) => {
            // // Signed in 
            // var user = userCredential.user;
            // console.log(user.email)
            // this.props.navigation.replace('Loading')
            firebase.auth().signInWithEmailAndPassword(this.state.text,this.state.pass)
            .then((userCredential)=>{    
                var user = userCredential.user;
                console.log('feom home')
                console.log(user.email)
                var email = user.email.toString();
                this.props.navigation.navigate('Home',email)
            })
            .catch((err)=>{
                this.setState({loading:false})
                Alert.alert(err.message)
            })
            this.setState({text:'',pass:''})
        })
        .catch((error) => {
            Alert.alert(error.message)
        })
    }
    render(){
       if(this.state.loading){
        return(
            <Loader />
        )
       }else{
        return(
            <View>
                <Header name='Sign Up' />
                <View style={{padding:10}}>
                    <TextInput
                        label="Email"
                        value={this.state.text}
                        onChangeText={text => this.setState({text})}
                        theme={{ colors: { primary: '#eb1776',underlineColor:'transparent',}}}
                    />
                    <TextInput
                        style={{marginTop:4}}
                        label="Password"
                        value={this.state.pass}
                        onChangeText={pass => this.setState({pass})}
                        theme={{ colors: { primary: '#eb1776',underlineColor:'transparent',}}}
                    />
                    <TouchableOpacity
                     style={{backgroundColor:'#eb1776',marginTop:10,width:100,left:125,borderRadius:30}}
                     onPress={()=>this.addNewUser()}
                     >
                        <Text style={{textAlign:'center',color:'#fff',padding:10}}>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginTop:10}} onPress={()=>this.props.navigation.navigate('Login')}>
                        <Text style={{textAlign:'center',color:'#870f45'}}>Already have a account?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
       }
    }
}