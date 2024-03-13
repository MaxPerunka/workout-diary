import React, { createContext, useState } from 'react';

export const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([
    { id: 1, type: 'Running', distance: 5, duration: 30, date: '2024-03-12' },
    { id: 2, type: 'Cycling', distance: 10, duration: 35, date: '2024-03-13' },
    { id: 3, type: 'Swimming', distance: 15, duration: 55, date: '2024-03-11' },
    { id: 4, type: 'Cycling', distance: 5, duration: 15, date: '2024-03-14' },
    { id: 5, type: 'Running', distance: 2, duration: 15, date: '2024-03-15' },
    { id: 6, type: 'Swimming', distance: 4, duration: 5, date: '2024-03-16' },
    { id: 7, type: 'Cycling', distance: 11, duration: 50, date: '2024-03-14' },
    { id: 8, type: 'Running', distance: 3, duration: 20, date: '2024-03-15' },
    { id: 9, type: 'Swimming', distance: 1, duration: 7, date: '2024-03-16' },
    { id: 10, type: 'Cycling', distance: 5, duration: 15, date: '2024-03-14' },
    { id: 11, type: 'Running', distance: 2, duration: 15, date: '2024-03-15' },
    { id: 12, type: 'Swimming', distance: 4, duration: 5, date: '2024-03-16' },
    { id: 13, type: 'Cycling', distance: 5, duration: 15, date: '2024-03-14' },
    { id: 14, type: 'Running', distance: 2, duration: 15, date: '2024-03-15' },
    { id: 15, type: 'Swimming', distance: 4, duration: 5, date: '2024-03-16' },
  ]);

  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  return (
    <WorkoutContext.Provider value={{ workouts, addWorkout }}>
      {children}
    </WorkoutContext.Provider>
  );
};
