import React, {useEffect, useState} from 'react';
// import axios from 'axios';
import logo from './logo.svg';
import { connect } from "react-redux";
import {startRotate, stopRotate} from 'store/actions/rotateActions';
import {getTodo} from 'services/api/todoApi';
import Header from 'components/Header';

function Home(props) {
  const {rotating, stopAction, startAction} = props;

  const [todoList, setTodoList] = useState([]);

  useEffect(()=>{
    async function fetchMyAPI() {
      try{
        const results = await getTodo();
        setTodoList(results);
      } catch (e) {
        console.log(e);
      }
    }

    fetchMyAPI();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="App-header">
        <img src={logo} className={"App-logo" +  (rotating ? '' : ' App-logo-paused')} alt="logo" />
        <a
          className="App-link"
          href="#"
          rel="noopener noreferrer"
          onClick={
            rotating ? stopAction : startAction
          }
        >
          {
            rotating ? 'Stop rotation' : 'Start rotation'
          }
        </a>
        <ul className='todolist'>
          {
            todoList.map(item => 
              <li key={item.id}>{item.title}</li>
            )
          }
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  startAction: () => dispatch(startRotate),
  stopAction: () => dispatch(stopRotate)
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);

