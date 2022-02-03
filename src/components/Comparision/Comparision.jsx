import React from 'react';
import './Comparision.css'
import { Link } from "react-router-dom";

import {
  atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt, complex, re, im, add, multiply, atan, divide, subtract, cos, square, LN10, LN2, log2, acos, unit, ceil, format, max
} from 'mathjs'


function Comparision({capitalFactor, interest_p, fuel_p, consumption, image, remarks, button}) {
    
    const loadProfileData = [2400,
        2320,
        2500,
        2730,
        2991,
        3120,
        3340,
        3590,
        3780,
        3900,
        3981,
        4000,
        4250,
        4073,
        3800,
        3700,
        3500,
        3300,
        3120,
        2999,
        2860,
        2650,
        2500,
        2400
]

    const energy = loadProfileData.reduce((a, b) => a + b, 0) * 1000;


    const generatorSet = 1500 + 1000 + 750 + 500 + 500 + 1500;

    const capacity24Hours = 1500*24 + 1000*24 + 500*19 + 500*14 + 750*9 + 1500;

  const plantCapacityFactor = energy/(generatorSet * 1000 * 24);
  const plantUseFactor = energy/(capacity24Hours*1000);

  const maxDemand = 4250*1000;

  const loadFactor = energy/(maxDemand*24)


   //COSTING

   const unitGenerated = (capacity24Hours*1000) * plantUseFactor *365;

   console.log("unit generated", unitGenerated);



   //Annual fixed cost



   //NEW

   // const capitalFactor = capitalFactor;

   const capitalCostNew = capitalFactor*generatorSet*1000;

   console.log("capital cost / a", format(capitalCostNew,3));

   //Semi Fixed Cost

   const semiFixedCost = (interest_p/100)*capitalCostNew;

   const b = semiFixedCost/maxDemand;

   console.log("semi fixed cost", format(semiFixedCost,3));
   console.log("b", b);

   //Running Cost

   // const consumption = consumption;
   const runningCost = consumption * fuel_p * unitGenerated;

   const c = runningCost/unitGenerated;

   console.log("running cost", format(runningCost,3));
   console.log("c", c);


   //Annual Operating Cost

   const annualOperatingCostNew= capitalCostNew + (b*maxDemand) + (c*unitGenerated);

   console.log("annual operating cost", format(annualOperatingCostNew,3));


    //OLD

    const capitalCost = capitalFactor*maxDemand;

    const annualOperatingCost= capitalCost + (b*maxDemand) + (c*unitGenerated);

    console.log("annual operating cost", format(annualOperatingCost,3));

  return (
    <div className='comparision'>
        
        <div className="comparision__table__container">
        
          <div className="comparision__heading">
            <h1>Comparision</h1>
          </div>

          <div className="comparision__main">

            <div className='comparision__table'>
                <table>
                  <tr>
                    <th>Factors</th>
                    <th>Previous</th>
                    <th>Recommended</th>
                  </tr>
                      <tr>
                          <td>No of Generators</td>
                          <td>1</td>
                          <td>6</td>
                      
                      </tr>

                      <tr>
                          <td>Units Generated</td>
                          <td>{format(unitGenerated, 4)}</td>
                          <td>{format(unitGenerated, 4)}</td>
                      </tr>
                      
                      <tr>
                          <td>Load Factor/Use Factor</td>
                          <td>{loadFactor.toFixed(2) * 100}</td>
                          <td>{plantUseFactor.toFixed(2) * 100}</td>
                      </tr>

                      <tr>
                          <td>Reliability</td>
                          <td>Poor</td>
                          <td>Improved</td>
                      </tr>

                      <tr>
                          <td>Capital Cost</td>
                          <td>{format(capitalCost,3)}</td>
                          <td>{format(capitalCostNew,3)}</td>
                      </tr>
                      <tr>
                          <td>Semi Fixed Cost</td>
                          <td>{semiFixedCost}</td>
                          <td>{semiFixedCost}</td>
                        
                        </tr>

                        <tr>
                          <td>Running Cost</td>
                          <td>{format(runningCost,3)}</td>
                          <td>{format(runningCost,3)}</td>
                        </tr>

                        <tr>
                          <td>Annual Operating Cost</td>
                          <td>{format(annualOperatingCost,3)}</td>
                          <td>{format(annualOperatingCostNew,3)}</td>
                        </tr>
                </table>
            </div>

            <div className='comparision__comment'>
                <div className='comment__section'>
                <h2>Comment: </h2>
                <h4>By increasing the number of generators, we thus improved the Load Factor and Reliability of the system</h4>
                </div>
                
            </div>


        </div>
    
    </div>

    </div>
  )
}

export default Comparision;
