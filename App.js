import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import HomeScreen from './src/HomeScreen';
   import RestaurantScreen from './components/RestaurantScreen';
 import { Provider } from 'react-redux';
import {store} from './store'
 import BasketScreen from './components/BasketScreen';
import PreparingOrderScreen from './components/PreparingOrderScreen';
import DeliveryScreen from './components/DeliveryScreen';
export default function App() {
  const Stack=createNativeStackNavigator();
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
     <Stack.Screen name="Home" component={HomeScreen}/>
    <Stack.Screen name="Restaurant" component={RestaurantScreen}/> 
    <Stack.Screen name="Basket" component={BasketScreen}
    options={{presentation:"modal",headerShown:false}}
    />
    <Stack.Screen name="PreparingOrderScreen" component={PreparingOrderScreen}
    options={{presentation:"fullScreenModal",headerShown:false}}
    />
<Stack.Screen name="Delivery" component={DeliveryScreen}
    options={{presentation:"fullScreenModal",headerShown:false}}
    />
    </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
