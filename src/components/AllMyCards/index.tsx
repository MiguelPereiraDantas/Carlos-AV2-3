import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#efefef",
		width: 340,
		height: 60,
		margin: 20,
		borderRadius: 340 / 20,
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "center",
	},
	content: {
		padding: 16,
		marginLeft: 8,
		flexDirection: "row",
		gap: 12,
	},
	cardText: {
		fontWeight: "600",
		fontSize: 16,
	},
});

const AllMyCards: React.FC = () => {
	return (
		<TouchableOpacity>
			<View style={styles.container}>
				<View style={styles.content}>
					<Feather name="credit-card" size={24} color="black" />
					<Text style={styles.cardText}> Meus Cartões </Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default AllMyCards;
