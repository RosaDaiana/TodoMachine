import './TodosError.css';
import error from '../../img/error2.svg';

function TodosError() {
  return (
    <div class="container-error">
        <img className='img-error' src={error} alt='imagen svg de error' />
        <h1 className='error-title'>Ups, algo salió mal... Intenta nuevamente</h1>
        <button className="btn-error">Intentar de nuevo</button>
    </div>
  );
}

export { TodosError };