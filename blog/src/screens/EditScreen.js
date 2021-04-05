import React, { useContext } from 'react'
import { useRoute } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(BlogContext)
  const route = useRoute()

  const blogPost = state.find((blogPost) => blogPost.id === route.params.id)

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) =>
        editBlogPost(route.params.id, title, content, () => navigation.pop())
      }
    />
  )
}

export default EditScreen

const styles = StyleSheet.create({})
