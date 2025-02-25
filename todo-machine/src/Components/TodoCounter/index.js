import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';


function TodoCounter() {
  const {totalTodos, completedTodos, loading} = React.useContext(TodoContext);

  if (totalTodos !== 0 && totalTodos === completedTodos){  
    return (
      <h1 className="counter-title">
        ¡Has completado todos tus TODO's 🎉!
      </h1>
    );
  } else if (totalTodos === 0){
    if (loading){
      return (
        <h1 className="counter-title">
          Cargando tus TODO's...
        </h1>
      );
    } else {
      return (
        <h1 className="counter-title">
          No tienes TODO's pendientes 😎
        </h1>
      );
    }
  } else {
    return (
      <h1 className="counter-title">
        Has completado {completedTodos} de {totalTodos} TODO's
      </h1>
    );
  }
  
}

  export { TodoCounter };