import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import {
	Feather,
	MaterialCommunityIcons,
	MaterialIcons,
	Fontisto,
	Entypo,
} from "@expo/vector-icons";
import FeatureItem from "../FeatureItems";

const styles = StyleSheet.create({
	container: {
		margin: 16,
		display: "flex",
		flexDirection: "row",
		gap: 8,
		height: 128,
	},
	scrollContainer: {
		height: 128,
	},
});

const FeaturesTab: React.FC = () => {
	return (
		<View style={styles.scrollContainer}>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				<View style={styles.container}>
					<FeatureItem name="Pix">
						<Feather name="codepen" size={28} color="black" />
					</FeatureItem>
					<FeatureItem name="Pagar">
						<MaterialCommunityIcons
							name="barcode"
							size={28}
							color="black"
						/>
					</FeatureItem>
					<FeatureItem name="Transferir">
						<MaterialCommunityIcons
							name="bank-transfer-out"
							size={28}
							color="black"
						/>
					</FeatureItem>
					<FeatureItem name="Depositar">
						<MaterialCommunityIcons
							name="bank-transfer-in"
							size={28}
							color="black"
						/>
					</FeatureItem>
					<FeatureItem name="Recarga de celular">
						<Feather name="smartphone" size={28} color="black" />
					</FeatureItem>
					<FeatureItem name="Caixinhas">
						<Feather name="box" size={28} color="black" />
					</FeatureItem>
					<FeatureItem name="Cobrar">
						<Feather name="dollar-sign" size={28} color="black" />
					</FeatureItem>
					<FeatureItem name="Doação">
						<Feather name="heart" size={28} color="black" />
					</FeatureItem>
					<FeatureItem name="Investir">
						<Entypo name="bar-graph" size={28} color="black" />
					</FeatureItem>
					<FeatureItem name="Emprestar">
						<MaterialIcons name="money" size={28} color="black" />
					</FeatureItem>
					<FeatureItem name="Transferir Internac.">
						<Fontisto name="world-o" size={28} color="black" />
					</FeatureItem>
				</View>
			</ScrollView>
		</View>
	);
};
export default FeaturesTab;
