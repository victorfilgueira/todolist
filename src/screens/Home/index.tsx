import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Header } from "../../components/Header";
import { styles } from "./styles";

export function Home() {
    return (
        <View style={styles.container}>
            <Header />
            
            <View style={styles.form}>
                <TextInput 
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor='#6b6b6b'
                />

                <TouchableOpacity style={styles.button}>
                    <Image style={styles.imagePlus} source={require('../../../assets/plus.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}