 import { useEditor,EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Underline from "@tiptap/extension-underline"


const extensions=[
    StarterKit,Underline
]

const content =``

const Tiptap = ({onEditorContentSave}) => {
    const editor = useEditor({
        extensions,
        content
    })
    if(!editor){
        return null
    }
    const handleEditorContent=()=>{
        const html = editor.getHTML()
       // console.log(html);
       onEditorContentSave(html)
    }
  return (
    <div>
        <div>
            <button onClick={()=>editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus()
                    .toggleBold().run()
                } className={editor.isActive('bold')? 'is-active' :''}>
                   <strong  >BOLD</strong>
                     </button>

                     <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={editor.isActive('underline') ? 'is-active' : ''}
          >
            <u>U</u>
          </button>

                     <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleItalic()
              .run()
          }
          className={editor.isActive('italic') ? 'is-active' : ''}
        >
          <em>Italic</em>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleStrike()
              .run()
          }
          className={editor.isActive('strike') ? 'is-active' : ''}
        >
          Strike
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
        >
          H1
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
        >
          Bullet list
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'is-active' : ''}
        >
          Ordered list
        </button>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .undo()
              .run()
          }
        >
          Undo
        </button>
        
        <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
          Clear marks
        </button>

        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive('paragraph') ? 'is-active' : ''}
        >
          Paragraph
        </button>

        </div>
        <div>
            <EditorContent editor={editor}></EditorContent>

        </div>
<button onClick={handleEditorContent}>Save</button>
    </div>
  )
}

export default Tiptap