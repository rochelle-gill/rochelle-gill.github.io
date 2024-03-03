import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import RunningExercise from './components/RunningExercise';


function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [exerciseActive, setExerciseActive] = useState(false);

  const handleExerciseSelection = (exerciseType) => {
    setSelectedExercise(exerciseType);
    setExerciseActive(true);
  };

  const handleReturn = () => {
    setSelectedExercise(null);
    setExerciseActive(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Exercise Tracker</h1>
      </header>
      <main>
        {!exerciseActive && (
          <>
            <h2>Select an Exercise:</h2>
            <div>
              <button onClick={() => handleExerciseSelection("push-ups")}>
                Push-ups
              </button>
            </div>
            <div>
              <button onClick={() => handleExerciseSelection("bicycling")}>
                Bicycling
              </button>
            </div>
            <div>
              <button onClick={() => handleExerciseSelection("jumping-jacks")}>
                Jumping Jacks
              </button>
            </div>
            <div>
              <button onClick={() => handleExerciseSelection("running")}>
                Running
              </button>
            </div>
            <div>
              <button onClick={() => handleExerciseSelection("sit-ups")}>
                Sit-ups
              </button>
            </div>
          </>
        )}

        {exerciseActive && (
          <>
            {selectedExercise === "push-ups" && (
              <RepetitionExercise name="Push-ups" />
            )}
            {selectedExercise === "bicycling" && (
              <DurationExercise name="Bicycling" />
            )}
            {selectedExercise === "jumping-jacks" && (
              <RepetitionExercise name="Jumping Jacks" />
            )}
            {selectedExercise === "running" && (
  <RunningExercise name="Running" />
)}
            {selectedExercise === "sit-ups" && (
              <RepetitionExercise name="Sit-ups" />
            )}

            <button onClick={handleReturn}>Return</button>
          </>
        )}
      </main>
    </div>
  );
}

export default App;







