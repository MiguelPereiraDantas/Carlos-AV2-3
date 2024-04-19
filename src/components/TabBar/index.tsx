import {
	BottomTabDescriptorMap,
	BottomTabNavigationEventMap,
} from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import {
	NavigationHelpers,
	ParamListBase,
	TabNavigationState,
} from "@react-navigation/native";
import React from "react";
import {
	View,
	TouchableOpacity,
	Platform,
	StyleSheet,
	Text,
} from "react-native";
import { EdgeInsets } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

const styles = StyleSheet.create({
	container: { justifyContent: "center", alignItems: "center" },
	content: {
		flexDirection: "row",
		margin: Platform.OS === "ios" ? 38 : 24,
		alignItems: "center",
		justifyContent: "center",
		position: "absolute",
		bottom: 0,
		backgroundColor: "rgba(255, 255, 255, 0.7)",
		gap: 8,
		elevation: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.2,
		shadowRadius: 3.8,
		borderRadius: 48,
	},
	buttonTab: {
		justifyContent: "center",
		alignItems: "center",
		padding: 8,
	},
	innerButton: {
		padding: 8,
		borderRadius: 23, //(34*icon-size* + 8*padding* + 4*padding*) / 2 = 21
	},
});

interface Props {
	state: TabNavigationState<ParamListBase>;
	descriptors: BottomTabDescriptorMap;
	navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
	insets?: EdgeInsets;
}

const TabBar: React.FC<Props> = ({ state, descriptors, navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				{state.routes?.map((route, index) => {
					const { options } = descriptors[route.key];

					const isFocused = state.index === index;

					const onPress = () => {
						const event = navigation.emit({
							type: "tabPress",
							target: route.key,
							canPreventDefault: true,
						});

						if (!isFocused && !event.defaultPrevented) {
							navigation.navigate({
								name: route.name,
								merge: true,
								params: {},
							});
						}
					};

					const onLongPress = () => {
						navigation.emit({
							type: "tabLongPress",
							target: route.key,
						});
					};

					return (
						<TouchableOpacity
							accessibilityRole="button"
							accessibilityState={
								isFocused ? { selected: true } : {}
							}
							accessibilityLabel={
								options.tabBarAccessibilityLabel
							}
							testID={options.tabBarTestID}
							onPress={onPress}
							onLongPress={onLongPress}
							style={styles.buttonTab}
							key={index}
						>
							<View
								style={[
									styles.innerButton,
									{
										backgroundColor: isFocused
											? "#f8e2fd"
											: "transparent",
									},
								]}
							>
								<MaterialIcons
									name={
										options.title === "compare-arrows"
											? "compare-arrows"
											: options.title === "attach-money"
											? "attach-money"
											: "storefront"
									}
									size={34}
									color={isFocused ? "#8f2adb" : "#535353"}
								/>
							</View>
						</TouchableOpacity>
					);
				})}
			</View>
		</View>
	);
};

export default TabBar;
