import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import logoImg from "../../assets/logo-nlw-esports.png";

import { Background } from "../../components/Background";
import { GameCard, GameCardProps } from "../../components/GameCard";
import { Heading } from "../../components/Heading";

import { styles } from "./styles";

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  const navigation = useNavigation();

  function handleOpenGame({ id, title, bannerUrl }: GameCardProps) {
    navigation.navigate("game", { id, title, bannerUrl });
  }

  useEffect(() => {
    axios
      .get("http://192.168.0.17:3333/games")
      .then((data) => setGames(data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />

        <Heading
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />

        {/* Para lista */}
        <FlatList
          data={games}
          keyExtractor={(item) => item.id} //key
          // renderItem o que quer renderizar
          renderItem={({ item }) => (
            <GameCard data={item} onPress={() => handleOpenGame(item)} /> //onPress equivalente ao onClick
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
}
