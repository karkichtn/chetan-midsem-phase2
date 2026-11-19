
import React, { useState } from 'react';
import JobCard from '../components/JobCard';

function Jobs({
  jobs,
  appliedCount,
  onApply,
  onWithdraw
}) {

  const [search, setSearch] = useState('');
  const [mode, setMode] = useState('All');

  // Search and filter jobs
  const filteredJobs = jobs.filter((job) => {

    let matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase());

    let matchesMode =
      mode === 'All' || job.mode === mode;

    return matchesSearch && matchesMode;

  });


  return (

    <div className="jobs-page">

      {/* SEARCH SECTION */}

      <section className="job-search-hero">

        <div className="search-content">

          <span className="search-tag">
            YOUR NEXT OPPORTUNITY
          </span>

          <h1>
            Find Your Dream Job Here<span>.</span>
          </h1>

          <p>
            Discover opportunities that match your skills and ambitions.
          </p>


          <div className="search-box">

            <span className="search-icon">⌕</span>

            <input
              type="text"
              placeholder="Search Job Title or Keyword"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <span className="search-location">
              📍 All Locations
            </span>

          </div>

        </div>

      </section>


      {/* APPLICATION WARNING */}

      {appliedCount >= 3 && (

        <div className="warning-box">
          You have reached your application limit (3/3).
          Withdraw an existing application to apply for another job.
        </div>

      )}


      {/* JOB LISTING AREA */}

      <div className="job-results-layout">


        {/* FILTER SIDEBAR */}

        <aside className="filters-sidebar">

          <div className="filter-heading">

            <h2>Filters</h2>

            <button
              onClick={() => {
                setMode('All');
                setSearch('');
              }}
            >
              Clear All
            </button>

          </div>


          <div className="filter-group">

            <h3>Work Mode</h3>

            <select
              value={mode}
              onChange={(e) => setMode(e.target.value)}
            >

              <option value="All">All Modes</option>

              <option value="Onsite">Onsite</option>

              <option value="Hybrid">Hybrid</option>

              <option value="Remote">Remote</option>

            </select>

          </div>


          <div className="filter-divider"></div>


          <div className="filter-group">

            <h3>Application Status</h3>

            <p className="filter-info">
              Applications used
            </p>

            <h2 className="application-number">
              {appliedCount}/3
            </h2>

            <div className="sidebar-progress">

              <div
                style={{
                  width: `${(appliedCount / 3) * 100}%`
                }}
              ></div>

            </div>

          </div>


          <div className="filter-divider"></div>


          <div className="filter-group">

            <h3>Job Availability</h3>

            <p className="filter-info">
              {jobs.filter((job) => job.openings > 0).length}
              {' '}jobs currently have openings.
            </p>

          </div>

        </aside>


        {/* JOB CARDS */}

        <main className="job-listing-content">


          <div className="listing-header">

            <div>

              <h2>Explore Opportunities</h2>

              <p>
                Find your next career move.
              </p>

            </div>

            <span className="jobs-found">
              {filteredJobs.length} Jobs Found
            </span>

          </div>


          <div className="jobs-grid">

            {filteredJobs.length > 0 ? (

              filteredJobs.map((job) => {

                return (

                  <JobCard
                    key={job.id}
                    job={job}
                    appliedCount={appliedCount}
                    onApply={onApply}
                    onWithdraw={onWithdraw}
                  />

                );

              })

            ) : (

              <div className="empty-state">

                <h2>No Jobs Found</h2>

                <p>
                  Try changing your search or filter.
                </p>

              </div>

            )}

          </div>

        </main>

      </div>

    </div>

  );
}

export default Jobs;
