export const calculateTotal = <T extends Record<string, any>>(records: T[], property: keyof T): number => {
  return records.reduce((sum, record) => {
    return sum + (record[property] as number);
  }, 0);
};

export const calculateSetRate = (totalNumber: number, totalCount: number): number => {
  return totalCount > 0 ? totalNumber / totalCount : 0;
};

export const calculateAverage = (totalAmount: number, totalCount: number): number => {
  return totalCount > 0 ? totalAmount / totalCount : 0;
};