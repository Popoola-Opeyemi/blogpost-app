import React, { useContext } from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'
import { Context } from "../context/BlogContext"
import { EvilIcons } from "@expo/vector-icons"

const DisplayPost = ({ route: { params } }) => {
  const { state } = useContext(Context)

  const blogPost = state.find((blogPost) => blogPost.id == params.id)
  return (
    <View>
      <Text>{blogPost.title} </Text>
    </View>

  )
}

DisplayPost.options = ({ navigation, route: { params } }) => ({
  headerRight: () => (
    < TouchableOpacity onPress={() => navigation.navigate("edit", {
      id: params.id
    })
    } >
      <EvilIcons name="pencil" size={50}></EvilIcons>
    </TouchableOpacity >
  )
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {

  }

});


export default DisplayPost 