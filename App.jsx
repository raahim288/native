import React, { Component } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export class App extends Component {
  render() {
    return (
      <>
      <View style={{alignItems:'center',justifyContent:'center'}}>
      
      <Image resizeMode='cover' width={200} height={200} source={{uri:'https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg'}}/>
      
      <Text>Hello World! </Text>
      
      <TouchableOpacity>
        <Text style={{fontSize:'2rem'}}>Click Me</Text>
      </TouchableOpacity>
      </View>
      </>
  
    )
  }
}

export default App
