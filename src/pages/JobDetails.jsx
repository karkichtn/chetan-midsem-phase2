
import React from 'react';
import { Link, useParams } from 'react-router';

function JobDetails({
  jobs,
  appliedCount,
  onApply,
  onWithdraw
}) {

  const { id } = useParams();


  // Find the job using its ID
  const job = jobs.find((job) => {
    return job.id === Number(id);
  });


  if (job === undefined) {

    return (

      <div className="empty-state">

        <h2>Job Not Found</h2>

        <Link to="/jobs">
          Back to Jobs
        </Link>

      </div>

    );

  }


  let actionButton;

  if (job.isApplied === true) {

    actionButton = (

      <button
        className="withdraw-btn"
        onClick={() => onWithdraw(job.id)}
      >
        Withdraw Application
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
        Apply for this Job
      </button>

    );

  }


  return (

    <div className="page-container">

      <Link to="/jobs" className="back-link">
        ← Back to Jobs
      </Link>


      <div className="details-container">

        <div className="details-header">

          <div className="company-logo large-logo">
            {job.company.charAt(0)}
          </div>

          <div>

            <h1>{job.title}</h1>

            <p>{job.company}</p>

          </div>

        </div>


        <div className="details-grid">

          <div className="detail-box">

            <span>Location</span>

            <strong>{job.location}</strong>

          </div>


          <div className="detail-box">

            <span>Work Mode</span>

            <strong>{job.mode}</strong>

          </div>


          <div className="detail-box">

            <span>Package</span>

            <strong>₹{job.packageLPA} LPA</strong>

          </div>


          <div className="detail-box">

            <span>Experience Required</span>

            <strong>

              {job.experienceRequired === 0
                ? 'Fresher Friendly'
                : `${job.experienceRequired} Years`}

            </strong>

          </div>


          <div className="detail-box">

            <span>Openings</span>

            <strong>{job.openings}</strong>

          </div>

        </div>


        <div className="skills-section">

          <h2>Required Skills</h2>

          <div className="skills-list">

            {job.skills.map((skill, index) => {

              return (

                <span
                  key={index}
                  className="skill-tag"
                >
                  {skill}
                </span>

              );

            })}

          </div>

        </div>


        <div className="details-action">

          {actionButton}

        </div>

      </div>

    </div>

  );
}

export default JobDetails;
