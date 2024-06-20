import { View, Text, StyleSheet } from "react-native";
import { getTotalCumulativePrices } from "../utilities/commonMethods";

const TotalHoldings = ({ listData = [] }) => {
  const cumulativeDataObj = getTotalCumulativePrices(listData);
  const Items = [
    {
      key: "Current Value",
      amount: cumulativeDataObj?.totalCurrentvalue,
    },
    {
      key: "Total Investment",
      amount: cumulativeDataObj?.totalInvestmentvalue,
    },
    {
      key: "Todays Profit Loss",
      amount: cumulativeDataObj?.totalClosevalue - cumulativeDataObj?.totalCurrentvalue,
    },
    {
      key: " Profit & Loss",
      amount: cumulativeDataObj?.totalCurrentvalue - cumulativeDataObj?.totalInvestmentvalue,
    },
  ];
  return (
    <View style={{padding:5}}>
      {Items.map((item) => {
        return (
          <View key={item.key} style={styles.summaryItemRow}>
            <Text>{item?.key}</Text>
            <Text>&#8377;{item?.amount?.toFixed(2)}</Text>
          </View>
        );
      })}
    </View>
  );
};
export default TotalHoldings;

const styles = StyleSheet.create({
  summaryItemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
