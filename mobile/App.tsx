import { StatusBar } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

import { Routes } from "./src/routes";
import { Background } from "./src/components/Background";
import { Loading } from "./src/components/Loading";

export default function App() {
  // fontsLoaded é um boolean que verifica se as fontes já estão disponíveis na app
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent //Faz a barra parecer parte da app
      />

      {fontsLoaded ? <Routes /> : <Loading />}
    </Background>
  );
}
