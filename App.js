import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Vibration } from 'react-native';


type Props = {};


export default class App extends Component<Props> {

 
  
  constructor(props){
    super(props)
    this.state={altura:0, peso:0, result:0, resultTexto:"" , btnCalcular:"Calcular"}
    this.calcular=this.calcular.bind(this)
  }
  
  calcular(){
    let imc = this.state.peso/(this.state.altura*this.state.altura)
    let s = this.state
    s.result = imc
    this.setState(s)

    
    if(s.result<16){
      s.resultTexto = "Magreza grave"
    }else if(s.result<17){
      s.resultTexto = "Magreza leve"
    }else if(s.result<18.5){
      s.resultTexto = "Saudavel"
    }else if(s.result<25){
      s.resultTexto = "SobrePeso"
    }else if(s.result<30){
      s.resultTexto = "Obesidade Grau I"
    }else if(s.result<35){
      s.resultTexto = "Obesidade Grau II"
    }else if(s.result<40){
      s.resultTexto = "Obesidade Grau III"
    }else{
      s.resultTexto = null
    }
  }


  render(){

    return (
      <View style={styles.container}>
        <View style={styles.boxTitle}>
          <Text style={styles.title}>CALC - IMC</Text>
        </View>
        <View style={styles.form}>

            <TextInput style={styles.input}
            placeholder="Peso( Ex:80 )"
            keyboardType='numeric' 
            onChangeText={(peso)=>{this.setState({peso})}}/>
            
             
            <TextInput style={styles.input} 
            placeholder="Altura ( Ex: 1.45 )" 
            keyboardType='numeric'
            onChangeText={(altura)=>{this.setState({altura})}}
            />

            <TouchableOpacity style={styles.ButtonCalculator}
             onPress={this.calcular}>
              <Text style={styles.textButtonCalculator}>{this.state.btnCalcular}</Text>
            </TouchableOpacity>  
           
           <View style={styles.ResultImc}>

            <Text style={styles.numberImc} >{this.state.result.toFixed(2)}</Text> 
            <Text style={styles.informtion} >{this.state.resultTexto}</Text> 

           </View>
        </View>
        <Text style={{fontSize:8, top:100}}>By Rodrigo Ferreira</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#FFFF',
      alignItems: 'center',
      justifyContent: 'center',
  },

  boxTitle: {
    backgroundColor:'#9900CC',
    padding: 12 ,
    width: '70%',
    borderRadius: 12,
    bottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },  

  title: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold', 
  },

  form:{
    width:"100%",
    height:"auto",
    marginTop:10,
    padding:10,
  },

  input:{
    width:"90%",
    borderRadius:50,
    color:"#CC00CC",
    backgroundColor:"#f6f6f6",
    height:40,
    margin:12,
    paddingLeft:10,
  
  },
 
  ButtonCalculator:{
    borderRadius:50,
    alignItems:"center",
    justifyContent:"center",
    width:"90%",
    backgroundColor:"#9933FF",
    paddingTop:14,
    paddingBottom:14,
    marginLeft:12,
    margin:30,

  },

  textButtonCalculator:{
    fontSize:20,
    color:"#ffffff",
    fontWeight: "bold",
  },

  ResultImc: {
    
    alignItems:"center",
    width:"100%",
  },
  
  numberImc:{
    fontSize:48,
    color:"#9933ff",
    fontWeight:"bold",
  },

  informtion:{
    fontSize:18,
    color:"#CC66CC",
    fontWeight:"bold",
  },
});