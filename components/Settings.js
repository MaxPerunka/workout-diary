import { View } from "react-native";
import { Text } from "react-native-paper";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import style from "../style/style";
export default function Settings() {
    return(
        <View>
            <Text style={style.title}>No miles</Text>
            <MaterialCommunityIcons name="space-invaders" size={150} color="limegreen"/>
        </View>
    )
}