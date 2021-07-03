import React,{Component} from 'react'
import {View,Text,LogBox ,TouchableOpacity, Alert} from 'react-native'
import { Appbar,TextInput,Button,ActivityIndicator,Colors } from 'react-native-paper';
import * as firebase from 'firebase'
import Header from './shared/Header';
import Loader from './shared/Loader';
export default class Login extends Component{
    state = {
        text:'',
        pass:'',
        loading:false
    }
    CheckLogin = () =>{
        this.setState({loading:true})
        firebase.auth().signInWithEmailAndPassword(this.state.text,this.state.pass)
        .then((userCredential)=>{    
            const user = userCredential.user;
            this.props.navigation.navigate('Loading')
        })
        .catch((err)=>{
            this.setState({loading:false})
            Alert.alert(err.message)
        })
        this.setState({loading:false})
    }
    render(){
        if(this.state.loading){
            return(
                <Loader />
            )
        }else{
            return(
                <View>
                    <Header name='Login' />
    
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
                         onPress={()=>this.CheckLogin()}
                         >
                            <Text style={{textAlign:'center',color:'#fff',padding:10}}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginTop:10}} onPress={()=>this.props.navigation.navigate('Signup')}>
                            <Text style={{textAlign:'center',color:'#870f45'}}>Don't have a account?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
    }
}