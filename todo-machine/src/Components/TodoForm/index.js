import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
    // Global Context
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    // Local State
    const [text, setText] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(text);
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setText(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <div className='modal-header'>
                <h1 className='modal-title'>Agregar un TODO</h1>
                <i className="bi bi-x" onClick={onCancel}></i>
            </div>
            <div className='modal-content'>
                <input 
                    value={text} 
                    onChange={onChange}
                    className='input-modal' 
                    type="text" 
                    placeholder='Ej. Buscar dinosaurios'
                    required
                />
                <button className='btn-modal'>Agregar</button>
            </div>
        </form>
    )
}

export { TodoForm };