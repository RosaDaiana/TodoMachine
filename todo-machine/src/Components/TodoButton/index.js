import './TodoButton.css';

function TodoButton({onOpen}) {
    return (
      <button className='btn-add' onClick={onOpen}>+</button>   
    );
  }

export {TodoButton};