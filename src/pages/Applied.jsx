
import React from 'react';
import JobCard from '../components/JobCard';

function Applied({
  jobs,
  appliedCount,
  onApply,
  onWithdraw
}) {

  // Get only the applied jobs
  const appliedJobs = jobs.filter((job) => {
    return job.isApplied === true;
  });


  let jobList;

  if (appliedJobs.length > 0) {

    jobList = appliedJobs.map((job) => {

      return (

        <JobCard
          key={job.id}
          job={job}
          appliedCount={appliedCount}
          onApply={onApply}
          onWithdraw={onWithdraw}
        />

      );

    });

  }

  else {

    jobList = (

      <div className="empty-state">

        <h2>No applications yet</h2>

        <p>
          You haven't applied for any jobs.
          Start exploring opportunities!
        </p>

      </div>

    );

  }


  return (

    <div className="page-container">

      <div className="page-heading">

        <span className="hero-tag">
          YOUR CAREER JOURNEY
        </span>

        <h1>Applied Jobs</h1>

        <p>
          Track the jobs you have applied for.
        </p>

      </div>


      <div className="application-progress">

        <h2>
          Applications used: {appliedCount}/3
        </h2>


        <div className="progress-bar">

          <div
            className="progress-fill"
            style={{
              width: `${(appliedCount / 3) * 100}%`
            }}
          />

        </div>

      </div>


      <div className="jobs-grid">

        {jobList}

      </div>

    </div>

  );
}

export default Applied;
