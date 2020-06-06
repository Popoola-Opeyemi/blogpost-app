import createDataContext from './createDataContext'
import reqHandler from "../api/server"

const blogReducer = (state, action) => {
  switch (action.type) {

    case "deleteBlogPost":
      const result = state.filter((values) => values.id != action.payload)
      return result

    case "getblogPost":
      return action.payload

    case "editPosts":
      return state.map((blog) => blog.id == action.payload.id ? action.payload : blog)

    default:
      return state;
  }
}

const getPosts = dispatch => {
  return async () => {
    const response = await reqHandler.get("/blogposts")
    dispatch({ type: "getblogPost", payload: response.data })

  }
}

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    const response = await reqHandler.post("/blogposts", { title, content })
    response.status == 201 ? callback() : null
  }
}
const editBlogPost = dispatch => {
  return async (id, title, content, callback) => {
    const response = await reqHandler.put(`/blogposts/${id}`, { title, content, id })
    response.status == 200 ? callback() : null
  }
}

const deleteBlogPost = dispatch => {
  return async (id) => {
    const response = await reqHandler.delete(`/blogposts/${id}`)
    response.status == 200 ? dispatch({ type: "deleteBlogPost", payload: id }) : null
  }

}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getPosts }, [])