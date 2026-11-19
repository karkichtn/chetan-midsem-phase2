
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router";

import jobsData from "./data/jobs";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import Applied from "./pages/Applied";

import "./App.css";

function App() {

  const [jobs, setJobs] = useState(jobsData);

  // Count applied jobs
  const appliedCount = jobs.filter(
    (job) => job.isApplied
  ).length;

  // Apply for a job
  function handleApply(id) {

    const selectedJob = jobs.find(
      (job) => job.id === id
    );

    if (!selectedJob) return;

    if (selectedJob.isApplied) return;

    if (selectedJob.openings === 0) return;

    if (appliedCount >= 3) return;

    setJobs(
      jobs.map((job) =>
        job.id === id
          ? { ...job, isApplied: true }
          : job
      )
    );
  }

  // Withdraw an application
  function handleWithdraw(id) {

    setJobs(
      jobs.map((job) =>
        job.id === id
          ? { ...job, isApplied: false }
          : job
      )
    );
  }

  return (
    <BrowserRouter>

      <Navbar appliedCount={appliedCount} />

      <Routes>

        <Route
          path="/"
          element={<Home jobs={jobs} />}
        />

        <Route
          path="/jobs"
          element={
            <Jobs
              jobs={jobs}
              appliedCount={appliedCount}
              onApply={handleApply}
              onWithdraw={handleWithdraw}
            />
          }
        />

        <Route
          path="/jobs/:id"
          element={
            <JobDetails
              jobs={jobs}
              appliedCount={appliedCount}
              onApply={handleApply}
              onWithdraw={handleWithdraw}
            />
          }
        />

        <Route
          path="/applied"
          element={
            <Applied
              jobs={jobs}
              onWithdraw={handleWithdraw}
            />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
