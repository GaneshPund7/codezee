import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./componants/layout/layout";
import Home from "./componants/pages/Home";
import About from "./componants/pages/about";
import Courses from "./componants/pages/courses";
import Jobs from "./componants/pages/jobs";
import Projects from "./componants/pages/Projects";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<Courses />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
