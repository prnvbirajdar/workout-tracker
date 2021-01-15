import { useState } from "react";

import Nav from "../components/Nav";
import EmptyLog from "../components/EmptyLog";
import Autocomplete from "../components/Autocomplete";
import WorkoutList from "../components/WorkoutList";

const Home = () => {
  const [inputText, setinputText] = useState(""); //search input
  const [dailyExercises, setDailyExercises] = useState([]); //array of all the exercises

  console.log(inputText);
  console.log(dailyExercises);

  return (
    <div className="bg-gray-400 h-screen ">
      <Nav />
      <EmptyLog />
      <Autocomplete
        inputText={inputText}
        setinputText={setinputText}
        dailyExercises={dailyExercises}
        setDailyExercises={setDailyExercises}
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

      <WorkoutList />
    </div>
  );
};

export default Home;
