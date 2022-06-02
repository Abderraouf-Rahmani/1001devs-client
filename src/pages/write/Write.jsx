import React, { useRef, useCallback } from "react";
import "./write.css";
import { createReactEditorJS } from "react-editor-js";
import { EDITOR_JS_TOOLS } from "./tools";
const EditorJsWrite = createReactEditorJS();
export default function Write() {
  const editorCore = React.useRef(null);

  const handleInitialize = React.useCallback((instance) => {
    editorCore.current = instance;
    console.log("sdfgsdfgsdfg");
  }, []);

  const handleSave = React.useCallback(async () => {
    const savedData = await editorCore.current.save();
    //console.log(savedData.blocks);
  }, []);

  return (
    <div className="write">
      <div className="write-container-header">
        <div className="left">Create Pose</div>
        <div className="right">
          <div className="header-ops" id="edit">
            Edit
          </div>
          <div onClick={handleSave} className="header-ops" id="preview">
            Preview
          </div>
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
          />
          <input
            type="text"
            name="tags"
            id="tags"
            className="tags"
            placeholder="Add up to 4 tags..."
          />
          <div className="editor-input">
            <EditorJsWrite
              tools={EDITOR_JS_TOOLS}
              onInitialize={handleInitialize}
              placeholder={"Write your content here..."}
              defaultValue={
                {
                  "time" : 1654205545956,
    "blocks" : [
        {
            "id" : "lSqG7OXlxX",
            "type" : "header",
            "data" : {
                "text" : "Learn React with me ;)",
                "level" : 2
            }
        },
        {
            "id" : "qKcaDIqTlz",
            "type" : "paragraph",
            "data" : {
                "text" : "To learn react you need to be a GENUIS like ME, because it demand hight dedree of focus and unbelivable amount of patient, you may argue that it's not that big of a deal, but...  |"
            }
        },
        {
          "id" : "GEiKXIcF-O",
          "type" : "header",
          "data" : {
              "text" : "Before we start",
              "level": 2
              
          }
        },
        {
          "id" : "GEiKXYcH-O",
          "type" : "paragraph",
          "data" : {
              "text" : "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text."
              
          }
        }
                ]}
              }
            />
          </div>
          <div className="post-btns">
            <button className="publish-btn btn" type="submit">
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
