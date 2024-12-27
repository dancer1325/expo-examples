import React from 'react';
import { View, Text } from "react-native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

// ONLY 1! export default is allowed
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

const ViewBoxesWithColorAndText = () => {
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

export default ViewBoxesWithColorAndText;
