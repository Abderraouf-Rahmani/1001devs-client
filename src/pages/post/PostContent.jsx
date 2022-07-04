import React, {useState, useEffect} from 'react'
//import Output from "editorjs-react-renderer";
const edjsHTML = require("editorjs-html");
const edjsParser = edjsHTML();

export default function PostContent({desc}) {
    const [content, setContent] = useState([])
    const [htmlContent, setHtmlContent] = useState([])
    useEffect(()=>{
        
        const html = edjsParser.parse(desc[0]);
        const conContainer = document.getElementById('post-content')
        conContainer.innerHTML = html.join('');
    },[])

  return (
    <div className="post-content" id="post-content">

    
        
        
    </div>

  )
}
