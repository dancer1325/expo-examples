import React, {useState} from 'react';
import { View, Text, StyleSheet } from "react-native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

// 1. ONLY 1! export default is allowed
/*export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Universal React with Expo</Text>
    </View>
  );
}*/

// 2. View
// ONLY 1! export default is allowed
/*const ViewBoxesWithColorAndText = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{height: 100, flexDirection: 'row'}}>
                <View style={{backgroundColor: 'blue', flex: 0.2}} />
                <View style={{backgroundColor: 'red', flex: 0.4}} />
                <Text>Hello World!</Text>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};
export default ViewBoxesWithColorAndText;*/

// 3. Text
// ONLY 1! export default is allowed
const TextInANest = () => {
    const [titleText, setTitleText] = useState("Bird's Nest");
    const bodyText = 'This is not really a bird nest.';

    const onPressTitle = (event ) => {
        setTitleText("Bird's Nest [pressed]");
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Text style={styles.baseText}>
                    <Text style={styles.titleText} onPress={onPressTitle}>
                        {titleText}
                        {'\n'}
                        {'\n'}
                    </Text>
                    <Text numberOfLines={5}>{bodyText}</Text>
                </Text>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    baseText: {
        fontFamily: 'Cochin',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default TextInANest;
