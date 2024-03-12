import { Text, TextInput, View, Pressable, Modal } from "react-native";
import style from "../style/style";
import { Calendar } from "react-native-calendars";
import React, { useState } from "react";

export default function Add() {
    const [visible, setVisible] = useState(false)
    const [date, setDate] = useState();

    const dateSelected = (day) => {
        setVisible(false);
        setDate(day.dateString)
    };

    return(
        <View>
            <Text style={style.title}>Add workout</Text>
            <Text style={style.minititle}>Distance (km)</Text>
            <TextInput
                keyboardType="decimal-pad"
                style={style.textInput}
                placeholder="Distance"
            />
            <Text style={style.minititle}>Duration (min)</Text>
            <TextInput
                keyboardType="decimal-pad"
                style={style.textInput}
                placeholder="Duration"
            />
            <Pressable onPress={() => setVisible(true)}>
                <Text>Select Date</Text>
            </Pressable>
            <Modal visible={visible} transparent={true}>
                <Calendar onDayPress={dateSelected}/>
            </Modal>
            <Pressable style={style.button}>
                <Text>Add Workout</Text>
            </Pressable>
        </View>
    );
}