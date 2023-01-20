interface PropHabit {
  completed?: number;
}

function HabitDay(props: PropHabit) {
  return (
    <div className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg">
      {props.completed}
    </div>
  );
}

export default HabitDay;
