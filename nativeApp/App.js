import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllVacScr from './screens/AllVacScr';
import VacScr from './screens/VacScr';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
      <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                  name='Сервис по поиску вакансий'
                  component={AllVacScr}
                  options={{ headerShown: false }}
                />
                <Stack.Screen name='Detail' component={VacScr}   options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
}