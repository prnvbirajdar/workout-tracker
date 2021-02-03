import { useState } from "react";

import Nav from "../components/Nav";
import EmptyLog from "../components/EmptyLog";
import Autocomplete from "../components/Autocomplete";
import WorkoutList from "../components/WorkoutList";

const Home = () => {
  const [reps, setReps] = useState(0); //input reps
  const [weight, setWeight] = useState(0); //input weights
  const [inputText, setinputText] = useState(""); //search input
  const [dailyExercises, setDailyExercises] = useState([]); //array of all the exercises
  const [exerciseObj, setExerciseObj] = useState({
    exercise: "",
    time: "",
    data: [],
  });


  return (
    <div className="bg-gray-400 h-screen">
      <Nav />
      <EmptyLog />
      <Autocomplete
        inputText={inputText}
        setinputText={setinputText}
        dailyExercises={dailyExercises}
        setDailyExercises={setDailyExercises}
        exerciseObj={exerciseObj}
        setExerciseObj={setExerciseObj}
        suggestions={{
          posts: [
            {
              id: 1,
              muscle: "leg",
              exercise: ["leg press", "squats", "lunges"],
            },
            {
              id: 2,
              muscle: "arms",
              exercise: ["hammer curls", "tricep extensions", "barbell curls"],
            },
          ],
        }}
      />

      <WorkoutList
        inputText={inputText}
        dailyExercises={dailyExercises}
        setDailyExercises={setDailyExercises}
        reps={reps}
        setReps={setReps}
        weight={weight}
        setWeight={setWeight}
      />
    </div>
  );
};

export default Home;
