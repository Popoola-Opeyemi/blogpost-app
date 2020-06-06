import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Context } from "../context/BlogContext"
import BlogPostForm from "../components/BlogPostForm"

const EditScreen = ({ navigation, route: { params } }) => {
  // console.log(params)
  const { state, editBlogPost } = useContext(Context)

  const blogPost = state.find(blog => blog.id == params.id)

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(params.id, title, content, () => {
          navigation.pop()
        })
      }} />

  )
}


const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 20,
    padding: 5,
    margin: 5
  },
  label: {
    fontSize: 20,
    marginBottom: 5

  }

});


export default EditScreen 