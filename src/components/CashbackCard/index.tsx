import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const styles = StyleSheet.create({
	container: {
		marginTop: 10,
		marginBottom: 10,
		marginRight: 10,
		width: 280,
		flexDirection: "row",
		gap: 12,
	},
	storeName: {},
	imgStyle: {
		width: 52,
		height: 52,
		borderRadius: 52 / 10,
	},
	discountText: {
		fontWeight: "500",
	},
});

interface Props {
	name: string;
	discount: string;
	img: any;
}

const CashbackCard: React.FC<Props> = ({ name, discount, img }) => {
	return (
		<View style={styles.container}>
			<Image style={styles.imgStyle} source={img} />
			<Text>
				<Text style={styles.storeName}>{name}</Text>
				{"\n"}
				<Text style={styles.discountText}>{discount}</Text>
			</Text>
		</View>
	);
};

export default CashbackCard;
