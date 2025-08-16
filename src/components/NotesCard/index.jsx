import { type } from "@testing-library/user-event/dist/type";
import { useNotes } from "../../context/notes-context";
import { findNotesInArchive } from "../../utils/findNotesInArchive";
import { findNotesInBin } from "../../utils/findNotesInBin";

export const NotesCard = ({id,title,text,ispinned}) => {
    const {notesDispatch , archive , bin} =useNotes();
    
    const isNotesInArchive=findNotesInArchive(archive,id)
    const isNotesInBin=findNotesInBin(bin,id)
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
    const onDeleteClick=(id)=>{
      !isNotesInBin?
      notesDispatch({
        type:'DELETE',
        payload:{id}
      }):notesDispatch({
        type:'PERMANENT_DELETE',
        payload:{id}
      })
    }
    
  return (
    <div className="w-56 border border-neutral-800 p-2 rounded-sm w-[300px]" key={id}>
      <div className="flex justify-between ">
        <p>{title}</p>
        {
          !isNotesInArchive && !isNotesInBin?<button>
          <span    onClick={()=>onPinClick(id)} className={ispinned ? 'material-icons':'material-icons-outlined'}>push_pin</span>
        </button>:<></>
        }
        
      </div>
      <div className="flex flex-col">
        <p>{text}</p>
        <div className="ml-auto">
          {
            !isNotesInBin?<button onClick={()=>onArchiveClick(id)}>
            <span className={isNotesInArchive? 'material-icons':'material-icons-outlined'}>archive</span>
          </button>:<></>
          }
          
          {
            !isNotesInArchive?<button >
            <span onClick={()=>onDeleteClick(id)} className="material-icons-outlined">delete</span>
          </button>:<></>
          }
          
        </div>
      </div>
    </div>
  );
};
