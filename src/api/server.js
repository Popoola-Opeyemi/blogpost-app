import axios from "axios"

const reqHandler = axios.create({
  baseURL: "http://bd9da606deab.ngrok.io"
})

export default reqHandler

