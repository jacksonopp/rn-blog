import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';

import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context)
  const id = navigation.getParam('id')

  const blogPost = state.find(blogpost => blogpost.id === id)

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.pop())
      }}
      initialValues={{ title: blogPost.title, content: blogPost.content }}
    />
  )
}

const styles = StyleSheet.create({})

export default EditScreen