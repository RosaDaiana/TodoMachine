import './TodoList.css';

function TodoList(props){
    return (
      <ul className='lista'>
        {props.children}
      </ul>
    );
  }

  export { TodoList };