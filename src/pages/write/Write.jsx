import React, {useState,  useContext, useRef, useEffect} from "react";
import axios from "axios"
import "./write.css";
import EditorJs from '@natterstefan/react-editor-js'
import { EDITOR_JS_TOOLS } from "./tools";
import notification from "../../util/utils";
import { Context } from "../../context/Context";



const Write = ()=>{
  const titleRef = useRef()
  const CategoriesRef = useRef()
  const {user} = useContext(Context)
  const [title, setTitle] = useState('');
  const [isLoading, setIsLoading] = useState(true)
  const [post, setPost] = useState([])
  const [categories, setCategories] = useState('');
  let editor = null;
  
  const queryParams =new URLSearchParams(window.location.search)
  const postId = queryParams.get("edit")
  
  //console.log(postId)

    useEffect(()=>{
      if (postId){
        try{
          setIsLoading(true)
          const titleInput = document.getElementById('title')
          const tagsInput = document.getElementById('tags')
          const getPostToUpdate = async () => {
            const postToUpdate = await axios.get(`/posts/read/${postId}`)
            setPost(postToUpdate.data)
            console.log(postToUpdate.data)
          setIsLoading(false)
          titleInput.value = postToUpdate.data.title
          tagsInput.value = postToUpdate.data.categories
          setCategories(postToUpdate.data.categories)
          setTitle(postToUpdate.data.title)
          }
          getPostToUpdate()
        }catch(err){
          console.log(err)
        }
      }
    },[])
    
    !isLoading && console.log(post.desc[0].blocks[0])
  const onSave = async (e) => {
    e.preventDefault()
    // https://editorjs.io/saving-data
    try {
      const outputData = await editor.save()
      //console.log('Article data: ', postContent)
      publish(outputData)
    } catch (e) {
      console.log('Saving failed: ', e)
    }
  }

  const publish = (postBody)=>{
    if(isLoading){
      axios.post('/posts/write',{
      username: user.username,
      title: title.replace('?', ""),
      desc: postBody,
      categories:categories.replace(/ /g, "").split(',')
    }).then((res)=>{
      //console.log(res)
      notification('your post has been submited ;)')
    })
  }else{

    axios.put(`/posts/${postId}`,{
      username: user.username,
      title: titleRef.current.value.replace('?', ""),
      desc: postBody,
      categories:CategoriesRef.current.value.replace(/ /g, "").split(',')
    }).then((res)=>{
      //console.log(res)
      notification('your post has been updated ;)')
    })

  }
  }

  

  return (
    <div className="write">
      <div className="write-container-header">
        <div className="left">Create Pose</div>
        <div className="right">
          
          
        </div>
      </div>

      <div className="write-container">
        <form action="#">
          <input
            type="text"
            name="title"
            id="title"
            className="title"
            placeholder="New post title here..."
            onChange={e=>setTitle(e.target.value)}
            ref= {titleRef}
          />
          <input
            type="text"
            name="tags"
            id="tags"
            className="tags"
            placeholder="Add up to 4 tags..."
            onChange={e=>setCategories(e.target.value)}
            ref= {CategoriesRef}

          />
          <div className="editor-input">


          
          {!isLoading && (<EditorJs
          tools={EDITOR_JS_TOOLS}
          holder="custom-editor-container"
          data={post.desc[0]}
          placeholder='Write your post content here...'
          editorInstance={editorInstance => {
            editor = editorInstance
          }}/>) }

          {isLoading && (<EditorJs
          tools={EDITOR_JS_TOOLS}
          placeholder='write your post content here...'
          holder="custom-editor-container"
          editorInstance={editorInstance => {
            editor = editorInstance
          }}/>) }



          </div>
          <div className="post-btns">
  
            <button
            onClick={onSave}
            className="publish-btn btn" type="submit">
              Publish
            </button>
           
          </div>
        </form>
      </div>
      <div id="notify">
        <div id="msg-container">
          placeholder
        </div>
        <div className="progress"></div>
      </div>
    </div>
  );
}


export default Write