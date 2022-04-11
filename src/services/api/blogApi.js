export const getBlog = async () => {
  const req = {
    method: 'GET'
  }
  try {
    const url = "https://jsonplaceholder.typicode.com/posts";
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