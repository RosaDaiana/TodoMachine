import React from 'react';
import { TodoCounter } from '../Components/TodoCounter';
import { TodoSearch } from '../Components/TodoSearch';
import { TodoList } from '../Components/TodoList';
import { TodoItem } from '../Components/TodoItem';
import {TodoButton} from '../Components/TodoButton';
import { TodosLoading } from '../Components/TodosLoading';
import { TodosError } from '../Components/TodosError';
import { NewTodos } from '../Components/NewTodos';
import { TodoForm } from '../Components/TodoForm';
import { Modal } from '../Components/Modal';
import { TodoContext } from '../Components/TodoContext';
import perfil from '../img/images.jpg';

function AppUI() {
    const {
      loading,
      error,
      todosFiltered,
      totalTodos,
      todoCompleted,
      deleteTodo,
      openModal,
      toggleModal,
      validate
    } = React.useContext(TodoContext);

    return (
        <>
          <div className='container'>
            <div className='profile'>
              <img src={perfil} alt='Foto de perfil' className='profile-img'/>
              <h1 className='title-name'>Hi, Daiana</h1>
            </div>
            <div className='todo-container'>
              <TodoCounter />
              <TodoSearch />
              <TodoList>
                {loading && <TodosLoading />}
                {error && <TodosError />}
                {(!loading && totalTodos === 0) && <NewTodos />}
                {todosFiltered.map(todo => (
                  <TodoItem 
                    key={todo.text} 
                    text={todo.text} 
                    completed={todo.completed}
                    onComplete={() => todoCompleted(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                  />
                ))}
              </TodoList>
            </div>
            <div className='black-bar'>
              <TodoButton onOpen={() => toggleModal()} />
            </div>
            {openModal && (
              <Modal>
                <TodoForm validate={validate}/>  
              </Modal >
            )}
          </div>
        </>
      );
}

export { AppUI };