import { type } from "@testing-library/user-event/dist/type";
import { useNotes } from "../../context/notes-context";
import { findNotesInArchive } from "../../utils/findNotesInArchive";

export const NotesCard = ({id,title,text,ispinned}) => {
    const {notesDispatch , archive} =useNotes();
    
    const isNotesInArchive=findNotesInArchive(archive,id)
    const onPinClick=(id)=>{
        !ispinned ? notesDispatch({
            type:'PIN',
            payload:{id}
        }):notesDispatch({
            type:'UNPIN',
            payload:{id}
        })
    }
    const onArchiveClick=(id)=>{
      !isNotesInArchive?
      notesDispatch({
        type:'ADD_TO_ARCHIVE',
        payload:{id}
      }): notesDispatch({
        type:'REMOVE_FROM_ARCHIVE',
        payload:{id}
      })
    }
    
  return (
    <div className="w-56 border border-neutral-800 p-2 rounded-sm w-[300px]" key={id}>
      <div className="flex justify-between">
        <p>{title}</p>
        {
          !isNotesInArchive?<button>
          <span    onClick={()=>onPinClick(id)} className={ispinned ? 'material-icons':'material-icons-outlined'}>push_pin</span>
        </button>:<></>
        }
        
      </div>
      <div className="flex flex-col">
        <p>{text}</p>
        <div className="ml-auto">
          <button onClick={()=>onArchiveClick(id)}>
            <span className={isNotesInArchive? 'material-icons':'material-icons-outlined'}>archive</span>
          </button>
          <button>
            <span className="material-icons-outlined">delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};
