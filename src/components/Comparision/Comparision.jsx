import React from 'react';
import './Comparision.css'
import { Link } from "react-router-dom";

import {
  atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt, complex, re, im, add, multiply, atan, divide, subtract, cos, square, LN10, LN2, log2, acos, unit, ceil, format, max
} from 'mathjs'


function Comparision() {
    
    
  return (
    <div className='comparision'>
        
        <div className="comparision__table__container">

          <div style={{marginLeft: "30px"}}>
            <h1>Findings</h1>
          </div>
        
        <div style={{marginLeft: "10px"}}>
          <ul><li><h2>Reliability: <span>Increased</span></h2></li></ul>
          <ul><li><h2>Load Factor: <span>Improved</span></h2></li></ul>
          <ul><li><h2>No of Generators: <span>5</span></h2></li></ul>
        </div>
        </div>

    </div>
  )
}

export default Comparision;
