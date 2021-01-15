import { Add, Remove } from "../components/AddRemove";
import NumberInput from "./NumberInput";

const Workout = () => {
  return (
    <div className="flex ">
      <div></div>
      <div>
        <p className="text-center">Weight</p>
        <Remove />
        <NumberInput />
        <Add />
      </div>
      <div>
        <p className="text-center">Sets</p>
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
    </div>
  );
};

export default Workout;
