import React from "react"; 
import { render } from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import App from './App.js';
import './index.css';


render(
	<BrowserRouter>
	  <App></App>
	</BrowserRouter>, 
	document.querySelector("#main")
)





