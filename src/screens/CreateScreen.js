import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Context } from "../context/BlogContext"
import BlogPostForm from "../components/BlogPostForm"

const CreateScreen = ({ onSubmit, navigation, route: { params } }) => {
  const { state } = useContext(Context)
  const { addBlogPost } = useContext(Context)

  return (
    <BlogPostForm onSubmit={(title, content) => {
      addBlogPost(title, content, () => {
        navigation.navigate("home")
      })
    }} />
  )

}


const styles = StyleSheet.create({


});


export default CreateScreen 