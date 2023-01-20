import { Text, View, ScrollView } from "react-native";
import { HabitDay, DAY_SIZE } from "../components/HabitDay";
import { Header } from "../components/Header";

import { generateRangeDatesFromYearStart } from '../utils/generate-range-between-dates'

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
const datesFromYearStart = generateRangeDatesFromYearStart()

const minimumSummaryDatesSize = 18 * 5
const amountOfDayToFill = minimumSummaryDatesSize - datesFromYearStart.length;


export function Home() {
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />

      <View className="flex-row mt-6 mb-2 justify-center ">
        {weekDays.map((day, i) => {
          return (
            <Text
              key={`${day}-${i}`}
              style={{ width: DAY_SIZE }}
              className="text-zinc-400 font-bold text-xl text-center"
            >
              {day}
            </Text>
          );
        })}
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >

        <View className="flex-row flex-wrap">
          {
            datesFromYearStart.map(date => (
              <HabitDay key={date.toString()} />
            ))
          }
          {amountOfDayToFill > 0 &&
            Array.from({ length: amountOfDayToFill }).map((_, i) => {
              return (
                <View key={i} className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
                  style={{ width: DAY_SIZE, height: DAY_SIZE }}
                />
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
}
