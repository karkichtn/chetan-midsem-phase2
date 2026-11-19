
import React from 'react';
import { Link } from 'react-router';

function Home({ jobs }) {

  const totalJobs = jobs.length;

  const appliedJobs = jobs.filter((job) => {
    return job.isApplied === true;
  }).length;

  const remoteJobs = jobs.filter((job) => {
    return job.mode === 'Remote';
  }).length;


  return (

    <div className="page-container">

      <section className="hero">

        <div className="hero-content">

          <span className="hero-tag">
            YOUR CAREER STARTS HERE
          </span>

          <h1>
            Find Your Dream <span>Job</span>
          </h1>

          <p>
            Explore opportunities, discover companies
            and take the next step in your career.
          </p>

          <Link to="/jobs" className="hero-btn">
            Explore Jobs →
          </Link>

        </div>

      </section>


      <section className="stats-section">

        <h2>Dashboard Overview</h2>

        <div className="stats-grid">

          <div className="stat-card">

            <p>Total Jobs</p>

            <h2>{totalJobs}</h2>

          </div>


          <div className="stat-card">

            <p>Applied Jobs</p>

            <h2>{appliedJobs}</h2>

          </div>


          <div className="stat-card">

            <p>Remote Jobs</p>

            <h2>{remoteJobs}</h2>

          </div>

        </div>

      </section>


      <section className="home-bottom">

        <div>

          <h2>Ready for your next opportunity?</h2>

          <p>
            Browse jobs and find the right opportunity for you.
          </p>

        </div>

        <Link to="/jobs" className="hero-btn">
          Browse All Jobs →
        </Link>

      </section>

    </div>

  );
}

export default Home;
