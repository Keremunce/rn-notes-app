import { StyleSheet } from "react-native";

export default StyleSheet.create({
    // Layout
    screen: {
        flex: 1,
    },
    container: {
        flex: 1,
        padding: 20,
        gap: 16,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    // Card
    card: {
        borderRadius: 12,
        padding: 16,
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#E2E8F0",
    },

    // Typography
    h1: {
        fontSize: 28,
        fontWeight: "700",
        color: "#0F172A",
    },
    h2: {
        fontSize: 22,
        fontWeight: "600",
        color: "#0F172A",
    },
    h3: {
        fontSize: 18,
        fontWeight: "600",
        color: "#0F172A",
    },
    body: {
        fontSize: 16,
        fontWeight: "400",
        color: "#334155",
    },
    small: {
        fontSize: 14,
        fontWeight: "400",
        color: "#475569",
    },
    bold: {
        fontWeight: "700",
    },
    italic: {
        fontStyle: "italic",
    },
    center: {
        textAlign: "center",
    },

    // Inputs & Buttons
    input: {
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#E2E8F0",
    },
    button: {
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 16,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fb6500", // primary
    },
    buttonText: {
        color: "#FFFFFF",
        fontWeight: "600",
        fontSize: 16,
    },
    noteItem: {
        borderRadius: 12,
        padding: 16,
        borderWidth: 1,
        flex: 1,
    }
});
export const COLORS = {
    primary: "#fb6500",

    // Light theme
    light: {
        background: "#F8FAFC", // açık gri
        text: "#0F172A", // koyu mavi-gri
        subtext: "#475569", // gri ton
        card: "#FFFFFF", // beyaz kart
        border: "#E2E8F0", // açık gri border
    },

    // Dark theme
    dark: {
        background: "#0F172A", // koyu mavi-gri
        text: "#FFFFFF",
        subtext: "#94A3B8", // açık gri
        card: "#1E293B", // koyu gri kart
        border: "#334155", // daha koyu border
    },
};
