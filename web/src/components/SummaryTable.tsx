import HabitDay from "./HabitDay";
import { generateDatesFromYearBeginning } from "../utils/generate_dates_from_year_beginning";
const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

const summaryDates = generateDatesFromYearBeginning();

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
        {summaryDates.map((date) => {
          return <HabitDay key={date.toString()} />;
        })}
      </div>
    </div>
  );
}
