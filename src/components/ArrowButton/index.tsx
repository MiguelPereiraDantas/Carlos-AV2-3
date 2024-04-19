import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column",
		marginTop: 24,
	},
	upperContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	upperLeftContainer: {
		flexDirection: "row",
	},
	styledText: {
		marginLeft: 8,
	},
});

interface Props {
	name: string;
	icon: "activity" | "dollar-sign" | "shuffle";
}

const ArrowButton: React.FC<Props> = ({ name, icon }) => {
	return (
		<TouchableOpacity style={styles.container}>
			<View style={styles.upperContainer}>
				<View style={styles.upperLeftContainer}>
					<Feather name={icon} size={24} color="black" />
					<Text style={styles.styledText}>{name}</Text>
				</View>
				<Feather name="chevron-right" size={24} color="black" />
			</View>
		</TouchableOpacity>
	);
};

export default ArrowButton;
