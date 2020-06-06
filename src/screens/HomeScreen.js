import React, { useContext, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Button, FlatList } from 'react-native';
import { Context } from "../context/BlogContext"
import { Feather } from "@expo/vector-icons"

const HomeScreen = ({ navigation }) => {
  const { state, getPosts, deleteBlogPost } = useContext(Context)

  useEffect(() => {
    const listner = navigation.addListener('focus', () => {
      getPosts()
    })

    return () => listner()
  }, [])



  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(value) => value.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("show", { id: item.id })}>
              <View style={styles.row}>
                <Text style={styles.title}>{item.title} - {item.content}</Text>
                <TouchableOpacity onPress={() => { deleteBlogPost(item.id) }}>
                  <Feather style={styles.icon} name="trash" />

                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

HomeScreen.options = ({ navigation }) => ({
  headerRight: () => (
    <TouchableOpacity onPress={() => navigation.navigate("create")}>
      <Feather name="plus" size={40}></Feather>
    </TouchableOpacity>
  )
})



const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "grey",

  },
  title: {
    fontSize: 15,
  },
  icon: {
    fontSize: 20,
  }

});


export default HomeScreen