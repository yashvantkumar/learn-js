import React, { useEffect, useState } from 'react';

import JobList from './JobList';
import { getJobs } from '../graphql/queries';

function JobBoard() {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs()
      .then(
        setJobs
      )
      .catch((error) => {
        console.log("error while fetching the jobs", error)
      })
  }, []);

  return (
    <div>
      <h1 className="title">
        Job Board
      </h1>
      <JobList jobs={jobs} />
    </div>
  );
}

export default JobBoard;
