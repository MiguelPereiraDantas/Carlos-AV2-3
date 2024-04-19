import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import NewsItem from "./TipsItem";

const styles = StyleSheet.create({
	container: {
		margin: 20,
		display: "flex",
		flexDirection: "row",
		gap: 12,
		height: 108,
	},
	content: {
		backgroundColor: "#efefef",
		width: 340,
		height: 96,
		borderRadius: 340 / 20,
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "center",
	},
});

const News: React.FC = () => {
	return (
		<ScrollView horizontal showsHorizontalScrollIndicator={false}>
			<View style={styles.container}>
				<NewsItem desc="E você, o que vai fazer com seu Pedacinho? Decida agora!" />
				<NewsItem desc="Convide amigos para o Nubank e desbloqueie brasões incríveis" />
			</View>
		</ScrollView>
	);
};

export default News;
