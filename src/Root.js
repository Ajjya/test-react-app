import React from "react";
import { Provider } from "react-redux";
import Home from "./resources/Home";
import Blog from "./resources/Blog";
import Contact from "./resources/Contact";
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import configureStore from "store/store";

function Root(){
  return <Provider store={configureStore()}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />} ></Route>
        <Route path="/contact" element={<Contact />} ></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
}

export default Root;