import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import HabitsService from "../../../Services/HabitsService";
import NotificationService from "../../../Services/NotificationService";

export default function UpdateExcludeButtons({
  habitInput,
  handleUpdate,
  habitArea,
}) {
  const navigation = useNavigation();

  function handleDeleteHabit() {
    HabitsService.deleteByName(habitArea)
      .then(() => {
        Alert.alert("Exclusão feita com sucesso");
        navigation.navigate("Home", {
          excludeArea: `${habitArea}`,
        });
      })

      .catch((err) => console.log(err));
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.updateButton}
        activeOpacity={0.8}
        onPress={() => {
          Alert.alert(
            "Ao prosseguir você vai atualizar o hábito, tem certeza?",
            "Ao fazer isso você pode mudar o hábito, frequência e notificação.",
            [
              {
                text: "Cancelar",
              },
              {
                text: "Atualizar",
                onPress: handleUpdate,
              },
            ]
          );
        }}
      >
        <Text style={styles.updateButtonText}>Atualizar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.trashButton}
        activeOpacity={0.8}
        onPress={() => {
          Alert.alert(
            `Você tem certeza que quer excluir o hábito?`,
            "Ao fazer isso perderá todo o progresso ou falha do hábito.",
            [
              {
                text: "Cancelar",
                onPress: () => {
                  Alert.alert("Exclusão cancelada com sucesso!");
                },
              },
              {
                text: "Excluir",
                onPress: handleDeleteHabit,
              },
            ]
          );
        }}
      >
        <Image
          source={require("../../../assets/icons/trash.png")}
          style={styles.trashIcon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 20,
  },
  updateButton: {
    borderWidth: 1,
    borderColor: "white",
    width: 150,
    height: 50,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  updateButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  trashButton: {
    borderWidth: 1,
    borderColor: "#FF0044",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 90,
  },
  trashIcon: {
    width: 25,
    height: 25,
  },
});
