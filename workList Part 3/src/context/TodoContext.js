import React, {createContext, useContext} from 'react';
export const TodoContext = React.createContext({
    todos = [
        {
            id : 1,
            todo: 'todo message',
            completed : false,
        }
    ],
    addTodo : (add) => {},
    updateTodo : (id, todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {}    
})


export const TodoContextProvider = TodoContext.Provider

export default function useTheme(){
    return useContext(TodoContext)
}   