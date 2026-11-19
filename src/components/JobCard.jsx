
import React from 'react';
import { Link } from 'react-router';

function JobCard({
  job,
  appliedCount,
  onApply,
  onWithdraw
}) {

  let actionButton;

  if (job.isApplied === true) {

    actionButton = (

      <button
        className="withdraw-btn"
        onClick={() => onWithdraw(job.id)}
      >
        Withdraw
      </button>

    );

  }

  else if (job.openings === 0) {

    actionButton = (

      <button className="disabled-btn" disabled>
        Hiring Closed
      </button>

    );

  }

  else if (appliedCount >= 3) {

    actionButton = (

      <button className="disabled-btn" disabled>
        Limit reached (3/3)
      </button>

    );

  }

  else {

    actionButton = (

      <button
        className="apply-btn"
        onClick={() => onApply(job.id)}
      >
        Apply Now
      </button>

    );

  }


  return (

    <div className="job-card">

      <div className="job-card-top">

        <div className="company-logo">
          {job.company.charAt(0)}
        </div>

        <span className={`mode-badge ${job.mode.toLowerCase()}`}>
          {job.mode}
        </span>

      </div>


      <h3>{job.title}</h3>

      <p className="company-name">
        {job.company}
      </p>


      <div className="job-info">

        <span>
          📍 {job.location}
        </span>

        <span className="experience-badge">

          {
            job.experienceRequired === 0
              ? 'Fresher Friendly'
              : `${job.experienceRequired} yrs exp`
          }

        </span>

      </div>


      <div className="job-package">

        <strong>
          ₹{job.packageLPA} LPA
        </strong>

        <span>
          {job.openings} openings
        </span>

      </div>


      <div className="job-actions">

        <Link
          to={`/jobs/${job.id}`}
          className="details-btn"
        >
          View Details
        </Link>

        {actionButton}

      </div>

    </div>

  );
}

export default JobCard;
