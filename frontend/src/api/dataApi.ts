export const API_BASE_URL = "http://localhost:5000/api/data";

export interface IData {
  value: number;
  timestamp: string;
}

// Fetch initial data
export const fetchData = async (): Promise<IData[]> => {
  const response = await fetch(API_BASE_URL);
  return await response.json();
};
export {};
