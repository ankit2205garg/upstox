import { View, FlatList, Text, StyleSheet } from "react-native";
import {ListItemInterface} from '../utilities/commonInterface';

interface ChildProps{
  listdata:ListItemInterface;
}
export const ListItem = ({ listdata }:ChildProps) => {
  const getPL = () => {
    if (!listdata) {
      return 0; 
    }
    const { ltp = 0, quantity = 0, avgPrice = 0 } = listdata;
    return (ltp * quantity) - (avgPrice * quantity);
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
