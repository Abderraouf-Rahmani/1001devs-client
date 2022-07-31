import axios from 'axios'
import React, {useContext} from 'react'
import  './deletebtn.css'
import notification from "../../util/utils";
import { Context } from "../../context/Context";
export default function DeleteBtn({postid, postTitle}) {
    const {user} = useContext(Context)

    const handleDelete = async ()=>{
       if(!window.confirm(`Are you sure you want to delete this post?\n${postTitle}`)) return
       try{
        await axios.delete(`/posts/${postid}`, {
            data: {username: user.username}
           })
           notification('your post has been deleted', 'success')
           setTimeout(()=>{
             window.location.replace(`/${user._id}`)
           }, 2000)

       }catch(err){
        console.log(err)
       }
    }
  return (
    <>
      <span onClick={handleDelete} className="delete-btn">Delete</span>

    
    </>
  )
}
