import React from "react";
import { View, StyleSheet, StatusBar, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../../../App";

const statusBarHeight = StatusBar.currentHeight
	? StatusBar.currentHeight + 8
	: 36;

const styles = StyleSheet.create({
	container: {
		paddingTop: statusBarHeight,
		paddingBottom: 20,
		paddingLeft: 20,
		paddingRight: 20,
		display: "flex",
		flexDirection: "column",
	},
	upperContent: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	upperRightContent: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		gap: 20,
	},
});

type balanceScreenProp = StackNavigationProp<StackParamList, "Balance">;
interface NavigationProps {
	screen: string;
}

const NavigationHeader: React.FC<NavigationProps> = ({ screen }) => {
	const navigation = useNavigation<balanceScreenProp>();
	return (
		<View style={styles.container}>
			<View style={styles.upperContent}>
				<TouchableOpacity onPress={() => navigation.navigate(screen)}>
					<Feather name="chevron-left" size={24} />
				</TouchableOpacity>
				<View style={styles.upperRightContent}>
					<TouchableOpacity>
						<Feather name="help-circle" size={24} />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default NavigationHeader;
