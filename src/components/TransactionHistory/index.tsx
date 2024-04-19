import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import TransactionCard from "./TransactionCard";

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column",
		marginTop: 24,
	},
	historyText: {
		fontSize: 20,
		fontWeight: "500",
		marginBottom: 24,
	},
});

const TransactionHistory: React.FC = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.historyText}>Histórico</Text>
			<ScrollView showsVerticalScrollIndicator={false}>
				<TransactionCard
					name="Transferência Feita"
					desc={`ShopZero
PIX
$ 90,00 `}
					icon="dollar-sign"
					date="13 Abril"
				/>
				<TransactionCard
					name="Transferência Feita"
					desc={`Duas Rodas Motorsport
PIX
$ 55,90 `}
					icon="dollar-sign"
					date="15 MAR"
				/>
				<TransactionCard
					name="Transferência Feita"
					desc={`ShopeePay
PIX
R$ 24,99 `}
					icon="dollar-sign"
					date="14 MAR"
				/>
				<TransactionCard
					name="Transferência Feita"
					desc={`AliExpress
PIX
R$ 62,00 `}
					icon="dollar-sign"
					date="13 MAR"
				/>
				<TransactionCard
					name="Transferência Feita"
					desc={`Steam
PIX
R$ 44,50 `}
					icon="dollar-sign"
					date="13 MAR"
				/>
				<TransactionCard
					name="Transferência Feita"
					desc={`Steam
PIX
R$ 34,99 `}
					icon="dollar-sign"
					date="12 MAR"
				/>
				<TransactionCard
					name="Transferência Feita"
					desc={`ShopeePay
PIX
R$ 24,99 `}
					icon="dollar-sign"
					date="11 FEB"
				/>
				<TransactionCard
					name="Transferência Feita"
					desc={`123Milhas
PIX
R$ 1024,99 `}
					icon="dollar-sign"
					date="06 FEB"
				/>
				<TransactionCard
					name="Transferência Feita"
					desc={`GOOL
PIX
R$ 2400,99 `}
					icon="dollar-sign"
					date="02 JAN"
				/>
			</ScrollView>
		</View>
	);
};

export default TransactionHistory;
