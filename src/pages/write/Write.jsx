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
  const [categories, setCategories] = useState([]);
  const [urlChange, seturlChange] = useState('');
  let editor = null;
  
  const queryParams =new URLSearchParams(window.location.search)
  const postId = queryParams.get("edit")

    useEffect(()=>{
      if (postId){
        try{
          setIsLoading(true)
          const titleInput = document.getElementById('title')
          const tagsInput = document.getElementById('tags')
          const getPostToUpdate = async () => {
            const postToUpdate = await axios.get(`https://1001devs.arabickitchenis.life/api/posts/read/${postId}`)
            setPost(postToUpdate.data)
          setIsLoading(false)
          titleInput.value = postToUpdate.data.title
          setCategories(postToUpdate.data.categories)
          setTitle(postToUpdate.data.title)
          }
          getPostToUpdate()
        }catch(err){
          console.log(err)
        }
      }
    },[])
    
  const onSave = async (e) => {
    e.preventDefault()
    // https://editorjs.io/saving-data
    try {
      const outputData = await editor.save()
      publish(outputData)
    } catch (e) {
      console.log('Saving failed: ', e)
    }
  }

  const publish = (postBody)=>{
    if(isLoading){
      axios.post('https://1001devs.arabickitchenis.life/api/posts/write',{
      username: user.username,
      userid: user._id,
      title: title.replace('?', ""),
      desc: postBody,
      categories:categories
    }).then((res)=>{
      notification('your post has been submited ;)', 'success')
      
      setTimeout(()=>{
        window.location.replace(`/read/${res.data._id}`)
      },2300)
    })
  }else{

    axios.put(`https://1001devs.arabickitchenis.life/api/posts/${postId}`,{
      username: user.username,
      title: titleRef.current.value.replace('?', ""),
      desc: postBody,
      categories:categories
    }).then((res)=>{
      
      notification('your post has been updated ;)', 'success')
      setTimeout(()=>{
        window.location.replace(`/read/${res.data._id}`)
      },2300)
      
    })

  }
  }
useEffect(()=>{

  const tags = ()=>{
    let tagsInput = document.getElementById("tags-input");
let firstInputRegExp = /[a-z0-9]{1}/i;
let tag = [];
let tags = !isLoading ? categories : [];
let TagString = "";
let tagsLimitNum = 4;
let tagLength = 25;
let tagsContainer = document.getElementById("tags-container");
let tagSpan = document.getElementById("tag-span");
let tagSpanClose = document.getElementById("tagSpanClose");
let inputCon = document.getElementById("input-container");
let isTooLong = false;
tagsInput.placeholder = `Add up to ${tagsLimitNum} tags...`;
!isLoading && addToTagSpan(categories);

const say = (msg, msgType) => {
  let say = document.getElementById("say");

  switch (msgType) {
    case "error":
      say.style.color = "red";
      break;
    case "success":
      say.style.color = "green";
      inputCon.style.outline = "2px solid #79db9d";
      break;
    case "alert":
      say.style.color = "#F7C600";
      break;

    default:
      break;
  }

  say.textContent = msg;
};

function addToTagSpan(TAGS)  {
  
  tagsContainer.innerHTML = "";
  if (TAGS.length >= 0 && TAGS.length < tagsLimitNum) {
    tagsInput.placeholder = `Add up to ${tagsLimitNum} tags...`;
  } else {
    tagsInput.placeholder = `you've got all the ${tagsLimitNum} tags :)`;
    say("", "success");
  }
  
  setCategories(TAGS);
  
  TAGS.forEach((TAG, i) => {
    let newSpanCon = document.createElement("span");
    newSpanCon.id = "tag-container";
    newSpanCon.setAttribute(`data-${i}`, "");
    let newSpan = document.createElement("span");
    newSpan.id = "tag-span";
    let newSpanClose = document.createElement("span");
    newSpanClose.id = "tagSpanClose";

    newSpanClose.onclick = () => {
      document.querySelector(`[data-${i}]`).remove();
      tags.splice(i, 1);
      addToTagSpan(!isLoading ? categories : tags);
    };

    newSpan.innerHTML = `<span>#</span> ${TAG}`;
    newSpanClose.innerHTML = "&#10006;";
    newSpanCon.appendChild(newSpan);
    newSpanCon.appendChild(newSpanClose);
    tagsContainer.appendChild(newSpanCon);
  });
};

const handleKeyDown = (e) => {
  e.preventDefault();
  let inputType = e.inputType;
  let input = e.data;

  if (inputType === "deleteContentBackward") {
    say()
    if (tags.length > 0 && TagString === "") {
      tagsInput.value = tags[tags.length - 1];
      TagString = tagsInput.value;
      tag = [...TagString];
      tags.pop();
      addToTagSpan(!isLoading ? categories : tags);
      return;
    }
    isTooLong = false;
    tag.pop();
    TagString = tag.join("");
    tagsInput.value = TagString;
  }

  if (tags.length >= tagsLimitNum) {
    return;
  }

  if (
    (inputType === "insertLineBreak" || input === " " || input === ",") &&
    TagString !== "" &&
    !isTooLong
  ) {
    if (tags.includes(TagString)) {
      say("you already have this tag", "alert");
      return;
    }
    tags.push(TagString);
    addToTagSpan(!isLoading ? categories : tags);
    tagsInput.value = "";
    tag = [];
    TagString = "";
  }

  if (inputType === "insertText") {
    if (!input.match(firstInputRegExp)) return;
    if (tag.length <= tagLength -1) {
      tag.push(input);
      TagString = tag.join("");
      tagsInput.value = TagString;
    } else {
      say(`a tag can't have more than ${tagLength} characters`, "error");
      isTooLong = true;
    }
  }
};

tagsInput.addEventListener("beforeinput", handleKeyDown);

  }

  tags()
},[ isLoading])
  

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
         

          <div className="input-container" id="input-container">
            <div className="tags-container" id="tags-container"></div>
            <div className="input-wrapper">
              <input type="text" id="tags-input" className="tagsInput" />
            </div>
          </div>
          <span id="say"></span>

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
      
    </div>
  );
}


export default Write
