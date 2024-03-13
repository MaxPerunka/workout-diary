import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { WorkoutProvider } from './components/WorkoutContext';
import Add from './components/Add';
import List from './components/List';
import Settings from './components/Settings';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <WorkoutProvider>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Add') {
              iconName = focused
                ? 'heart-plus'
                : 'heart-plus-outline';
            } else if (route.name === 'List') {
              iconName = focused 
              ? 'view-list' 
              : 'view-list-outline';
            }
            else if (route.name === 'Settings') {
              iconName = focused
              ? 'cog'
              : 'cog-outline'
            }
            return <MaterialCommunityIcons 
            name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'limegreen',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Add" component={Add}
         
        />
        <Tab.Screen name="List" component={List} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
    </WorkoutProvider>
  );
}
