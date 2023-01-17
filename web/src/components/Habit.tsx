interface PropHabit {
  completed: number;
}

function Habit(props: PropHabit) {
  return <p>Habit: {props.completed}</p>;
}

export default Habit;
