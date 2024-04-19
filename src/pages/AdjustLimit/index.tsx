import React, { useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, TextInput } from "react-native";
import NavigationHeader from "../../components/NavigationHeader";
import { RouteProp, useRoute } from "@react-navigation/native";
import { StackParamList } from "../../../App";
import InputSlider from "../../components/InputSlider";

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	content: {
		margin: 20,
	},
	billText: {
		fontSize: 16,
		alignSelf: "center",
		color: "red",
	},
	adjustLimit: {
		marginTop: 60,
		flexDirection: "row",
		alignSelf: "center",
	},
	limitText: {
		fontSize: 16,
		color: "green",
	},
	valueText: {
		marginTop: -3,
		marginLeft: 5,
		fontSize: 16,
		color: "green",
	},
});

const AdjustLimit: React.FC = () => {
	const route = useRoute<RouteProp<StackParamList, "AdjustLimit">>();

	const calculatedBill = route.params?.bill ? route.params?.bill : 0;
	const calculatedLimit = route.params?.limit
		? route.params.limit - calculatedBill
		: 0;
	const limRef = useRef();

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<NavigationHeader screen="HomePage" />
			<View style={styles.content}>
				<Text style={styles.billText}>
					Fatura: R${" "}
					{calculatedBill
						? String(calculatedBill).replace(".", ",")
						: "0,00"}
				</Text>
				<View style={styles.adjustLimit}>
					<Text style={styles.limitText}>R$ </Text>
					<TextInput
						ref={limRef}
						style={styles.valueText}
						defaultValue="0"
					/>
					<Text style={styles.limitText}> disponível para uso</Text>
				</View>
				<InputSlider
					min={0}
					max={calculatedBill + calculatedLimit}
					steps={50}
					onChangeValue={(limite) => {
						if (limRef.current) {
							limRef.current.setNativeProps({
								text: limite.value,
							});
						}
					}}
				/>
			</View>
		</View>
	);
};

export default AdjustLimit;
