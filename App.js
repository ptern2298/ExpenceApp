import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CameraScreen from "./screens/CameraScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState, useEffect } from 'react';
import { useAsyncStorage } from '@react=native-async-storage/async-storage';
import HomeScreen from "./screens/HomeScreen";

const Stack = createStackNavigator()
export default function App() {
const [expenses, setExpenses] = useState([
    { id: 0, title: 'McDonalds', price: 9.99 },
    { id: 1, title: 'Shoppers', price: 300.0 },
    { id: 2, title: 'Stapes', price: 250.0 },
])

const { getItem, setItem } = useAsyncStorage('ExpenseApp');

const readItemFromStorage = () => {
  getItem().then((item) => {
    // Getting item value and save it
    item = item === null ? [] : JSON.parse(item)
    setExpenses(item)
  }).catch(console.log);
};

const addExpense = (item) => {
  setExpenses([...expenses, item])
  setItem(JSON.stringify([...expenses, item])).then(() => {
    console.log('new value is saved in array');
    console.log(expenses);
  }).catch(console.log);
  // Item in AsyncStorage is a String representation of the array
}

const deleteExpense = (id) => {
  let filteredExpense = expenses.filter((item) => item.id !== id);
  setExpenses(filteredExpense);
  setItem(JSON.stringify(filteredExpense));
}

useEffect(() => { readItemFromStorage() }, []);

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home'>
            {(props) => <HomeScreen {...props} expenses = {expenses} deleteExpenses = {deleteExpense}/>}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
