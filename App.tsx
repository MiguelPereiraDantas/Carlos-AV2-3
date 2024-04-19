import Store from "./src/pages/Store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeTabs from "./src/components/HomeTabs";
import Balance from "./src/pages/Balance";
import AdjustLimit from "./src/pages/AdjustLimit";

export type StackParamList = {
	Home: undefined;
	Balance: { balanceValue: number };
	AdjustLimit: { bill: number; limit: number };
};

export default function App() {
	const Stack = createNativeStackNavigator();
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="HomePage" component={HomeTabs} />
				<Stack.Screen name="BalancePage" component={Balance} />
				<Stack.Screen name="AdjustLimitPage" component={AdjustLimit} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
