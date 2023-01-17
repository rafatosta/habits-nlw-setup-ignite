interface PropHabit {
  completed: number;
}

function Habit(props: PropHabit) {
  return (
    <div
      className="flex items-center justify-center rounded-lg m-2
     bg-zinc-600 text-white w-10 h-10 "
    >
      {props.completed}
    </div>
  );
}

export default Habit;
