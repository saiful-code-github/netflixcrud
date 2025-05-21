import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

//get mehod 
export const getApi = () =>{
  return api.get('/posts/');
}

//post method 
export const postApi = (post) =>{
   return api.post("/posts/", post)
}

//deleted mehod

export const deleteApi = (id) =>{
  return api.delete(`/posts/${id}`)
}

//put method

export const putApi = (id, post) =>{
  return  api.put(`/posts/${id}`, post)
}