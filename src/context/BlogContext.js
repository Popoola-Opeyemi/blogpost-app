import createDataContext from './createDataContext'

const blogReducer = (state, action) => {
  switch (action.type) {
    case "addBlogPost":
      const value = [...state,
      {
        id: state.length + 1,
        title: action.payload.title,
        content: action.payload.content
      }]
      return value

    case "deleteBlogPost":
      const result = state.filter((values) => values.id != action.payload)
      return result

    case "editPosts":
      return state.map((blog) => blog.id == action.payload.id ? action.payload : blog)

    default:
      return state;
  }
}

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "addBlogPost", payload: { title, content } })
    if (callback()) {
      callback()
    }
  }
}
const editBlogPost = dispatch => {
  return (id, title, content, callback) => {
    dispatch(
      {
        type: "editPosts",
        payload: { title, content, id }
      })
    if (callback()) {

      callback()
    }
  }
}

const deleteBlogPost = dispatch => {
  return (id) => {
    dispatch({ type: "deleteBlogPost", payload: id })
  }

}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost }, [{ title: "test Post", content: "test content", id: 1 }])