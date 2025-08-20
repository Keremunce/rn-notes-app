import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const App = () => (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Welcome to RN Notes App!</Text>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default App;