import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Header from "../../components/Header";
import Cashback from "../../components/Cashback";
import CashbackCard from "../../components/CashbackCard";

const styles = StyleSheet.create({
	container: {},
	content: {
		paddingBottom: 68,
	},
	row: {
		flexDirection: "row",
	},
});

const Store: React.FC = () => {
	const test = require("../../../assets/aliexpress.png");
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.content}>
					<Header />
					<Cashback name="Mais vendidos">
						<View style={styles.row}>
							<CashbackCard
								name="AliExpress"
								discount="4% de cashback"
								img={require("../../../assets/aliexpress.png")}
							/>
							<CashbackCard
								name="Shopee"
								discount="2% de cashback"
								img={require("../../../assets/shopee.png")}
							/>
							<CashbackCard
								name="Centauro"
								discount="5% de cashback"
								img={require("../../../assets/centauro.png")}
							/>
						</View>
						<View style={styles.row}>
							<CashbackCard
								name="Zattini"
								discount="4% de cashback"
								img={require("../../../assets/zattini.png")}
							/>
							<CashbackCard
								name="Netshoes"
								discount="5% de cashback + cupom"
								img={require("../../../assets/netshoes.png")}
							/>
							<CashbackCard
								name="Nike"
								discount="6% de cashback"
								img={require("../../../assets/nike.png")}
							/>
						</View>
					</Cashback>
					<Cashback name="Celulares">
						<View style={styles.row}>
							<CashbackCard
								name="Trocafone"
								discount="2,5% de cashback"
								img={require("../../../assets/trocafone.png")}
							/>
							<CashbackCard
								name="Xiaomi"
								discount="10% de desconto"
								img={require("../../../assets/xiaomi.png")}
							/>
						</View>
						<View style={styles.row}>
							<CashbackCard
								name="Celular Seguro"
								discount="Simule Agora"
								img={require("../../../assets/celularSeguro.png")}
							/>
							<CashbackCard
								name="Magazine Luiza"
								discount="Até 50% de desconto"
								img={require("../../../assets/magalu.png")}
							/>
						</View>
					</Cashback>
					<Cashback name="Gift Cards">
						<View style={styles.row}>
							<CashbackCard
								name="iFood"
								discount="3,5% de desconto no gift card"
								img={require("../../../assets/ifood.png")}
							/>
							<CashbackCard
								name="Google Play"
								discount="3,5% de desconto no gift card"
								img={require("../../../assets/googleplay.png")}
							/>
						</View>
					</Cashback>
					<Cashback name="Eletroportáteis">
						<View style={styles.row}>
							<CashbackCard
								name="Electrolux"
								discount="1% de cashback"
								img={require("../../../assets/electrolux.png")}
							/>
							<CashbackCard
								name="Magazine Luiza"
								discount="Até 50% de desconto"
								img={require("../../../assets/magalu.png")}
							/>
						</View>
						<View style={styles.row}>
							<CashbackCard
								name="Carrefour"
								discount="3% de cashback"
								img={require("../../../assets/carrefour.png")}
							/>
							<CashbackCard
								name="Casas Bahia"
								discount="1,5% de cashback"
								img={require("../../../assets/casasbahia.png")}
							/>
						</View>
					</Cashback>
					<Cashback name="Para ficar na moda">
						<View style={styles.row}>
							<CashbackCard
								name="Centauro"
								discount="5% de cashback"
								img={require("../../../assets/centauro.png")}
							/>
							<CashbackCard
								name="Okulos"
								discount="1,5% de cashback"
								img={require("../../../assets/okulos.png")}
							/>
						</View>
						<View style={styles.row}>
							<CashbackCard
								name="Zattini"
								discount="4% de cashback"
								img={require("../../../assets/zattini.png")}
							/>
							<CashbackCard
								name="Netshoes"
								discount="5% de cashback + cupom"
								img={require("../../../assets/netshoes.png")}
							/>
						</View>
					</Cashback>
					<Cashback name="Eletrodomésticos">
						<View style={styles.row}>
							<CashbackCard
								name="TechHub"
								discount="1% de cashback"
								img={require("../../../assets/electrolux.png")}
							/>
							<CashbackCard
								name="Magazine Luiza"
								discount="Até 50% de desconto"
								img={require("../../../assets/magalu.png")}
							/>
						</View>
						<View style={styles.row}>
							<CashbackCard
								name="Carrefour"
								discount="3% de cashback"
								img={require("../../../assets/carrefour.png")}
							/>
							<CashbackCard
								name="Casas Bahia"
								discount="1,5% de cashback"
								img={require("../../../assets/casasbahia.png")}
							/>
						</View>
					</Cashback>
					<Cashback name="Beleza e perfumaria">
						<View style={styles.row}>
							<CashbackCard
								name="Quem Disse, Berenice?"
								discount="7% de cashback"
								img={require("../../../assets/quemdisseberenice.png")}
							/>
							<CashbackCard
								name="ScentMail"
								discount="8,5% de cashback (era 3,5%)"
								img={require("../../../assets/foreverliss.png")}
							/>
						</View>
						<View style={styles.row}>
							<CashbackCard
								name="O Boticário"
								discount="5% de cashback"
								img={require("../../../assets/oboticario.png")}
							/>
							<CashbackCard
								name="Sephora"
								discount="6% de cashback"
								img={require("../../../assets/sephora.png")}
							/>
						</View>
					</Cashback>
					<Cashback name="Games">
						<View style={styles.row}>
							<CashbackCard
								name="Playstation"
								discount="6% de desconto"
								img={require("../../../assets/playstation.png")}
							/>
							<CashbackCard
								name="Positivo"
								discount="110% de cashback"
								img={require("../../../assets/positivo.png")}
							/>
						</View>
						<View style={styles.row}>
							<CashbackCard
								name="Xbox"
								discount="8% de desconto"
								img={require("../../../assets/xbox.png")}
							/>
							<CashbackCard
								name="Nintendo"
								discount="-99% de desconto"
								img={require("../../../assets/nintendo.png")}
							/>
						</View>
					</Cashback>
					<Cashback name="Viagem e Lazer">
						<View style={styles.row}>
							<CashbackCard
								name="123 Milhas"
								discount="2,5% de cashback"
								img={require("../../../assets/123milhas.png")}
							/>
							<CashbackCard
								name="Seguro Viagem"
								discount="Simule Agora"
								img={require("../../../assets/seguroViagem.png")}
							/>
						</View>
						<View style={styles.row}>
							<CashbackCard
								name="Transferência Internacional"
								discount="15% de desconto"
								img={require("../../../assets/transferenciaInternacional.png")}
							/>
							<CashbackCard
								name="Buser"
								discount="5,5% de cashback"
								img={require("../../../assets/buser.png")}
							/>
						</View>
					</Cashback>
					<Cashback name="Móveis e construção">
						<View style={styles.row}>
							<CashbackCard
								name="Aliexpress"
								discount="4% de cashback"
								img={require("../../../assets/aliexpress.png")}
							/>
							<CashbackCard
								name="Telhanorte"
								discount="4,5% de cashback"
								img={require("../../../assets/telhanorte.png")}
							/>
						</View>
						<View style={styles.row}>
							<CashbackCard
								name="Mobly"
								discount="1,5% de cashback"
								img={require("../../../assets/mobly.png")}
							/>
							<CashbackCard
								name="Tok&Stok"
								discount="2% de cashback"
								img={require("../../../assets/tokstock.png")}
							/>
						</View>
					</Cashback>
				</View>
			</ScrollView>
		</View>
	);
};

export default Store;
