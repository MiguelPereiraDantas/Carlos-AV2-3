import React from "react";
import {
	View,
	StyleSheet,
	Text,
	StatusBar,
	TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const statusBarHeight = StatusBar.currentHeight
	? StatusBar.currentHeight + 8
	: 36;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#841ecd",
		paddingTop: statusBarHeight,
		paddingBottom: 24,
		paddingLeft: 20,
		paddingRight: 20,
		display: "flex",
		flexDirection: "column",
	},
	defaultText: {
		color: "#ffffff",
	},
	welcomeText: {
		color: "#ffffff",
		fontSize: 20,
		fontWeight: "600",
	},
	upperContent: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	lowerContent: {
		paddingTop: 24,
	},
	uperRightContent: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		gap: 20,
	},
	circleShape: {
		width: 48,
		height: 48,
		borderRadius: 48 / 2,
		backgroundColor: "#8e29d1",
		justifyContent: "center",
		alignItems: "center",
	},
});

interface Props {
	user?: string;
}

const Header: React.FC<Props> = ({ user }) => {
	return (
		<View style={styles.container}>
			<View style={styles.upperContent}>
				<TouchableOpacity style={styles.circleShape}>
					<Feather name="user" size={24} color="#ffffff" />
				</TouchableOpacity>
				<View style={styles.uperRightContent}>
					<TouchableOpacity>
						<Feather name="eye" size={24} color="#ffffff" />
					</TouchableOpacity>
					<TouchableOpacity>
						<Feather name="help-circle" size={24} color="#ffffff" />
					</TouchableOpacity>
					<TouchableOpacity>
						<Feather name="mail" size={24} color="#ffffff" />
					</TouchableOpacity>
				</View>
			</View>
			{user ? (
				<View style={styles.lowerContent}>
					<Text style={styles.welcomeText}>Bem Vindo, {user}!</Text>
				</View>
			) : (
				<View />
			)}
		</View>
	);
};

export default Header;
