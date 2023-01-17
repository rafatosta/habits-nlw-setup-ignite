import Habit from "./components/Habit";

function App() {
  return <div>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Habit completed={3} />
  </div>;
}

export default App;
