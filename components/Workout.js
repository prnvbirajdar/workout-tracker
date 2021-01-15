import NumberInput from "./NumberInput";

const Workout = ({ exercise, setDailyExercises, dailyExercises }) => {
  const handleDelete = () => {
    setDailyExercises(
      dailyExercises.filter((exer) => exer.exercise !== exercise)
    );
  };

  const handleAddSet = () => {};

  const handleSaveSet = () => {};

  const handleDeleteSet = () => {};

  return (
    <div className="flex bg-gray-400 h-auto flex-col">
      <div className="flex">
        <div className="mx-2">{exercise}</div>
        <div>
          <button onClick={handleAddSet}>Add set</button>
        </div>
        <div className="mx-2">
          <button onClick={handleDelete}>Delete Exercise</button>
        </div>
      </div>
      <div className="text-center flex justify-center">
        <div className="mx-2">
          <p className="text-center">Weight</p>
          <NumberInput />
        </div>
        <div className="mx-2">
          <p className="text-center">Reps</p>
          <NumberInput />
        </div>
        <div>
          <button onClick={handleSaveSet}>Save Set</button>
        </div>
        <div>
          <button onClick={handleDeleteSet}>Delete Set</button>
        </div>
      </div>
    </div>
  );
};

export default Workout;
