export const fetchCars = async (searchTerm = '') => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars?search=${searchTerm}`);
  const data = await res.json();
  return data || [];
};

export const fetchAvailableCars = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/available`);
  const data = await res.json();
  return data || [];
};

