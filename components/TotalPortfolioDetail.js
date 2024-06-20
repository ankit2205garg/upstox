import {
  View,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import TotalHoldings from "./TotalHoldings";

const TotalPortfolioDetail = ({ data, isShowHolding, setIsShowHolding }) => {
  return (
    <View>
      <View style={styles.loadingItem}>
        {!data ? <ActivityIndicator size="large" /> : null}
      </View>
      <View style={{ marginBottom: 100 }}>
        <View style={styles.totalHoldingContainer} />
        <TouchableOpacity
          style={{ alignItems: "center", }}
          onPress={() => {
            setIsShowHolding(!isShowHolding);
          }}
        >
          {isShowHolding ? <Text>Tap to Close &uarr; </Text> : <Text>Tap to Open &darr;</Text>}
        </TouchableOpacity>
        {isShowHolding ? <TotalHoldings listData={data} /> : null}
      </View>
    </View>
  );
};

export default TotalPortfolioDetail;

const styles = StyleSheet.create({
  loadingItem: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  totalHoldingContainer: {
    paddingTop: 100,
    backgroundColor: "grey",
  },
});
