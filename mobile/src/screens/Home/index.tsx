import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, Image, View } from "react-native";
import logoImg from "../../assets/logo-nlw-esports.png";

import { GameCard, GameCardProps } from "../../components/GameCard";
import { Heading } from "../../components/Heading";

import { styles } from "./styles";

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  useEffect(() => {
    axios
      .get("http://192.168.0.17:3333/games")
      .then((data) => setGames(data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />

      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />

      {/* Para lista */}
      <FlatList
        data={games}
        keyExtractor={(item) => item.id} //key
        renderItem={({ item }) => <GameCard data={item} />} //O que quer renderizar
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentList}
      />
    </View>
  );
}
