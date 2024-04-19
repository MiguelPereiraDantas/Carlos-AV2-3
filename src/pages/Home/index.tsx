import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import FeaturesTab from "../../components/FeaturesTab";
import AllMyCards from "../../components/AllMyCards";
import Tips from "../../components/Tips";
import CreditCard from "../../components/CreditCard";
import Loan from "../../components/Loan";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	content: {
		paddingBottom: 68,
	},
});

export default function Home() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.content}>
					<Header user="Carlos Lessa" />
					<Balance balanceValue={14000} />
					<FeaturesTab />
					<AllMyCards />
					<Tips />
					<CreditCard bill={890.00} limit={1050} />
					<Loan loanValue={25000.0} />
				</View>
			</ScrollView>
		</View>
	);
}
