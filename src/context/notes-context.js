import { createContext,useContext,useReducer } from "react";
import { notesReducer } from "../reducers/notesReducers";
const NotesContext=createContext();
const NotesProvider=({children})=>{
    const initialState = {
    title: "",
    text: "",
    notes: [],
    archive:[]
    // pinnedNotes:[],
    // unpinnedNotes:[]
  };
  const [{ title, text, notes,archive }, notesDispatch] = useReducer(
    notesReducer,
    initialState
  );
    return(
        <NotesContext.Provider value={{title,text,notes,notesDispatch,archive}}>
            {children}
        </NotesContext.Provider>
    )
}
const useNotes=()=>useContext(NotesContext);
export {NotesProvider,useNotes}