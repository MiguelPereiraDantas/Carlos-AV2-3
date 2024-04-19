import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 12,
	},
	descText: {
		color: "#9c9fa8",
		fontWeight: "400",
		fontSize: 14,
	},
});

interface Props {
	name: string;
	desc: string;
	icon: "dollar-sign";
	date: string;
}

const TransactionCard: React.FC<Props> = ({ name, desc, icon, date }) => {
	return (
		<View style={styles.container}>
			<View
				style={{
					borderTopColor: "#f5f5f5",
					borderTopWidth: StyleSheet.hairlineWidth,
				}}
			/>
			<Feather name={icon} size={24} color="black" />
			<View>
				<Text>{name}</Text>
				<Text style={styles.descText}>{desc}</Text>
			</View>

			<Text>{date}</Text>
		</View>
	);
};

export default TransactionCard;
