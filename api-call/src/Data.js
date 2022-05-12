import React ,{useState,useEffect} from 'react'
import axios from 'axios';
function Data() {
  const [post,setPost] =useState([])
  useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(res=>{
          console.log(res)
          setPost(res.data)
      })
      .catch(err =>{
          console.log(err)
      })
  },[])
    return (
        <div>
            <ul>
                {
                    post.map(post=><li key={post.id}>{post.userid}{post.id}{post.title}{post.completed}</li>)
                }
            </ul>
        </div>
    )
}

export default Data