import React, { useState, useEffect } from 'react';//importing react to useState and useEffect from react
import data from './assets/data.json';//importing the json data calling it data
import JobBoardComponent from './components/JobBoardComponent';//importing jobboardcomponent



function App() {
  const [jobs, setJobs] = useState([]);//creating state variable to store json file in setJobs

  useEffect(() => setJobs(data), []);

  console.log(jobs);
  
  //jsx everything inside app with header tag that has the upper imagee
  //
  return (
    <div className="App">
      <header className="bg-teal-500 mb-12">
        <img src="images/bg-header-desktop.svg"
        alt="bg-image"/>
      </header>
      <h1 className="text-4xl">Hello Rayhan!</h1>
      {jobs.map(job => 
              <JobBoardComponent job={job} key = {job.id}/>)
        }
    </div>
  );
}

export default App;
