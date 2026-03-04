import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <WebView
        source={{ uri: "https://www.google.com" }}
        style={styles.webView}
        startInLoadingState={true}
        javaScriptEnabled={true}
        bounces={false}
        scrollEnabled={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  webView: {
    flex: 1,
  },
});

export default App;
