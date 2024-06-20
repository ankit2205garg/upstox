import { useState } from "react";
import { View, FlatList, Text } from "react-native";
import { useGetPortfolioList } from "./useGetPortfolioList";
import ListItem from "./ListItem";
import TotalPortfolioDetail from "./TotalPortfolioDetail";

const ListHolding = () => {
  const [isShowHolding, setIsShowHolding] = useState(false);

  const data = useGetPortfolioList();
  const renderListItem = ({ item }) => {
    return (
      <View>
        <ListItem listdata={item} />
      </View>
    );
  };

  const HeaderTitleComponent = () => {
    return (
      <View style={{ backgroundColor: "#5a2989", padding: 10 }}>
        <Text style={{ color: "white" }}>Upstox Holding</Text>
      </View>
    );
  };

  const ListLoadingPortfolioTotal = () => {
    return (
      <TotalPortfolioDetail
        data={!data?.error ? data : []}
        isShowHolding={isShowHolding}
        setIsShowHolding={setIsShowHolding}
      />
    );
  };

  const ListEmpty = () => {
    return <View>{data?.error ? <Text>{data?.error}</Text> : null}</View>;
  };
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        scrollEnabled
        data={data?.error ? [] : data}
        keyExtractor={(item) => item?.symbol}
        renderItem={renderListItem}
        showsVerticalScrollIndicator={false}
        initialNumToRender={10}
        ListEmptyComponent={ListEmpty}
        ListFooterComponent={ListLoadingPortfolioTotal}
        ListHeaderComponent={HeaderTitleComponent}
      />
    </View>
  );
};
export default ListHolding;
