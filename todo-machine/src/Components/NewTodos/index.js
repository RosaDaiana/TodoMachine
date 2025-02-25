import './NewTodos.css';
import nuevo from '../../img/newtodo.svg';

function NewTodos() {
  return (
    <div className='container-newTodos'> 
      <img className='img-newTodo' src={nuevo} alt='imagen para agregar nuevo TODO' />
      <h1 className='new-todos'>
        Aún no tienes ninguna tarea pendiente, ¡añade una nueva!
      </h1>
      <p className='flecha'>↓</p>
    </div>
  );
}

export { NewTodos };