import './TodoItem.css';

function TodoItem(props) {
  return (
      <li>
        {/* <input className='checkbox' type="checkbox"/> */}
        <i className={`bi bi-check-lg ${props.completed && 'completed'}`} onClick={props.onComplete}></i>
        <p className={`text ${props.completed && 'text--complete'}`}>{props.text}</p>
        <i className="bi bi-trash" onClick={props.onDelete}></i>
      </li>
    );
  }

export { TodoItem };