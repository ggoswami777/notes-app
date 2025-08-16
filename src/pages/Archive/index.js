import { Fragment } from "react/jsx-runtime";
import { Navbar } from "../../components/Navbar";
import { SideBar } from "../../components/Sidebar";
import { useNotes } from "../../context/notes-context";
import { NotesCard } from "../../components/NotesCard";



export const Archive = () => {
    const {archive}=useNotes();
  return (
    <Fragment>
      <Navbar />
      <main className="flex gap-3">
        <SideBar />
        <div >
          <div className="flex flex-wrap gap-4 w-screen mt-7">
            {archive?.length > 0 &&
              archive.map(({ id, title, text, ispinned }) => (
                <NotesCard
                  key={id}
                  id={id}
                  title={title}
                  text={text}
                  ispinned={ispinned}
                />
              ))}
          </div>
        </div>
      </main>
    </Fragment>
  );
};
