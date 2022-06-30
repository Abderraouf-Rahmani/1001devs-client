import React, {useState, useEffect} from 'react'
//import Output from "editorjs-react-renderer";
const edjsHTML = require("editorjs-html");
const edjsParser = edjsHTML();

export default function PostContent(props) {
    
    useEffect(()=>{
        
        const html = edjsParser.parse(props.details.desc[0]);
        const conContainer = document.getElementById('post-content')
        conContainer.innerHTML = html.join('');
        console.log(html.join(''))
    },[])

   console.log(props.details._id)
  return (
<div  className="post" >
      <div className="container">
        
        <div className="post-header">
          <div className="post-title">{}</div>
          <div className="post-details">
            <div className="post-tag">{}</div>
            <div className="post-date">{}</div>
          </div>
        </div>

    <div className="post-content" id="post-content">
</div>
    </div>
        
        
    </div>

  )
}
