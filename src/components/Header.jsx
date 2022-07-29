import BudgetForm from "./BudgetForm";

const Header = ({ budget, setBudget, isBudgetValid, setIsBudgetValid }) => {
  return(
    <header>
      <h1>Planificador de gastos</h1>
      {
        isBudgetValid ? 
          <h2>Control de gastos</h2>
        : <BudgetForm
            budget={budget}
            setBudget={setBudget}
            isBudgetValid={isBudgetValid}
            setIsBudgetValid={setIsBudgetValid}
          />
      }

    </header>
  );
};

export default Header;
