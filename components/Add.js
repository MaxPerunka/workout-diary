import { Text, TextInput, View, Pressable, Modal } from "react-native";
import style from "../style/style";
import { Calendar } from "react-native-calendars";
import React, { useContext, useState } from "react";
import { WorkoutContext } from "./WorkoutContext";

export default function Add() {
    const { addWorkout } = useContext(WorkoutContext);
    const [selectedType, setSelectedType] = useState('');
    const [distance, setDistance] = useState('');
    const [duration, setDuration] = useState('');
    const [visible, setVisible] = useState(false)
    const [date, setDate] = useState();

    const dateSelected = (day) => {
        setVisible(false);
        setDate(day.dateString)
    };

    const handleAddWorkout = () => {
        if (distance && duration && date) {
          const newWorkout = {
            type: selectedType,
            distance: parseFloat(distance),
            duration: parseFloat(duration),
            date: date,
          };
    
          addWorkout(newWorkout);
    
          // Reset input fields
          setSelectedType('');
          setDistance('');
          setDuration('');
          setDate(null);
          setVisible(false);
        }
      };

    return(
    <View>
        <Text style={style.title}>Add workout</Text>
            <View style={style.View}>
        <Pressable
          style={{
            backgroundColor: selectedType === 'Running' ? 'lightgreen' : 'white',
            padding: 10,
            borderRadius: 5,
          }}
          onPress={() => setSelectedType('Running')}
        >
          <Text>Running</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: selectedType === 'Cycling' ? 'lightgreen' : 'white',
            padding: 10,
            borderRadius: 5,
          }}
          onPress={() => setSelectedType('Cycling')}
        >
          <Text>Cycling</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: selectedType === 'Swimming' ? 'lightgreen' : 'white',
            padding: 10,
            borderRadius: 5,
          }}
          onPress={() => setSelectedType('Swimming')}
        >
          <Text>Swimming</Text>
        </Pressable>
         </View>

            <Text style={style.minititle}>Distance (km)</Text>
            <TextInput
                keyboardType="decimal-pad"
                style={style.textInput}
                placeholder="Distance"
                value={distance}
                onChangeText={setDistance}
            />
            <Text style={style.minititle}>Duration (min)</Text>
            <TextInput
                keyboardType="decimal-pad"
                style={style.textInput}
                placeholder="Duration"
                value={duration}
                onChangeText={setDuration}
            />
            <Pressable onPress={() => setVisible(true)}>
                <Text>Select Date</Text>
            </Pressable>
            <Modal visible={visible} transparent={true}>
                <Calendar onDayPress={dateSelected}/>
            </Modal>
            <Pressable style={style.button} onPress={handleAddWorkout}>
                <Text>Add Workout</Text>
            </Pressable>
        </View>
    );
}