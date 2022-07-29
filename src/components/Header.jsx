import BudgetForm from "./BudgetForm";

const Header = ({ budget, setBudget }) => {
  return(
    <header>
      <h1>Planificador de gastos</h1>
      <BudgetForm
        budget={budget}
        setBudget={setBudget}
      />
    </header>
  );
};

export default Header;
