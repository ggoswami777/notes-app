import { v4 as uuid } from "uuid";
export const notesReducer=(state,{type,payload})=>{
    switch(type){
        case 'TITLE':
            return{
                ...state,
                title:payload
        
           }
        case 'TEXT':
            return{
                ...state,
                text:payload
            } 
        case 'ADD_NOTE':
            return{
                ...state,
                notes:[...state.notes,{text:state.text,title:state.title,id:uuid(), ispinned:false}]
            }
        case 'CLEAR_INPUT':
            return{
                ...state,
                title:'',
                text:''
            }
        case 'PIN':
            return{
                ...state,
                notes:state.notes.map(note=>note.id===payload.id?{...note,ispinned:!note.ispinned}:note)
            }
        case 'UNPIN':
            return{
                ...state,
                notes:state.notes.map(note=>note.id===payload.id?{...note,ispinned:!note.ispinned}:note)
            }
        case 'ADD_TO_ARCHIVE':
            return{
                ...state,
                archive:[...state.archive,state.notes.find(({id})=> id === payload.id)],
                notes: state.notes.filter(({id})=>id!==payload.id)
            }
        case 'REMOVE_FROM_ARCHIVE':
            return{
                ...state,
                notes:[...state.notes,state.archive.find(({id})=>id===payload.id)],
                archive:state.archive.filter(({id})=>id!==payload.id),
                
            }
        case 'DELETE':
            const noteToDelete=state.notes.find(({id})=> id ===payload.id);
            if(!noteToDelete) return state;
            return{
                
                ...state,
                bin:[...state.bin,state.notes.find(({id})=>id===payload.id)],
                notes: state.notes.filter(({id})=>id!==payload.id)

            }
        case 'PERMANENT_DELETE':
            return{
                ...state,
                bin:state.bin.filter(({id})=>id!==payload.id),

            }
        default:
            return state
    }
}