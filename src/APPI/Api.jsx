import axios from "axios";

const appi = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

//get mehod 
export const getApi = () =>{
  return appi.get('/posts');
}

//post method 
export const postApi = (post) =>{
   return appi.post("/posts", post)
}

//deleted mehod

export const deleteApi = (id) =>{
  return appi.delete(`/posts/${id}`)
}

//put method

export const putApi = (id, post) =>{
  return  appi.put(`/posts/${id}`, post)
}