import React, { useRef, useMemo } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import Svg, { Line } from "react-native-svg";
import Animated from "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const WINDOW_HEIGHT = Dimensions.get("window").height;
const WINDOW_WIDTH = Dimensions.get("window").width;
const KNOB_SIZE = 20;
const WINDOW_MAX_WIDTH = WINDOW_WIDTH - KNOB_SIZE - 64;
const {
	View: AniView,
	Value,
	event,
	set,
	block,
	cond,
	lessThan,
	add,
	greaterThan,
	eq,
	createAnimatedComponent,
	useCode,
	call,
} = Animated;
const Aline = createAnimatedComponent(Line);

const styles = StyleSheet.create({
	container: {
		margin: 20,
	},
	track: {
		height: 8,
		backgroundColor: "#aaadb2",
		borderRadius: 8 / 2,
	},
	svgContainer: {
		marginTop: -12,
	},
	labelsContainer: {
		width: WINDOW_WIDTH - 80,
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 12,
	},
	label: {
		color: "#777",
	},
	knob: {
		height: KNOB_SIZE,
		width: KNOB_SIZE,
		borderTopRightRadius: KNOB_SIZE / 2,
		borderBottomRightRadius: KNOB_SIZE / 2,
		borderBottomLeftRadius: KNOB_SIZE / 2,
		backgroundColor: "#9c44dc",
		marginTop: -(KNOB_SIZE / 2 - 12),
		marginLeft: -8,
	},
});

interface Props {
	min: number;
	max: number;
	steps?: number;
	onChangeValue?: void | ((limite: any) => void);
}

const usePanGesture = () => {
	const tx = useRef(new Value(0)).current;
	const sc = useRef(new Value(1)).current;
	const offset = useRef(new Value(0)).current;

	const onGesture = useMemo(() => {
		return event([
			{
				nativeEvent: ({ translationX: x, state }) =>
					block([
						cond(
							lessThan(add(offset, x), 0),
							set(tx, 0),
							cond(
								greaterThan(add(offset, x), WINDOW_MAX_WIDTH),
								set(tx, WINDOW_MAX_WIDTH),
								set(tx, add(offset, x))
							)
						),
						cond(eq(state, State.END), set(offset, add(offset, x))),
						cond(eq(state, State.ACTIVE), set(sc, 1.3), set(sc, 1)),
					]),
			},
		]);
	}, [tx, offset]);

	return { tx, sc, onGesture };
};

const KnobComponent = () => {
	const { tx, onGesture, sc } = usePanGesture();

	const Knob = () => (
		<GestureHandlerRootView>
			<PanGestureHandler
				onGestureEvent={onGesture}
				onHandlerStateChange={onGesture}
				hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
			>
				<AniView
					style={[
						styles.knob,
						{
							transform: [
								{ translateX: tx },
								{ scale: sc },
								{ rotate: "45deg" },
							],
						},
					]}
				/>
			</PanGestureHandler>
		</GestureHandlerRootView>
	);

	return { Knob, tx };
};

const InputSlider: React.FC<Props> = ({ min, max, steps, onChangeValue }) => {
	const { Knob, tx } = KnobComponent();

	useCode(
		() => [
			call([tx], ([vl]) => {
				onChangeValue({
					value: `${
						Math.round(
							(min + (vl / WINDOW_MAX_WIDTH) * (max - min)) /
								steps
						) * steps
					}`,
				});
			}),
		],
		[tx]
	);

	return (
		<View style={[styles.container, { marginTop: WINDOW_HEIGHT / 4 }]}>
			<View style={styles.labelsContainer}>
				<Text style={styles.label}>{min}</Text>
				<Text style={styles.label}>
					{String(max).replace(".", ",")}
				</Text>
			</View>
			<View style={styles.track}></View>
			<View style={styles.svgContainer}>
				<Svg height={16} width={WINDOW_WIDTH}>
					<Aline
						stroke={"#6bc758"}
						strokeWidth={cond(greaterThan(tx, 4), 8, 0)}
						x1={4}
						y1={8}
						x2={tx}
						y2={8}
						strokeLinecap="round"
					/>
				</Svg>
			</View>
			<Knob />
		</View>
	);
};

export default InputSlider;
