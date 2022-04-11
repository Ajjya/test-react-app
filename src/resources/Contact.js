/* eslint-disable no-debugger */
import React, {useState, createRef} from 'react';
import Header from 'components/Header';

function Contact(props) {
  const initValues = {
    name: '',
    age: 0,
  }
  const myRef = createRef();

  const [data, setData] = useState(initValues);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form was sent suceesfully!");
  }

  const handleChange = (event) => {
    setData({...data, [event.target.name]: event.target.value});
  }

  const handleFocus = () => {
    myRef.current.focus();
    event.preventDefault();
  }

  return <div className="App">
      <Header />
      <div className="formWrap">
        <h2>{`Welcome ${data.name}`}</h2>
        <form onSubmit={handleSubmit} method="POST">
          <div>
            <label>Name:</label>
            <input type="text" value={data.name} name="name" onChange={handleChange}/>
          </div>
          <button onClick={handleFocus}>Focus on Age</button>
          <div>
            <label>Age: </label>
            <input type="number" value={data.age} name="age" onChange={handleChange} ref={myRef}/>
          </div>
          <div>
            <input type="submit" value="Submit"/>
          </div>
        </form>
      </div>
    </div>
}

export default Contact;