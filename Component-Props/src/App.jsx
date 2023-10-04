/* eslint-disable react/prop-types */
function Button(props) {
  return (
    <div className="flex justify-center items-center">
      <button
        className={`h-10 px-6 font-semibold rounded-md ${props.variant} text-white`}
        type="submit"
      >
        {props.children}
      </button>
    </div>
  );
}

function App() {
  return (
    <>
      <div className="flex justify-center items-center gap-5 mt-10">
        {/* Tanpa component */}
        <button
          className="h-10 px-6 font-semibold rounded-md bg-slate-700 text-white"
          type="submit"
        >
          Buy now
        </button>
        {/* dengan component */}
        <Button variant="bg-slate-800">Login</Button>
        <Button variant="bg-sky-600">Logout</Button>
        <Button variant="bg-yellow-500">Register</Button>
        <Button variant="bg-red-500">Delete</Button>
      </div>
    </>
  );
}

export default App;
