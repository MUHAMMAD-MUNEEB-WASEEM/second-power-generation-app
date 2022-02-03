import { useState } from "react";
import './LoadProfile.css';
import { Link } from "react-router-dom";


import {
    atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt, complex, re, im, add, multiply, atan, divide, subtract, cos, square, LN10, LN2, log2, acos, unit, ceil, format
  } from 'mathjs'
import Recommendation from "../Recommendation/Recommendation";


function LoadProfile6({image, button}) {

    const fuel = 1.36;
    const interest = 1.75;

    const loadProfileData = [
        2085,
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



    // maxDemand = Math.max(...loadProfileData) * 1000;

    const [maxDemand, setMaxDemand] = useState(Math.max(...loadProfileData) * 1000 || 0)

    const energy = loadProfileData.reduce((a, b) => a + b, 0) * 1000;

    const loadFactor = energy/(maxDemand*24);


    //COSTING

    const unitGenerated = maxDemand * loadFactor * 8760;

    console.log("unit generated", unitGenerated);



    //Annual fixed cost

    const capitalFactor = 850;

    const capitalCost = capitalFactor*maxDemand;

    console.log("capital cost / a", format(capitalCost,3));

    const semiFixedCost = (interest/100)*capitalCost;

    const b = semiFixedCost/maxDemand;

    console.log("semi fixed cost", format(semiFixedCost,3));
    console.log("b", b);

    
    const consumption = 0.285;
    
    const runningCost = consumption * fuel * unitGenerated;

    const c = runningCost/unitGenerated;

    console.log("running cost", format(runningCost,3));
    console.log("c", c);


    //Annual Operating Cost

    const annualOperatingCost= capitalCost + (b*maxDemand) + (c*unitGenerated);

    console.log("annual operating cost", format(annualOperatingCost,3));


  return (
        <div className="loadProfile">
            <div className="loadProfile__container">
                <h1>Load Profile 1</h1>
                <div className="loadProfile__chart">
                    <img src={image}/>
                </div>
                <div className="result__heading">
                    <h1>Input</h1>
                </div>

                <div className="loadProfile__input__container">
                    <div className="loadProfile__input">
                        <h3>Max Demand = </h3>
                        <input type="number" value={maxDemand} onChange={(e)=>setMaxDemand(e.target.value)}></input>
                    </div>

                    {/* <div className="loadProfile__input">
                        <h3>Interest Rate = </h3>
                        <input type="number" value={interest} onChange={(e)=>setInterest(e.target.value)}></input>
                    </div> */}
                </div>

                <div className="loadProfile__result__container">
                    
                    <div className="result__heading">
                        <h1>Result</h1>
                    </div>

                    <div className="loadProfile__result__main">

                        <div className="loadProfile__technical">

                            <div className="loadProfile__technical__heading">
                                <h2>Electrical Parameters</h2>
                            </div>

                            <div className="loadProfile__result">
                                <h3>Load Factor = </h3>
                                <input type="number" value={loadFactor.toFixed(2) * 100}></input>
                            </div>

                            <div className="loadProfile__result">
                                <h3>Max Demand (kW) = </h3>
                                <input type="number" value={format(maxDemand,10)}></input>
                            </div>

                            <div className="loadProfile__result">
                                <h3>Energy produced in 24 hours (kW) = </h3>
                                <input type="number" value={format(energy, 3)}></input>
                            </div>


                            <div className="loadProfile__result">
                                <h3>Units generated (kWh) = </h3>
                                <input type="number" value={format(unitGenerated,4)}></input>
                            </div>
                        
                        </div>

                        <div className="loadProfile__economical">

                            <div className="loadProfile__economical__heading">
                                <h2>Costing</h2>
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
                    </div>

                    <div className="loadProfile__remarks">
                        
                        {button&&(
                        <div className="loadProfile__remarks__button">
                            
                            {/* <Link to="/loadprofile6/recommendation">
                                <button>
                                    {button}
                                </button>
                            </Link> */}
                            
                            <Recommendation button="Comparision"/>

                        </div>
                        )}
                    
                    </div>

                </div>

            </div>
        </div>
  )
}

export default LoadProfile6;
