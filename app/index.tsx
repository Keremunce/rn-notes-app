import React from "react";
import { SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import styles, { COLORS } from "@/styles/index.style";

export default function App() {
	return (
		<SafeAreaView style={styles.screen}>
			<View style={styles.container}>
				<Text style={styles.h1}>Notes App</Text>

				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>Add Note</Text>
				</TouchableOpacity>

				{/* <View style={[styles.card, { backgroundColor: COLORS.dark.card }]}>
					<Text style={styles.body}>This is a card example</Text>
				</View> */}
			</View>
		</SafeAreaView>
	);
}
