import { View, Text, FlatList, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useEffect,useState } from 'react'
import { fetchData, deleteTodo } from '../redux/toDoSlice'
import { useDispatch, useSelector } from 'react-redux'
import { TextInput } from 'react-native-gesture-handler'
const List = ({navigation}) => {
  const dispatch = useDispatch()
  const { todo, error } = useSelector((state) => state.todo)
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredTodos, setFilteredTodos] = useState([]);
  useEffect(() => {
    dispatch(fetchData())

  }, [dispatch])
  useEffect(() => {
    // Lọc danh sách theo từ khóa tìm kiếm
    if (searchTerm.trim()) {
      const filtered = todo.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredTodos(filtered);
    } else {
      setFilteredTodos(todo);
    }
  }, [searchTerm, todo]);
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
    console.log(id)
  }
  const handleUpdate=(selectedToDo)=>{
    navigation.navigate('Update',{todo:selectedToDo})
  }
  const imageMap={
    'image1.png':require('../assets/image/image1.png')
  }
  return (
    <View style={{marginHorizontal:10,flex:1}}>
      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <Text style={{fontSize:20}}>List</Text>
        <TouchableOpacity
        onPress={()=>{navigation.navigate('Add')}}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput style={{paddingHorizontal:10,paddingVertical:10,borderWidth:1}} placeholder='Search'
        onChangeText={setSearchTerm} // Cập nhật từ khóa tìm kiếm
        value={searchTerm}></TextInput>
      </View>

      <FlatList style={{height:100}}
        data={filteredTodos}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
            <Text>{item.title}</Text>
            <Image style={{width:20,height:20}} source={imageMap[item.image]} />
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
        showsVerticalScrollIndicator={false} 
      />
    </View>
  )
}

export default List