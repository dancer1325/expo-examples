import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput } from "react-native";
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
/*const TextInANest = () => {
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

export default TextInANest;*/

// 4. Image
// ONLY 1! export default is allowed
/*const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
        width: 66,
        height: 58,
    },
});

const DisplayAnImage = () => (
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={require('./assets/react-native-logo.png')}
                // @expo/snack-static/react-native-logo.png     ONLY available | Snack projects
            />
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />
            <Image
                style={styles.logo}
                source={{
                    uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
                }}
            />
        </SafeAreaView>
    </SafeAreaProvider>
);

export default DisplayAnImage;*/

// 5. ScrollView
/*const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64,
};

const App = () => (
    <ScrollView>
        <Text style={{fontSize: 96}}>Scroll me plz</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Text style={{fontSize: 96}}>If you like</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Text style={{fontSize: 96}}>Scrolling down</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Text style={{fontSize: 96}}>What's the best</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Text style={{fontSize: 96}}>Framework around?</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Text style={{fontSize: 80}}>React Native</Text>
    </ScrollView>
);

export default App;*/

// 6. TextInput
const TextInputExample = () => {
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');

    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="useless placeholder"
                    keyboardType="numeric"
                />
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default TextInputExample;