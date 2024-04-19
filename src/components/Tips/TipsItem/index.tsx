import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#efefef",
		padding: 8,
		width: 280,
		height: 88,
		borderRadius: 340 / 20,
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "center",
	},
	newsText: {
		margin: 16,
		fontSize: 16,
	},
});

interface Props {
	desc: string;
}

const NewsItem: React.FC<Props> = ({ desc }) => {
	return (
		<TouchableOpacity>
			<View style={styles.container}>
				<Text style={styles.newsText}>{desc}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default NewsItem;
