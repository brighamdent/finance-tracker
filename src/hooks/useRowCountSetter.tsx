import { useEffect } from "react";

type SetRowCount = (newRowCount: number) => void;

export default function useRowCountSetter(
  rows: number,
  items: any[],
  setRowCount: SetRowCount,
) {
  const calculateEmptyRows = (rowCount: number, length: number): number => {
    const rowsNeeded = rowCount - length;
    return rowsNeeded > 0 ? rowsNeeded : 0;
  };

  useEffect(() => {
    setRowCount(calculateEmptyRows(rows, items.length));
  }, [items]);
}
