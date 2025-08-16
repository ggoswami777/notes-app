import { Link, NavLink } from "react-router-dom";

export const SideBar = () => {
  const getStyles=({isActive})=>{
    return isActive?'text-slate-50 flex align-center gap-1 bg-indigo-800 px-2 py-1 rounded-tr-full rounded-br-full':'hover:bg-indigo-800 hover:text-slate-50 flex align-center gap-1 px-2 py-1 rounded-tr-full rounded-br-full';
  }
  return (
    <aside className="flex flex-col gap-3 border-r-2 border-gray-100 h-screen w-[150px] p-3">
      <NavLink className={getStyles} to="/">
        <span className="material-icons-outlined">home</span>
        <span>Home</span>
      </NavLink>
      <NavLink className={getStyles}  to="/archive">
        <span className="material-icons-outlined">archive</span>
        <span>Archive</span>
      </NavLink>
      
      <NavLink className={getStyles}  to="/bin">
        <span className="material-icons-outlined">delete</span>
        <span>Bin</span>
      </NavLink>
    </aside>
  );
};
