import { Text, TextInput, View, Pressable, Modal, Alert } from "react-native";
import style from "../style/style";
import { Calendar } from "react-native-calendars";
import React, { useContext, useState } from "react";
import { WorkoutContext } from "./WorkoutContext";
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
        const parsedDistance = parseFloat(distance);
        const parsedDuration = parseFloat(duration);

        if (parsedDistance < 0 || parsedDuration < 0) {
            Alert.alert('Invalid Input', 'You cant reverse time or move negatively.');
            return;
        }

        if (parsedDistance && parsedDuration && date) {
          const newWorkout = {
            type: selectedType,
            distance: parsedDistance,
            duration: parsedDuration,
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
        <MaterialCommunityIcons name="run" size={24}/>
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
        <MaterialCommunityIcons name="bike" size={24}/>
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
        <MaterialCommunityIcons name="swim" size={24}/>
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