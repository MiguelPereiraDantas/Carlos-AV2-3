import React from "react";
import { Text, View, StyleSheet } from "react-native";
import TrackYourMoneyCard from "../TrackYourMoneyCard";

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
	content: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	titleText: {
		fontSize: 16,
		fontWeight: "500",
		marginBottom: 20,
	},
});

const TrackYourMoney: React.FC = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.titleText}>Acompanhe seu dinheiro</Text>
			<View style={styles.content}>
				<TrackYourMoneyCard title="Caixinhas" />
				<TrackYourMoneyCard title="Investimentos" />
				<TrackYourMoneyCard title="Cripto" />
			</View>
		</View>
	);
};

export default TrackYourMoney;
