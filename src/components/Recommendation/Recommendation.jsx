import React from 'react';
import './Recommendation.css'
import { Link } from "react-router-dom";

import {
  atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt, complex, re, im, add, multiply, atan, divide, subtract, cos, square, LN10, LN2, log2, acos, unit, ceil, format
} from 'mathjs'
import Comparision from '../Comparision/Comparision';


function Recommendation({button}) {
    
    const loadProfileData = [2085,
        1976,
        1653,
        1562,
        1488,
        1321,
        1311,
        1280,
        1231,
        1020,
        1018,
        819,
        899,
        931,
        1011,
        1375,
        1399,
        1495,
        1560,
        1598,
        1721,
        1951,
        1982,
        2005,
]

    const energy = loadProfileData.reduce((a, b) => a + b, 0) * 1000;


    const generatorSet = 1000 + 500 + 500 + 100 + 1000;

    const capacity24Hours = 1000*24 + 500*21 + 500*10 + 100*2 + 1000;

  const plantCapacityFactor = energy/(generatorSet * 1000 * 24);
  const plantUseFactor = energy/(capacity24Hours*1000);


   //COSTING

   const unitGenerated = (capacity24Hours*1000) * plantUseFactor *365;

   console.log("unit generated", unitGenerated);



   //Annual fixed cost

   // const capitalFactor = capitalFactor;

   const capitalFactor = 850;

   const capitalCost = capitalFactor*generatorSet*1000;

   console.log("capital cost / a", format(capitalCost,3));

   //Semi Fixed Cost

   const interest_p = 1.75;

   const semiFixedCost = (interest_p/100)*capitalCost;

    const maxDemand = 2085*1000;

   const b = semiFixedCost/(maxDemand);

   console.log("semi fixed cost", format(semiFixedCost,3));
   console.log("b", b);

   //Running Cost

   const consumption = 0.285;
   
   const fuel_p = 1.35;

   const runningCost = consumption * fuel_p * unitGenerated;

   const c = runningCost/unitGenerated;

   console.log("running cost", format(runningCost,3));
   console.log("c", c);


   //Annual Operating Cost

   const annualOperatingCost= capitalCost + (b*maxDemand) + (c*unitGenerated);

   console.log("annual operating cost", format(annualOperatingCost,3));

  return (
    <div className='recommendation'>
        
        <div className="recommendation__table__container">
        
          <div className="recommendation__heading">
            <h1>Recommendation/Suggestion</h1>
          </div>

          <div className="recommendation__main">

            <div className='recommendation__table'>
                <table>
                  <tr>
                    <th>No of Generators</th>
                    <th>Power Rating (MW)</th>
                    <th>Running Hours</th>
                  </tr>
                      <tr>
                          <td>Generator 1</td>
                          <td>1000</td>
                          <td>24</td>
                      
                      </tr>
                      <tr>
                          <td>Generator 2</td>
                          <td>500</td>
                          <td>21</td>
                      </tr>
                      <tr>
                          <td>Generator 3</td>
                          <td>500</td>
                          <td>10</td>
                      </tr>
                      <tr>
                          <td>Generator 4</td>
                          <td>100</td>
                          <td>2</td>
                        
                        </tr>

                        <tr>
                          <td>Reserve</td>
                          <td>1000</td>
                          <td>--</td>
                        </tr>

                </table>
            </div>

            <div className="loadProfile__result__container">
                    
                    <div className="result__heading">
                        <h1>Result</h1>
                    </div>

                    <div className="loadProfile__result__main">

                        <div className="loadProfile__technical">

                            <div className="loadProfile__technical__heading">
                                <h1>Electrical Parameters</h1>
                            </div>

                            <div className="loadProfile__result">
                                <h3>Plant Capacity Factor = </h3>
                                <input type="number" value={plantCapacityFactor.toFixed(2) * 100}></input>
                            </div>

                            {/* <div className="loadProfile__result">
                                <h3>Plant Use Factor = </h3>
                                <input type="number" value={plantUseFactor.toFixed(2) * 100}></input>
                            </div>

                            <div className="loadProfile__result">
                                <h3>Plant Capacity Factor = </h3>
                                <input type="number" value={plantCapacityFactor.toFixed(2) * 100}></input>
                            </div> */}

                            <div className="loadProfile__result">
                                <h3>Plant Use Factor = </h3>
                                <input type="number" value={plantUseFactor.toFixed(2) * 100}></input>
                            </div>

                            <div className="loadProfile__result">
                                <h3>Energy in 24 hours (kW) = </h3>
                                <input type="number" value={format(energy, 3)}></input>
                            </div>

                            <div className="loadProfile__result">
                                <h3>Units Generated per annum (kW) = </h3>
                                <input type="number" value={format(unitGenerated, 4)}></input>
                            </div>


                            {/* <div className="loadProfile__result">
                                <h3>Units generated per annum (kWh) = </h3>
                                <input type="number" value={format(unitGenerated,4)}></input>
                            </div> */}
                        
                        </div>

                        <div className="loadProfile__economical">

                            <div className="loadProfile__economical__heading">
                                <h1>Costing</h1>
                            </div>

                            <div className="loadProfile__result">
                                <h3>Annual Operating Cost = </h3>
                                <input type="number" value={format(annualOperatingCost,3)}></input>
                            </div>

                            <div className="loadProfile__result">
                                <h3>Fixed Cost = </h3>
                                <input type="number" value={format(capitalCost,3)}></input>
                            </div>

                            <div className="loadProfile__result">
                                <h3>Semi Fixed Cost = </h3>
                                <input type="number" value={format(semiFixedCost,3)}></input>
                            </div>

                            <div className="loadProfile__result">
                                <h3>Running Cost = </h3>
                                <input type="number" value={format(runningCost,3)}></input>
                            </div>
                        </div>

                        <div className="loadProfile__remarks">
                    
                    
                    </div>


                    </div>

                    {button&&(
                        <div className="loadProfile__remarks__button">
                            
                            <Comparision/>
                            
                        </div>
                        )}
                </div>
            
          </div>

          


        </div>
    
    </div>
  )
}

export default Recommendation;
