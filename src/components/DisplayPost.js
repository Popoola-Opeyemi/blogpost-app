import React from 'react'
import { StyleSheet, View, FlatList, Button } from 'react-native'
import { Context } from "../context/BlogContext"

const DisplayPost = () => {
  const { state, addBlogPost } = useContext(Context)

  return (
    <View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {

  }

});


export default DisplayPost 