import React from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  Button,
} from "react-native";
import { useUsers } from "./controller";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

const ListScreen = () => {
  const { error, isLoading, users, goBack } = useUsers();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerButtons}>
        <View style={styles.leftButton}>
          <Button title="<" onPress={goBack} color={"gray"} />
        </View>
      </View>
      {isLoading && (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={{ marginTop: 10 }}
        />
      )}
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image
              source={{
                uri: item.avatar,
              }}
              style={styles.image}
            />
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default ListScreen;
