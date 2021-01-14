import { useState, useEffect, useRef } from "react";

const Autocomplete = ({ suggestions }) => {
  const [displayOptions, setDisplayOptions] = useState(false); //if options are displayed or not
  const [options, setOptions] = useState([]); //render all the options
  const [searchInput, setSearchInput] = useState(""); //search input

  let exerciseArr = []; //empty array to push all exercises

  //maps through every muscle object and them maps through every exercise and pushes them all in exerciseArr
  const arr = suggestions.posts.map((m) =>
    m.exercise.map((e) => exerciseArr.push(e))
  );

  useEffect(() => {
    setOptions(exerciseArr);
  }, []);

  // setExercise lets searchInput fill up the exercise that user clicks on and then set the displayOptions to false
  const setExercise = (exercise) => {
    setSearchInput(exercise);
    setDisplayOptions(false);
  };

  return (
    <div className="flex items-center flex-col mt-10">
      <input
        type="text"
        placeholder="Search exercise"
        value={searchInput}
        onClick={() => {
          setDisplayOptions(!displayOptions);
        }}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />

      {/* filters through the exercise options based on searchInput and render all the exercises that match*/}
      {displayOptions && searchInput ? (
        <div>
          {options
            .filter(
              (suggestion) =>
                suggestion.toLowerCase().indexOf(searchInput.toLowerCase()) > -1
            )
            .map((v, i) => {
              return (
                <div key={i} onClick={() => setExercise(v)}>
                  <span>{v}</span>
                </div>
              );
            })}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Autocomplete;

// let searchResults;

// if (displayOptions && searchInput) {
//   options.length
//     ? (searchResults = (
//         <div>
//           {options
//             .filter(
//               (suggestion) =>
//                 suggestion.toLowerCase().indexOf(searchInput.toLowerCase()) >
//                 -1
//             )
//             .map((v, i) => {
//               return (
//                 <div key={i} onClick={() => setExercise(v)}>
//                   <span>{v}</span>
//                 </div>
//               );
//             })}
//         </div>
//       ))
//     : (searchResults = <div>No suggesions</div>);
// }
