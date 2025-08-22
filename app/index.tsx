import React, { useState, useEffect } from "react";
import {
	Platform,
	SafeAreaView,
	Text,
	View,
	TouchableOpacity,
	useColorScheme,
	Switch,
	TextInput,
	FlatList,
} from "react-native";
import styles, { COLORS } from "@/styles/index.style";
import AsyncStorage from "@react-native-async-storage/async-storage";
type Note = { id: string; content: string };

export default function App() {
	const systemScheme = useColorScheme();
	const [theme, setTheme] = useState(
		systemScheme === "dark" ? COLORS.dark : COLORS.light
	);
	const [isEnabled, setIsEnabled] = useState(true);
	const [notes, setNotes] = useState<Note[]>([]);
	const [note, setNote] = useState<string>("");

	const toggleSwitch = () => {
		setIsEnabled((previousState) => !previousState);
		setTheme((prevTheme) =>
			prevTheme === COLORS.dark ? COLORS.light : COLORS.dark
		);
	};

	const handleLoadNotes = async () => {
		try {
			const notesJson = await AsyncStorage.getItem("NOTES");
			if (notesJson != null) {
				const savedNotes = JSON.parse(notesJson);
				setNotes(savedNotes);
			} else {
				console.warn("No tasks found in storage.");
			}
		} catch (e) {
			console.error("Handle Load Notes: " + e);
		}
	};

	const saveNotes = async (newNotes) => {
		try{
			const jsonValue = JSON.stringify(newNotes);
			await AsyncStorage.setItem("NOTES",jsonValue);
		} catch (e){
			console.error("Save Notes: "+ e)
		}
	};

	const handleAddNote = () => {
		if (note.trim() === "") {
			alert("Please enter a note.");
			return;
		}
		const newNotes = [...notes, { id: Date.now().toString(), content: note }];
		setNotes(newNotes);
		saveNotes(newNotes);
		setNote("");
	};

	const handleRemoveNote = (id) => {
		const newNotes = notes.filter((item) => item.id !== id);
		setNotes(newNotes)
		saveNotes(newNotes);
	}

	useEffect(() => {
		handleLoadNotes();
	}, []);
	return (
		<SafeAreaView
			style={[
				styles.screen,
				{
					backgroundColor:
						theme === COLORS.light
							? COLORS.light.background
							: COLORS.dark.background,
				},
			]}
		>
			<View
				style={[
					styles.container,
					{
						backgroundColor:
							theme === COLORS.light
								? COLORS.light.background
								: COLORS.dark.background,
					},
				]}
			>
				<View
					style={[
						{
							backgroundColor:
								theme === COLORS.light
									? COLORS.light.background
									: COLORS.dark.background,
							flexDirection: "row",
							gap: 16,
							alignItems: "center",
							justifyContent: "space-between",
						},
					]}
				>
					<Text
						style={[
							styles.h1,
							{
								color:
									theme === COLORS.light ? COLORS.light.text : COLORS.dark.text,
							},
						]}
					>
						Notes App
					</Text>
					<View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
						<Text
							style={[
								styles.body,
								{
									color:
										theme === COLORS.light
											? COLORS.light.text
											: COLORS.dark.text,
									opacity: isEnabled ? 0.5 : 1, // Light text fades when disabled
								},
							]}
						>
							☀️
						</Text>
						<Switch
							trackColor={{ false: "#787880", true: "#34C759" }}
							thumbColor={isEnabled ? "#fff" : "#fff"}
							ios_backgroundColor="#3e3e3e"
							onValueChange={toggleSwitch}
							value={isEnabled}
						/>
						<Text
							style={[
								styles.body,
								{
									color:
										theme === COLORS.light
											? COLORS.light.text
											: COLORS.dark.text,
									opacity: isEnabled ? 1 : 0.5, // Dark text fades when disabled
								},
							]}
						>
							🌙
						</Text>
					</View>
				</View>

				<View>
					<TextInput
						style={[
							styles.input,
							{
								borderColor:
									theme === COLORS.light
										? COLORS.light.border
										: COLORS.dark.border,
							},
						]}
						placeholder="Type your note here..."
						placeholderTextColor={
							theme === COLORS.light ? "#888888" : "#CCCCCC"
						} // Daha belirgin renkler
						value={note}
						onChangeText={(text) => {
							setNote(text);
						}}
						onSubmitEditing={handleAddNote}
						blurOnSubmit={false}
						selectionColor={
							theme === COLORS.light
								? COLORS.light.primary
								: COLORS.dark.primary
						}
						autoCapitalize="none"
						autoCorrect={false}
						keyboardType="default"
						returnKeyType="done"
						multiline={false}
						textAlignVertical="top"
					/>
				</View>
				<View>
					<TouchableOpacity
						style={[styles.button, { backgroundColor: COLORS.primary }]}
						onPress={handleAddNote}
					>
						<Text
							style={[
								styles.buttonText,
								{
									color:
										theme === COLORS.light
											? COLORS.light.text
											: COLORS.dark.text,
								},
							]}
						>
							Add Note
						</Text>
					</TouchableOpacity>
				</View>

				{/* Example card with theme */}
				<View style={{ flex: 1 }}>
					<FlatList
						data={notes}
						keyExtractor={(item, index) => index.toString()}
						numColumns={2}
						columnWrapperStyle={{ gap: 12 }}
						contentContainerStyle={{ gap: 12, paddingBottom: 40 }}
						style={{ flex: 1 }}
						keyboardShouldPersistTaps="always"
						contentInsetAdjustmentBehavior="automatic"
						keyboardDismissMode="interactive"
						renderItem={({ item }) => (
							<View
								style={[
									styles.noteItem,
									{
										flex: 1,
										backgroundColor:
											theme === COLORS.light
												? COLORS.light.card
												: COLORS.dark.card,
										borderColor:
											theme === COLORS.light
												? COLORS.light.border
												: COLORS.dark.border,
									},
								]}
							>
								<Text
									style={{
										color:
											theme === COLORS.light
												? COLORS.light.text
												: COLORS.dark.text,
									}}
								>
									{item.content}
								</Text>
								<TouchableOpacity
									style={{
										position: "absolute",
										top: 8,
										right: 8,
										padding: 4,
									}}
									onPress={() => handleRemoveNote(item.id)}
								>
									<Text
										style={{
											color:
												theme === COLORS.light
													? COLORS.light.subtext
													: COLORS.dark.subtext,
											fontSize: 16,
										}}
									>
										❌
									</Text>
								</TouchableOpacity>
							</View>
						)}
						ListFooterComponent={() => (
							<View style={{ paddingVertical: 20, alignItems: "center" }}>
								<Text
									style={{
										color:
											theme === COLORS.light
												? COLORS.light.subtext
												: COLORS.dark.subtext,
										fontSize: 12,
									}}
								>
									— End of the list —
								</Text>
							</View>
						)}
					/>

					{/* <Text
							style={[
								styles.noteItem,
								{
									backgroundColor:
										theme === COLORS.light
											? COLORS.light.card
											: COLORS.dark.card,
									borderColor:
										theme === COLORS.light
											? COLORS.light.border
											: COLORS.dark.border,
									
									color:
										theme === COLORS.light
											? COLORS.light.text
											: COLORS.dark.text,
									
								},
							]}
						>
							This is a card example
						</Text> */}
				</View>
			</View>
		</SafeAreaView>
	);
}
