import { View, FlatList, Text, StyleSheet } from "react-native";

export const ListItem = ({ listdata }) => {
  const getPL = () => {
    return (
      listdata?.ltp * listdata?.quantity -
      listdata?.avgPrice * listdata?.quantity
    );
  };
  return (
    <View style={styles.listContainer}>
      <View style={[styles.listRow, { marginBottom: 5 }]}>
        <Text>{listdata?.symbol}</Text>
        <Text>LTP:&#8377;{listdata?.ltp}</Text>
      </View>
      <View style={styles.listRow}>
        <Text>{listdata?.quantity}</Text>
        <Text>P/L &#8377;{getPL().toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  listRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listContainer: {
    padding: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "lightgrey",
  },
});
