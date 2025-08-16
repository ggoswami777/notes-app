import { Fragment } from "react";
import { Navbar } from "../../components/Navbar";
import { SideBar } from "../../components/Sidebar";

import { type } from "@testing-library/user-event/dist/type";
import { NotesCard } from "../../components/NotesCard/index.jsx";
import { useNotes } from "../../context/notes-context.js";

export const Home = () => {
  const { title, text, notes, notesDispatch } = useNotes();
  const onTitleChange = (e) => {
    notesDispatch({
      type: "TITLE",
      payload: e.target.value,
    });
  };
  const onTextChange = (e) => {
    notesDispatch({
      type: "TEXT",
      payload: e.target.value,
    });
  };
  const onAddClick = () => {
    notesDispatch({
      type: "ADD_NOTE",
    });
    notesDispatch({
      type: "CLEAR_INPUT",
    });
  };
  const pinnedNotes =
    notes?.length > 0 && notes.filter(({ ispinned }) => ispinned);
  const otherNotes =
    notes?.length > 0 && notes.filter(({ ispinned }) => !ispinned);
  console.log(notes);
  return (
    <Fragment>
      <Navbar />
      <main className="flex gap-3">
        <SideBar />
        <div className="flex flex-col w-screen mt-7">
          <div className="flex flex-col w-[450px] border-red-400 relative self-center">
            <input
              value={title}
              onChange={onTitleChange}
              className="border border-neutral-800 rounded-t-md focus:outline-none border-b-0 p-1"
              placeholder="Enter title"
            />
            <textarea
              value={text}
              onChange={onTextChange}
              className="border border-neutral-800 rounded-b-md focus:outline-none h-[100px] border-t-0 p-1"
              placeholder="Enter text"
            />
            <button
              disabled={title.length === 0}
              onClick={onAddClick}
              className="absolute bottom-2 right-2 w-7 h-7  bg-indigo-800 text-slate-50 rounded-full"
            >
              <span className="material-icons">add</span>
            </button>
          </div>
          <div className="mt-14 ml-10 flex flex-col gap-6">
            {pinnedNotes?.length > 0 && (
              <div>
                <h2>Pinned Notes</h2>
                <div className="flex flex-wrap gap-4 ">
                  {pinnedNotes?.length > 0 &&
                    pinnedNotes.map(({ id, title, text, ispinned }) => (
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
            )}
            <div>
              {pinnedNotes?.length > 0 && <h2>Other Notes</h2>}
              <div className="flex flex-wrap gap-4 ">
                {otherNotes?.length > 0 &&
                  otherNotes.map(({ id, title, text, ispinned }) => (
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
          </div>
        </div>
      </main>
    </Fragment>
  );
};
