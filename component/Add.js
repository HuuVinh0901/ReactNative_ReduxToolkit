import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToDo } from '../redux/toDoSlice'
const Add = ({navigation}) => {
    const [input,setInput]=useState('')
    const dispatch=useDispatch()

    const handleAdd=()=>{
        if(input.trim()){
            const newTodo={title:input}
            dispatch(addToDo(newTodo))
            setInput('')
            navigation.goBack()
        }
    }
  return (
    <View style={{marginHorizontal:10}}>
      <Text>Add</Text>
      <TextInput style={{borderWidth:1,borderRadius:10,paddingVertical:10,paddingHorizontal:10,marginTopL:20}} placeholder='Nhập dữ liệu'
      onChangeText={setInput}
      value={input}
      ></TextInput>
      <View>
        <TouchableOpacity style={{marginHorizontal:20,borderRadius:10,borderWidth:1,justifyContent:'center',marginTop:10,alignItems:'center'}}
        onPress={handleAdd}>
            <Text>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Add