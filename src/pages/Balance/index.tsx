import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import Content from "./Content";
import NavigationHeader from "../../components/NavigationHeader";

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

const Balance: React.FC = () => {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<NavigationHeader screen="HomePage" />
			<Content />
		</View>
	);
};

export default Balance;
