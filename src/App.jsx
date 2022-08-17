import { useState } from "react";
import "./App.css";
import { CV } from "./cv/cv";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Experience from "./components/Experience";

const App = () => {
  const { hero, education, experience } = CV;
  const [showEducation, setShowEducation] = useState(true);
  return (
    <div className="App">
      <Hero hero={hero} />
      <div className="button">
        <button
          className="custom-btn btn-4"
          onClick={() => setShowEducation(true)}
        >
          Education
        </button>
        <button
          className="custom-btn btn-4"
          onClick={() => setShowEducation(false)}
        >
          Experience
        </button>
      </div>
      {showEducation ? (
        <Education education={education} />
      ) : (
        <Experience experience={experience} />
      )}
    </div>
  );
};

export default App;
