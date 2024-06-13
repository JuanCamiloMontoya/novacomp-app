import { Slot } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Slot />
      </Provider>
    </SafeAreaProvider>
  );
}
