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
