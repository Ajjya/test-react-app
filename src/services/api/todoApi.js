export const getTodo = async () => {
  const req = {
    method: 'GET',
  };
  try {
    // const result = await axios.get(url);

    const url = "https://jsonplaceholder.typicode.com/todos";
    const resp = await fetch(
      url,
      req
    );

    const result = await resp.json();
    
    return result;
  } catch (error) {
    console.error(error);
  }
}