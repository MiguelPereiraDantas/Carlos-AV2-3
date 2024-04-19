import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const styles = StyleSheet.create({
	container: { display: "flex", gap: 4 },
	content: { margin: 20 },
	upperContent: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 2,
	},
	defaultText: {
		fontSize: 20,
		fontWeight: "600",
	},
	availableValue: {
		color: "#9c9fa8",
		fontWeight: "400",
		fontSize: 14,
		marginBottom: 2,
	},
});

interface Props {
	loanValue: number;
}

const Loan: React.FC<Props> = ({ loanValue }) => {
	return (
		<View style={styles.container}>
			<View
				style={{
					borderBottomColor: "#f5f5f5",
					borderBottomWidth: StyleSheet.hairlineWidth,
				}}
			/>
			<TouchableOpacity>
				<View style={styles.content}>
					<View style={styles.upperContent}>
						<Text style={styles.defaultText}>Empréstimo</Text>
						<Feather name="chevron-right" size={24} color="black" />
					</View>
					<Text style={styles.availableValue}>
						Valor disponível de até
					</Text>
					<Text style={styles.availableValue}>
						R${" "}
						{loanValue
							? String(loanValue).replace(".", ",")
							: "0,00"}
					</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default Loan;
