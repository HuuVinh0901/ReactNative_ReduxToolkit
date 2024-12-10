import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { fetchData, deleteTodo } from '../redux/toDoSlice'
import { useDispatch, useSelector } from 'react-redux'
const List = ({navigation}) => {
  const dispatch = useDispatch()
  const { todo, error } = useSelector((state) => state.todo)
  useEffect(() => {
    dispatch(fetchData())

  }, [dispatch])
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
    console.log(id)
  }
  const handleUpdate=(selectedToDo)=>{
    navigation.navigate('Update',{todo:selectedToDo})
  }
  console.log('Todo List:', todo);
  return (
    <ScrollView style={{ marginHorizontal: 10 }}>
      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <Text style={{fontSize:20}}>List</Text>
        <TouchableOpacity
        onPress={()=>{navigation.navigate('Add')}}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={todo}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
            <Text>{item.title}</Text>
            <TouchableOpacity
              onPress={() => handleDelete(item.id)}>
              <Text>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>handleUpdate(item)} >
              <Text>Update</Text>
            </TouchableOpacity>
          </View>


        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </ScrollView>
  )
}

export default List