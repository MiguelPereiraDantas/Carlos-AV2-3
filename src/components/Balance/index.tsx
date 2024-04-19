import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../../../App";

const styles = StyleSheet.create({
	container: { padding: 20 },
	upperContent: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	defaultText: {
		fontSize: 20,
		fontWeight: "600",
	},
});

type balanceScreenProp = StackNavigationProp<StackParamList, "BalancePage">;
interface Props {
	balanceValue: number;
}

const Balance: React.FC<Props> = ({ balanceValue }) => {
	const navigation = useNavigation<balanceScreenProp>();
	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() =>
					navigation.navigate("BalancePage", { balanceValue })
				}
			>
				<View style={styles.upperContent}>
					<Text style={styles.defaultText}>Conta</Text>
					<Feather name="chevron-right" size={24} color="black" />
				</View>
				<Text style={styles.defaultText}>
					R$ {String(balanceValue).replace(".", ",")}
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Balance;
