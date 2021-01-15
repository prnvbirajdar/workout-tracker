import { Add, Remove } from "../components/AddRemove";
import NumberInput from "./NumberInput";

const Workout = ({ exercise, setDailyExercises, dailyExercises }) => {
  const handleDelete = () => {
    setDailyExercises(
      dailyExercises.filter((exer) => exer.exercise !== exercise)
    );
  };

  return (
    <div className="flex bg-gray-400 h-auto ">
      <div>{exercise}</div>
      <div>
        <p className="text-center">Weight</p>
        <Remove />
        <NumberInput />
        <Add />
      </div>
      <div>
        <p className="text-center">Reps</p>
        <Remove />
        <NumberInput />
        <Add />
      </div>
      <button onClick={handleDelete}>X</button>
    </div>
  );
};

export default Workout;
