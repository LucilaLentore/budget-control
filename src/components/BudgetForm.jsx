import { useState } from 'react';
import Message from './Message';

const BudgetForm = ({ budget, setBudget, isBudgetValid, setIsBudgetValid }) => {
  const [message, setMessage] = useState('');

  const validateBudget = (e) => {
    e.preventDefault();
  
    if(!budget || budget < 0) {
      setMessage('No es un presupuesto válido')
      return;
    }
  
    setMessage('');
    setIsBudgetValid(true);
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={validateBudget} className="formulario">
        <div className="campo">
          <label>
            Definir presupuesto
          </label>
          <input 
            className="nuevo-presupuesto"
            type="text"
            placeholder="Añadí tu presupuesto"
            value={budget}
            onChange={ (e) => setBudget(Number(e.target.value))}
          />
        </div>
        <input
          type="submit"
          value="Añadir"
        />
        {message && <Message type="error" >{message}</Message>}
      </form>
    </div>
  );
};

export default BudgetForm;
