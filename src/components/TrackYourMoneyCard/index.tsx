import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
} from "react-native";

const styles = StyleSheet.create({
	container: {
		gap: 4,
	},
	content: {
		backgroundColor: "#f5e8fe",
		padding: 4,
		height: 100,
		borderRadius: 8,
		justifyContent: "flex-end",
	},
	innerText: {
		color: "#8840b2",
		fontSize: 24,
		fontWeight: "600",
		alignSelf: "flex-start",
	},
	footer: {
		backgroundColor: "#8320ca",
		padding: 2,
		borderRadius: 8,
		width: 60,
	},
	outsideText: {
		fontSize: 12,
		fontWeight: "600",
		color: "#ffffff",
	},
});

interface Props {
	title: string;
}

const TrackYourMoneyCard: React.FC<Props> = ({ title }) => {
	const windowWidth = Dimensions.get("window").width;
	return (
		<TouchableOpacity>
			<View style={[styles.container, { width: windowWidth / 3.5 }]}>
				<View style={styles.content}>
					<Text
						style={styles.innerText}
						textBreakStrategy={"balanced"}
					>
						{title}
					</Text>
				</View>
				<View style={styles.footer}>
					<Text style={styles.outsideText}>Conhecer</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default TrackYourMoneyCard;
