import { FlatList, View, Text } from "react-native";
import { WorkoutContext } from "./WorkoutContext"; 
import { useContext } from "react";

export default function List() {
    const { workouts } = useContext(WorkoutContext);

    return(
        <View>
            <Text>List of workouts</Text>
            <FlatList
                data={workouts}
                renderItem={({ item }) => (
                <View>
                    <Text>{`Type: ${item.type}, Distance: ${item.distance} km, Duration: ${item.duration} min, Date: ${item.date}`}</Text>
                </View>
                 )}
                 keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}