import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function ExplationCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Através deste APP você vai consolidar {"\n"} 4 hábitos de áreas
        fundamentais:
      </Text>

      <View style={styles.explanationContainer}>
        <Image
          source={require("../../../assets/icons/educationIcon.png")}
          style={styles.icon}
        />
        <Text style={styles.description}>
          <Text style={styles.mind}>Mente: </Text> Hábitos para melhorar sua
          inteligência/sabedoria
        </Text>
      </View>

      <View style={styles.explanationContainer}>
        <Image
          source={require("../../../assets/icons/moneyIcon.png")}
          style={styles.icon}
        />
        <Text style={styles.description}>
          <Text style={styles.money}>Financeiro: </Text> Hábitos para te ajudar
          com controle financeiro
        </Text>
      </View>

      <View style={styles.explanationContainer}>
        <Image
          source={require("../../../assets/icons/bodyIcon.png")}
          style={styles.icon}
        />
        <Text style={styles.description}>
          <Text style={styles.body}>Corpo: </Text> Hábitos para te deixar
          {"\n"}
          mais saudável e forte.
        </Text>
      </View>

      <View style={styles.explanationContainer}>
        <Image
          source={require("../../../assets/icons/funIcon.png")}
          style={styles.icon}
        />
        <Text style={styles.description}>
          <Text style={styles.fun}>Humor: </Text> Hábitos para controlar o
          stress {"\n"}e aumentar felicidade
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#151515",
    width: 350,
    borderRadius: 25,
    padding: 30,
  },

  title: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
  explanationContainer: {
    flexDirection: "row",
    marginTop: 30,
  },

  icon: {
    width: 40,
    height: 40,
    marginRight: 5,
  },
  mind: {
    color: "#90B7F3",
    fontWeight: "bold",
  },
  money: {
    color: "#85BB65",
    fontWeight: "bold",
  },
  body: {
    color: "#FF0044",
    fontWeight: "bold",
  },
  fun: {
    color: "#FE7F23",
    fontWeight: "bold",
  },
  description: {
    color: "white",
  },
});
