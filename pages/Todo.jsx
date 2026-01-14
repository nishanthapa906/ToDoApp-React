import { useContext, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import { TodoContext } from "../context/ToDoprovider";

function Todo() {
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");

  const { state, dispatch } = useContext(TodoContext);
  console.log(state.todoItems);

  const addTodo = () => {
    if (title.length <= 0) {
      setTitleError("Plz. enter the todo*");
      return;
    }
    console.log(title);

    dispatch({
      type: "add",
      payload: {
        id: uuidv4(),
        title: title,
      },
    });


    setTitle("");
    setTitleError("");
  };
  return (
    <div className="bg-gray-300 p-10 w-[700px]  m-auto mt-5   flex flex-col   ">
      <div className=" p-5  space-x-3 flex  justify-center ">
        <div>
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            className="outline-none border w-[400px] p-3 h-12 rounded-sm"
            type="text"
            placeholder="Enter todo..."
          />
          {titleError.length > 0 && (
            <p className="text-red-600 italic p-2">{titleError}</p>
          )}
        </div>
        <button
          onClick={() => {
            addTodo();
          }}
          className="bg-orange-500 text-white w-20 rounded-md  h-12"
        >
          Add todo
        </button>
      </div>
      <div className="   p-5">
        {state.todoItems.length > 0 ? (
          <>
            {state.todoItems.map((item) => {
              return (
                <div className="todo1  shadow-2xl shadow-gray-100 bg-white rounded-sm p-4 flex  items-center  justify-between  ">
                  <div className="font-serif">{item.title}</div>
                  <div className="space-x-5">
                    <button className="bg-amber-700  p-2 w-14 text-white rounded-sm">
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        dispatch({
                          type: "delete",
                          payload: { id: item.id },
                        });

                      }
                      }
                      className="bg-red-600  p-2 w-14 text-white rounded-sm">
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <div className=" w-96 m-auto p-4 text-2xl flex gap-x-4 justify-center items-center "> 
           <h1 className="font-semibold italic"> There is No todo to show </h1>
            <img 
            width="30"
            src="https://png.pngtree.com/png-clipart/20240927/original/pngtree-sad-emoji-png-image_16109987.png"
          />
          
          </div>
        )}
      </div>
    </div>
  );
}

export default Todo;

// crud