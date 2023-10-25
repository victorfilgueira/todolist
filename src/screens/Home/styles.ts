import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1A1A1A",
        flex: 1,
    },

    form: {
        width: "100%",
        flexDirection: "row",
        marginTop: -30,
        marginBottom: 42,
        marginLeft: 14,
        marginRight: 14,
    },

    input: {
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        gap: 8,
        width: 271,
        height: 54,
        backgroundColor: "#262626",
        borderRadius: 6,
        color: "#FFFFFF"
    },

    button: {
        width: 52,
        height: 52,
        backgroundColor: "#1E6F9F",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 5,
    },

    imagePlus: {},
});
