export const getTodo = async () => {
  const req = {
    method: 'GET',
    // mode: 'no-cors',
    // headers: new Headers({
    //   'Accept': 'application/json',
    //   'Content-Type': 'application/json',
    // }),
  };
  try {
    // const url = "http://randomuser.me/api/?result=20";
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