import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackParamList } from "../../../../App";
import { useRoute } from "@react-navigation/native";
import ArrowButton from "../../../components/ArrowButton";
import TransactionHistory from "../../../components/TransactionHistory";

const styles = StyleSheet.create({
	container: {
		paddingLeft: 20,
		paddingRight: 20,
		display: "flex",
		flexDirection: "column",
	},
	availableValue: {
		color: "#9c9fa8",
		fontWeight: "600",
		fontSize: 12,
	},
	valueText: {
		fontWeight: "600",
		fontSize: 24,
	},
});

const Content: React.FC = () => {
	const route = useRoute<RouteProp<StackParamList, "Balance">>();
	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={styles.container}>
				<View>
					<Text style={styles.availableValue}>Saldo disponível</Text>
					<Text style={styles.valueText}>
						R${" "}
						{route.params?.balanceValue
							? String(route.params.balanceValue).replace(
									".",
									","
							  )
							: "0,00"}
					</Text>
				</View>
				<ArrowButton name="Movimentações do mês" icon="shuffle" />
				<ArrowButton name="Dinheiro guardado" icon="dollar-sign" />
				<ArrowButton name="Rendimento total da conta" icon="activity" />
				<TransactionHistory />
			</View>
		</ScrollView>
	);
};

export default Content;
