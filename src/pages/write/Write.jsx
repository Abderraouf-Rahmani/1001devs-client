import React, { useRef, useCallback,useState,  Component} from "react";
import axios from "axios"
import "./write.css";
import EditorJs from '@natterstefan/react-editor-js'
import { EDITOR_JS_TOOLS } from "./tools";
import { data } from "./data";
import notification from "../../util/utils";


const Write = ()=>{
  const [title, setTitle] = useState('');
  const [categories, setCategories] = useState('');
  let editor = null;



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
    axios.post('/posts/write',{
      username: 'Abdu',
      title: title.replace('?', ""),
      desc: postBody,
      categories:categories.replace(/ /g, "").split(',')
    }).then((res)=>{
      console.log(res)
      notification('your post has been submited ;)', "error")
    })
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
          />
          <input
            type="text"
            name="tags"
            id="tags"
            className="tags"
            placeholder="Add up to 4 tags..."
            onChange={e=>setCategories(e.target.value)}
          />
          <div className="editor-input">




          <EditorJs
          tools={EDITOR_JS_TOOLS}
          holder="custom-editor-container"
          editorInstance={editorInstance => {
            editor = editorInstance
          }}
        />




          </div>
          <div className="post-btns">
  
            <button
            onClick={onSave}
            className="publish-btn btn" type="submit">
              Publish
            </button>
            <button className="draft-btn btn" type="submit">
              Save Draft
            </button>
          </div>
        </form>
      </div>
      
    </div>
  );
}


export default Write