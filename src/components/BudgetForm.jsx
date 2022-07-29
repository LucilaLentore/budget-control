const BudgetForm = () => {
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario">
        <div className="campo">
          <label>
            Definir presupuesto
          </label>
          <input 
            className="nuevo-presupuesto"
            type="text"
            placeholder="Añadí tu presupuesto"
          />
        </div>
        <input
          type="submit"
          value="Añadir"
        />
      </form>
    </div>
  );
};

export default BudgetForm;