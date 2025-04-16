import React, { useEffect } from "react";
import { View, FlatList, Text, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { fetchnotes, softdeletenote } from "../store/notes";
import { styles } from "../css";

export default function Home() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.items);

  useEffect(() => {
    dispatch(fetchnotes());
  }, [dispatch]);

  const handledelete = (id) => {
    Alert.alert("delete note", "do you want to delete this note?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          dispatch(softdeletenote(id)).then(() => dispatch(fetchnotes()));
        },
      },
    ]);
  };

  const rendernote = ({ item }) => {
    return (
      <View style={styles.notecontainer}>
        <TouchableOpacity
          style={styles.notecontent}
          onPress={() => {
            setTimeout(() => {
              navigation.navigate("Editor", { note: item });
            }, 50);
          }}
          onLongPress={() => {
            handledelete(item.id);
          }}
          delayLongPress={300}
        >
          <Text style={styles.notetitle}>{item.title}</Text>
          <Text style={styles.note}>{item.content}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={rendernote}
      />

      <View style={styles.bottombuttons}>
        <TouchableOpacity
          style={styles.bottombutton}
          onPress={() => navigation.navigate("Deleted")}
        >
          <Text style={styles.bottombuttontext}>🗑️</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottombutton}
          onPress={() => navigation.navigate("Editor")}
        >
          <Text style={styles.bottombuttontext}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}