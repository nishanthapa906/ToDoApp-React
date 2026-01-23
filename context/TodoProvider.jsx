import { createContext, useEffect, useReducer } from "react";
import { Bounce, toast, ToastContainer } from 'react-toastify';
export const TodoContext = createContext();
const getTodo = () => {
  let todos = localStorage.getItem("todoItem");
  return todos ? JSON.parse(todos) : []       // get every time json data from the local storgae
}
const initialState = {
  todoItems: getTodo(),  
};
const todoReducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case "add": {
      //1. collect the todo 
      //2. check the existence
      //3. if not then add to the todo
      //4. if exist do nothing // return 

      const isExists = state.todoItems.find((item) => {
        return item.id == action.payload.id;
      });
      if (isExists) {
        return state;
      } else {
        let newTodoItem = [...state.todoItems, action.payload]; //not use push becuase react donot undestand becuase mermory address donot change so,,,
        // alert("ToDo is added")  replace it by toast react
        toast('To Do Added Sucessfully!', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        return {
          todoItems: newTodoItem,
        };
      }
    }
    case "delete": {
      //first get id of that todo 
      //Then filter the todo except that to do 
      //return 
      const deleteTodo = state.todoItems.filter((item) => {
        return item.id !== action.payload.id;
      });
    //alert 
      toast.warn('To do Deleted!', {
position: "top-center",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
transition: Bounce,
});
      return {
        todoItems: deleteTodo 
    
      } 
         
    }

     
    case "update": {
      let updatedTodo = state.todoItems.map((item) => {
        return item.id === action.payload.id
          ? { ...item, title: action.payload.title }
          : item;
      });
      return {
        todoItems: updatedTodo,
      };
    }
    case "deleteAll": {
      return {
        todoItems: [],
      };
    }
    default: {
      return state;
    }
  }
};
export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    localStorage.setItem('todoItem', JSON.stringify(state.todoItems));    // first store in local storage then above make fuction to get from there and do all other things, 


  });
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};



//local storage
// localStorage.setItem("name" , "sita");
// localStorage.removeItem("name" , "sita");
// localStorage.clear()