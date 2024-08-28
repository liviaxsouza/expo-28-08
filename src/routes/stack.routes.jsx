import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Lili from "../screens/Lili";
import Jojo from "../screens/Jojo";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
    return (
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Lili" component={Lili} />
        <Stack.Screen name="Jojo" component={Jojo} />
        </Stack.Navigator>
    )
}

export default StackRoutes;