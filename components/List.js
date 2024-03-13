import { FlatList, View, Text } from "react-native";
import { WorkoutContext } from "./WorkoutContext"; 
import { useContext } from "react";
import style from "../style/style";

export default function List() {
    const { workouts } = useContext(WorkoutContext);

    return(
        <View>
            <Text style={style.title}>List of workouts</Text>
            <FlatList
                data={workouts}
                renderItem={({ item }) => (
                <View>
                    <Text style={style.workouts}>{`Type: ${item.type}, Distance: ${item.distance} km, Duration: ${item.duration} min, Date: ${item.date}`}</Text>
                </View>
                 )}
                 keyExtractor={(item, index) => index.toString()}
                 contentContainerStyle={{ paddingBottom: 45 }}
            />
        </View>
    );
}