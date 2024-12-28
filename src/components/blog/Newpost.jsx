import Tiptap from "../tiptap"
import { useState } from "react"
import Showpost from "./Showpost";

const Newpost = () => {
    
  const [htmlContent,setHtmlContent] =useState(" ");

  const handleEditorContentSave=(html)=>{
    
   // console.log(html);

    setHtmlContent(html)
  }
  return (
    <div>
      <Tiptap onEditorContentSave={handleEditorContentSave}>  </Tiptap>
      
      <hr/> <Showpost content={htmlContent}></Showpost>
        </div>
  )
}

export default Newpost