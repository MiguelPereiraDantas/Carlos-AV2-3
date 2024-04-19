import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../pages/Home";
import TabBar from "../TabBar";
import Store from "../../pages/Store";
import Money from "../../pages/Money";

const Tab = createBottomTabNavigator();

const HomeTabs: React.FC = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarHideOnKeyboard: true,
				tabBarShowLabel: false,
				tabBarActiveTintColor: "#121212",
			}}
			tabBar={(props) => <TabBar {...props} />}
		>
			<Tab.Screen
				name="HomePage"
				component={Home}
				options={{
					title: "compare-arrows",
				}}
			/>
			<Tab.Screen
				name="Money"
				component={Money}
				options={{
					title: "attach-money",
				}}
			/>
			<Tab.Screen
				name="Store"
				component={Store}
				options={{
					title: "storefront",
				}}
			/>
		</Tab.Navigator>
	);
};

export default HomeTabs;
