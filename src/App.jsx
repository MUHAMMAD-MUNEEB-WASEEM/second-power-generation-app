import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './components/Home/Home'
import SelectLoadProfiles from './components/SelectLoadProfiles/SelectLoadProfiles'
import LoadProfile from './components/LoadProfile/LoadProfile'

import {BrowserRouter as Router,  Routes, Route } from 'react-router-dom'

//images

import image1 from './assets/load-profile-images/1.png'
import Recommendation from './components/Recommendation/Recommendation'
import Comparision from './components/Comparision/Comparision'


function App() {

  return (
    <div className="App">
      {/* <Home/> */}
      {/* <SelectLoadProfiles/> */}
      
      
      {/* <LoadProfile loadProfileData={[6412, 6074, 5939, 5837, 6067, 6809, 8145, 8983, 9238, 9246, 9454, 9530, 9320, 9329, 9261, 9182, 8973, 9001, 8774, 8396, 8142, 7913, 7506, 6868]} capitalFactor={1000}  interest_p={0} fuel_p={1.36} consumption={0.3}/> */}
      
      
      {/* <LoadProfile loadProfileData={[6412, 6074, 5939, 5837, 6067, 6809, 8145, 8983, 9238, 9246, 9454, 9530, 9320, 9329, 9261, 9182, 8973, 9001, 8774, 8396, 8142, 7913, 7506, 6868]} capitalFactor={1000}  interest_p={0} fuel_p={1.36} consumption={0.3}/>
      <LoadProfile loadProfileData={[6412, 6074, 5939, 5837, 6067, 6809, 8145, 8983, 9238, 9246, 9454, 9530, 9320, 9329, 9261, 9182, 8973, 9001, 8774, 8396, 8142, 7913, 7506, 6868]} capitalFactor={1000}  interest_p={0} fuel_p={1.36} consumption={0.3}/>
      <LoadProfile loadProfileData={[6412, 6074, 5939, 5837, 6067, 6809, 8145, 8983, 9238, 9246, 9454, 9530, 9320, 9329, 9261, 9182, 8973, 9001, 8774, 8396, 8142, 7913, 7506, 6868]} capitalFactor={1000}  interest_p={0} fuel_p={1.36} consumption={0.3}/> */}

      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/loadprofiles' element={<SelectLoadProfiles/>}></Route>
          {/* Austria */}
          <Route path='/loadprofiles/loadprofile1' element={<LoadProfile image={image1} loadProfileData={[6412, 6074, 5939, 5837, 6067, 6809, 8145, 8983, 9238, 9246, 9454, 9530, 9320, 9329, 9261, 9182, 8973, 9001, 8774, 8396, 8142, 7913, 7506, 6868]} capitalFactor={1000}  interest_p={0} fuel_p={1.36} consumption={0.3} remarks="Best"/>}></Route>
           {/* DEnmark */}
          <Route path='/loadprofiles/loadprofile2' element={<LoadProfile image={image1} loadProfileData={[2915.1,2806,2741.4,2747,2725.9,2878.6,3425.1,4038.9,4327.1,4397.8,4488.7,4468.6,4387.8,4400.2,4286.1,4135.8,4049.3,4202.8,4099.4,3910.7,3710.9,3493,3360.1,3122.5]} capitalFactor={1600}  interest_p={-0.0075} fuel_p={1} consumption={3.9/1000} remarks="Best"/>}></Route>
          {/* Bulgaria */}
          <Route path='/loadprofiles/loadprofile3' element={<LoadProfile image={image1} loadProfileData={[3431, 3151, 3038, 3003, 2980, 3075, 3452, 3684, 3969, 3960, 4105, 4126, 3991, 4050, 4057, 4074, 4053, 3968, 4055, 4138, 4171, 4215, 4073, 3753]} capitalFactor={3500}  interest_p={0} fuel_p={136} consumption={0.0005} remarks="Best"/>}></Route>
          {/*Switzerland*/}
          <Route path='/loadprofiles/loadprofile4' element={<LoadProfile image={image1} loadProfileData={[5766,5626,5516,5756,5563,5557,6269,7178,7692,7805,7949,8188,7716,7765,7655,7502,7355,7113,7037,6784,6545,6645,6514,6001]} capitalFactor={2752}  interest_p={-0.0075} fuel_p={1} consumption={1.5/1000} remarks="Best"/>}></Route>
          {/*spain*/}
          <Route path='/loadprofiles/loadprofile5' element={<LoadProfile image={image1} loadProfileData={[26842,25407,24278,23892,23858,24137,25555,28158,30621,31833,32876,33537,34173,34217,33167,32544,32564,32733,32272,31706,31386,31549,30673,28327]} capitalFactor={1600}  interest_p={0.47} fuel_p={3.9/1000} consumption={1} remarks="Best"/>}></Route>
          
          
          {/*this should be with improvement of Greece (Diesel)*/}
          <Route path='/loadprofiles/loadprofile6' element={<LoadProfile image={image1} loadProfileData={[2400, 2320,2500,2730,2991,3120,3340,3590,3780,3900,3981,4000,4250,4073,3800,3700,3500,3300,3120,2999,2860,2650,2500,2400]} capitalFactor={1000}  interest_p={0} fuel_p={1.36} consumption={0.3} remarks="Poor" button="View Recommendation"/>}></Route>
        
          {/*Recommendation*/}
          <Route path='/loadprofiles/loadprofile6/recommendation' element={<Recommendation capitalFactor={1000}  interest_p={0} fuel_p={1.36} consumption={0.3} button="View Comparision"/>}/>

          {/*Comparision*/}

          <Route path='/loadprofiles/loadprofile6/recommendation/comparision' element={<Comparision capitalFactor={1000}  interest_p={0} fuel_p={1.36} consumption={0.3} button="View Comparision"/>}/>


        </Routes>
      </Router>

      {/* Austria */}
      {/* <LoadProfile loadProfileData={[6412, 6074, 5939, 5837, 6067, 6809, 8145, 8983, 9238, 9246, 9454, 9530, 9320, 9329, 9261, 9182, 8973, 9001, 8774, 8396, 8142, 7913, 7506, 6868]} capitalFactor={1000}  interest_p={0} fuel_p={1.36} consumption={0.3}/> */}


      {/* DEnmark */}
      {/* <LoadProfile loadProfileData={[2915.1,2806,2741.4,2747,2725.9,2878.6,3425.1,4038.9,4327.1,4397.8,4488.7,4468.6,4387.8,4400.2,4286.1,4135.8,4049.3,4202.8,4099.4,3910.7,3710.9,3493,3360.1,3122.5]} capitalFactor={1600}  interest_p={-0.0075} fuel_p={1} consumption={3.9/1000}/>   */}

      {/* Bulgaria */}
      {/* <LoadProfile loadProfileData={[3431, 3151, 3038, 3003, 2980, 3075, 3452, 3684, 3969, 3960, 4105, 4126, 3991, 4050, 4057, 4074, 4053, 3968, 4055, 4138, 4171, 4215, 4073, 3753]} capitalFactor={3500}  interest_p={0} fuel_p={136} consumption={0.0005}/>   */}
    </div>
  )
}

export default App
