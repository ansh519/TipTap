import Tiptap from "../tiptap"

const Newpost = () => {
  const handleEditorContentSave=(html)=>{
    
    console.log(html);
  }
  return (
    <div>
      <Tiptap onEditorContentSave={handleEditorContentSave}>  </Tiptap>
        </div>
  )
}

export default Newpost