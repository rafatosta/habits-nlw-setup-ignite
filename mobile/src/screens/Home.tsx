import { Text, View } from "react-native";
import { HabitDay, DAY_SIZE } from "../components/HabitDay";
import { Header } from "../components/Header";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

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

      <HabitDay />
    </View>
  );
}
