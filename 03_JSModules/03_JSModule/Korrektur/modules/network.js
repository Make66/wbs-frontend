const fetchProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok)
      throw new Error(`Etwas ist schiefgelaufen: ${response.status}.`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export { fetchProducts };
