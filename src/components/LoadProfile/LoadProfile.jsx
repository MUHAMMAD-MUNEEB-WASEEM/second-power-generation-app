import { useState } from "react";
import './LoadProfile.css';
import { Link } from "react-router-dom";


import {
    atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt, complex, re, im, add, multiply, atan, divide, subtract, cos, square, LN10, LN2, log2, acos, unit, ceil, format
  } from 'mathjs'


function LoadProfile({loadProfileData, capitalFactor, interest_p, fuel_p, consumption, image, remarks, button}) {

    //input
    const [fuel, setFuel] = useState(fuel_p);
    const [interest, setInterest] = useState(interest_p);



    //Load Profile efficiency

    // const loadProfileData = loadProfileData;



    //Max DEmand

    const maxDemand = Math.max(...loadProfileData) * 1000;

    console.log("maxdemand", maxDemand);

    //Energy in 24 hours

    const energy = loadProfileData.reduce((a, b) => a + b, 0) * 1000;

    console.log("unit Genereated", energy);

    //Load factor

    const loadFactor = energy/(maxDemand*24);

    console.log("load factor", loadFactor);

    // Plant Capacity Factor

    const plantCapacityFactor = energy/(maxDemand*24);

    console.log("Plant CApacity FActor", plantCapacityFactor);

    //Plant Use Factor

    const plantUseFactor = energy/(maxDemand*24);

    console.log("Plant Use Factor", plantUseFactor);




    //COSTING

    const unitGenerated = maxDemand * loadFactor * 8760;

    console.log("unit generated", unitGenerated);



    //Annual fixed cost

    // const capitalFactor = capitalFactor;

    const capitalCost = capitalFactor*maxDemand;

    console.log("capital cost / a", format(capitalCost,3));

    //Semi Fixed Cost

    const semiFixedCost = (interest/100)*capitalCost;

    const b = semiFixedCost/maxDemand;

    console.log("semi fixed cost", format(semiFixedCost,3));
    console.log("b", b);

    //Running Cost

    // const consumption = consumption;
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
                        <h3>Fuel Cost = </h3>
                        <input type="number" value={fuel} onChange={(e)=>setFuel(e.target.value)}></input>
                    </div>

                    <div className="loadProfile__input">
                        <h3>Interest Rate = </h3>
                        <input type="number" value={interest} onChange={(e)=>setInterest(e.target.value)}></input>
                    </div>
                </div>

                <div className="loadProfile__result__container">
                    
                    <div className="result__heading">
                        <h1>Result</h1>
                    </div>

                    <div className="loadProfile__result__main">

                        <div className="loadProfile__technical">

                            <div className="loadProfile__technical__heading">
                                <h1>Technical Analysis</h1>
                            </div>

                            <div className="loadProfile__result">
                                <h3>Load Factor = </h3>
                                <input type="number" value={loadFactor.toFixed(2) * 100}></input>
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
                                <h3>Max Demand (kW) = </h3>
                                <input type="number" value={format(maxDemand,10)}></input>
                            </div>

                            <div className="loadProfile__result">
                                <h3>Energy in 24 hours (kW) = </h3>
                                <input type="number" value={format(energy, 3)}></input>
                            </div>


                            <div className="loadProfile__result">
                                <h3>Units generated per annum (kWh) = </h3>
                                <input type="number" value={format(unitGenerated,4)}></input>
                            </div>
                        
                        </div>

                        <div className="loadProfile__economical">

                            <div className="loadProfile__economical__heading">
                                <h1>Economical Analysis</h1>
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
                        <h3>Remarks = {remarks}</h3>
                        
                        {button&&(
                        <div className="loadProfile__remarks__button">
                            
                            <Link to="/loadprofiles/loadprofile6/recommendation">
                                <button>
                                    {button}
                                </button>
                            </Link>
                            
                        </div>
                        )}
                    
                    </div>

                </div>

            </div>
        </div>
  )
}

export default LoadProfile;
