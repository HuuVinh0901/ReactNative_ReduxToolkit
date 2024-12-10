import { View, Text ,TextInput,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateTodo } from '../redux/toDoSlice'
const Update = ({navigation,route}) => {
const{todo}=route.params
const dispatch=useDispatch()
const [input,setInput]=useState(todo.title)
const handleSave=()=>{
    if(input.trim()){
        const updateNew={title:input}
        dispatch(updateTodo({id:todo.id,updatedTodo:updateNew}))
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
        onPress={handleSave}>
            <Text>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Update