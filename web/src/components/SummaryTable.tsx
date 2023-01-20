import HabitDay from "./HabitDay";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

export function SummaryTable() {
  return (
    <div className="w-full flex gap-x-3">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((day, i) => {
          return (
            <div
              key={`${day}-${i}`}
              className="text-zinc-400 font-bold text-xl h-10 flex items-center justify-center"
            >
              {day}
            </div>
          );
        })}
      </div>
      <div className="grid grid-rows-7 grid-flow-col gap-3">
        <HabitDay /><HabitDay /><HabitDay /><HabitDay />
      </div>
    </div>
  );
}
