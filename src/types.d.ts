// Event types
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
type FormEvent = React.FormEvent<HTMLFormElement>;

// State types
type IncomeItem = {
  id: number;
  source: string;
  amount: number;
};

// Prop types
type AddIncomeModalProps = {
  setItems: React.Dispatch<React.SetStateAction<IncomeItem[]>>;
};

type EditIncomeModalProps = {
  item: IncomeItem;
  items: IncomeItem[];
  setItems: React.Dispatch<React.SetStateAction<IncomeItem[]>>;
};
