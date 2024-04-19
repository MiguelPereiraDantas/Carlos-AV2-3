import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		backgroundColor: "#f0f1f5",
		padding: 12,
		borderRadius: 8,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	contentRight: {
		flexDirection: "row",
		gap: 8,
	},
	toKnowText: {
		color: "#841ecd",
	},
});

interface Props {
	title: string;
	icon: "smartphone" | "heart";
}

const InsuranceCard: React.FC<Props> = ({ title, icon }) => {
	return (
		<TouchableOpacity>
			<View style={styles.container}>
				<View style={styles.contentRight}>
					<Feather name={icon} size={24} color="black" />
					<Text>{title}</Text>
				</View>

				<Text style={styles.toKnowText}>Conhecer</Text>
			</View>
		</TouchableOpacity>
	);
};

export default InsuranceCard;
