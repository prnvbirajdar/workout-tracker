import Nav from "../components/Nav";
import EmptyLog from "../components/EmptyLog";
import Autocomplete from "../components/Autocomplete";

const Home = () => {
  return (
    <div className="bg-gray-400 h-screen ">
      <Nav />
      <EmptyLog />
      <Autocomplete
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
    </div>
  );
};

export default Home;
