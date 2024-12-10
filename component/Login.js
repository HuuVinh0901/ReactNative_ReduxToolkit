import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { fetchUser, login } from '../redux/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
const Login = ({ navigation }) => {
    const dispatch = useDispatch()
    const { user, status } = useSelector((state) => state.auth)
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        dispatch(fetchUser())
    }, [dispatch])
    console.log(user)
    const handleLogin=()=>{
        const matchUser=user.find(
            (u)=>u.username===username && u.password===password
        )
        if(matchUser){
            navigation.navigate('List')
        }
        else{
            console.log("Đăng nhập thất bại")
        }
    }
    return (
        <View style={{ marginHorizontal: 10 }}>
            <TextInput style={{ borderWidth: 1, paddingHorizontal: 10, paddingVertical: 10, marginTop: 10 }} placeholder='User name'
                onChangeText={setUserName}
                value={username}
            ></TextInput>
            <TextInput style={{ borderWidth: 1, paddingHorizontal: 10, paddingVertical: 10, marginTop: 10 }} placeholder='Password'
                onChangeText={setPassword}
                value={password}
            ></TextInput>
            <TouchableOpacity style={{ marginTop: 20, borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}
                onPress={handleLogin}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login