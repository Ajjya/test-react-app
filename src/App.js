import React, {useEffect} from 'react';
// import axios from 'axios';
import logo from './logo.svg';
import './App.css';
// import { connect } from "react-redux";
// import {startRotate, stopRotate} from 'store/actions/rotateActions';
// import {getTodo} from 'services/api/todoApi';

function App(props) {
  // const {rotating, stopAction, startAction} = props;
  const rotating = true;
  const stopAction = () => {

  }
  const startAction = () => {

  }

  useEffect(()=>{
    console.log('useEffect');
    // async function fetchMyAPI() {
    //   try{
    //     const results = await getTodo();
    //     console.log(results);
    //   } catch (e) {
    //     console.log(e);
    //   }
    // }

    // fetchMyAPI();

  }, []);

  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

// const mapStateToProps = state => ({
//   ...state
// });

// const mapDispatchToProps = dispatch => ({
//   startAction: () => dispatch(startRotate),
//   stopAction: () => dispatch(stopRotate)
// });


// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
