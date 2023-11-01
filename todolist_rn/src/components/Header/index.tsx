import React from "react";
import { View, Image } from "react-native";
import { styles } from "./styles";

export function Header() {
    return (
        <View style={styles.container}>
            <Image style={styles.imageLogo} source={require('../../../assets/app_logo.png')}/>
        </View>
    );
}