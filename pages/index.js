import Nav from "../components/nav";

export default function IndexPage() {
  return (
    <div>
      <div className="my-36">
        <h1 className="text-5xl text-center text-gray-700 dark:text-gray-100">
          Welcome to Lift
        </h1>
        <h3 className="text-center my-4">Train harder. Track smarter.</h3>

        <div className="flex justify-center mt-20">
          <button className="text-blue-500 mr-6">Register</button>
          <button className="px-5 py-2 font-bold text-white bg-blue-500 rounded">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}
