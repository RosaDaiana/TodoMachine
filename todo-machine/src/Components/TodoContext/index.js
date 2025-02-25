import React from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({children}) {

    const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('todos_v1', []);
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    // const [validation, setValidation] = React.useState(false);

    // const validate = (text) => {
    //     const newTodos = [...todos];
    //     const todoIndex = newTodos.findIndex(todo => todo.text === text);
    //     if (todoIndex !== -1) {
    //         setValidation(!validation);
    //         alert('Ya existe un TODO con ese texto');
    //     }
    // }

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    const todosFiltered = todos.filter(todo => todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));

    const todoCompleted = (text) => {
        const newTodos = [...todos];
        const todoIndex = todos.findIndex(todo => todo.text === text);
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    }

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = todos.findIndex(todo => todo.text === text);
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }

    const toggleModal = () => {
        setOpenModal(true);
    }

    const addTodo = (text) => {
        saveTodos([...todos, {text, completed: false}]);
    }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            todosFiltered,
            todoCompleted,
            deleteTodo,
            addTodo,
            toggleModal,
            searchValue,
            setSearchValue,
            openModal,
            setOpenModal
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };