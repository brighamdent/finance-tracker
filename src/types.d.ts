// Event types
type ChangeEvent = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>;
type FormEvent = React.FormEvent<HTMLFormElement>;

// State types
type IncomeItem = {
  id: number;
  source: string;
  amount: number;
};

type BudgetItem = {
  id: number;
  priority: number;
  item: string;
  cost: number;
  spent: number;
};

// Prop types
type AddIncomeModalProps = {
  setItems: React.Dispatch<React.SetStateAction<IncomeItem[]>>;
};

type AddBudgetModalProps = {
  items: BudgetItem[];
  setItems: React.Dispatch<React.SetStateAction<BudgetItem[]>>;
};

type EditIncomeModalProps = {
  item: IncomeItem;
  items: IncomeItem[];
  setItems: React.Dispatch<React.SetStateAction<IncomeItem[]>>;
};

type EditBudgetModalProps = {
  item: BudgetItem;
  items: BudgetItem[];
  setItems: React.Dispatch<React.SetStateAction<BudgetItem[]>>;
};
