import Workout from "./Workout";

const WorkoutList = ({ dailyExercises, setDailyExercises }) => {
  return (
    <div className="flex flex-col items-center mt-10">
      {dailyExercises.map((v, i) => (
        <Workout
          key={i}
          exercise={v.exercise}
          setDailyExercises={setDailyExercises}
          dailyExercises={dailyExercises}
          value={v}
        />
      ))}
    </div>
  );
};

export default WorkoutList;
