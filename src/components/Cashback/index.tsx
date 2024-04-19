import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
	},
	content: { margin: 10 },
	nameText: {
		marginLeft: 20,
		fontSize: 18,
		fontWeight: "400",
	},
});

interface Props {
	name: string;
	children?: any;
}

const Cashback: React.FC<Props> = ({ name, children }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.nameText}>{name}</Text>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				<View style={styles.content}>
					<View style={styles.content}>{children}</View>
				</View>
			</ScrollView>
		</View>
	);
};

export default Cashback;
