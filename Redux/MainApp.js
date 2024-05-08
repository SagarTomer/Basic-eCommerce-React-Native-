import React, { useEffect, useState } from "react";
import { View, Text, SectionList, TouchableOpacity, StyleSheet, Image, Alert, TextInput, Button } from "react-native";
import { fetchCategories, fetchDataFromProductList, searchProducts, categoriesList } from "./Action";
import { useDispatch, useSelector } from "react-redux";
// import DropdownComponent from "./DropDown/DropDown";
import { styles } from "./Styling/Styles";
import DropdownComponent from "./DropDown/DropDown";
import { String } from "./Styling/Srtrings";




const MainApp = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.list.list);
  const searchData = useSelector((state) => state.list.searchResults);
  const [categories, setCategories] = useState([]);
  const [query, setSearchQuery] = useState('');
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    fetchAllproduct()
  }, [skip]);


  const fetchAllproduct = () => {
    dispatch(fetchDataFromProductList(skip));
  }



  useEffect(() => {
    const uniqueCategories = [...new Set(productList.map((item) => item.category))];
    setCategories(uniqueCategories);
  }, [productList]);
  ////////////////////////////////////////////////////////
  const handleSearch = (query) => {
    setSearchQuery(query)
    dispatch(searchProducts(query));
    console.log(".>>>>>>>>>>>>>>>>>>>>>", query)
  };
//////////////////////////////////////////////////
  const loadMore = () => {
    setSkip(skip + 20);
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>", skip)
  };

  useEffect(() => {
    dispatch(fetchCategories())
    dispatch(categoriesList())
  }, [])

  const description = (item) => {
    Alert.alert(`${item.title}`, `Product Description: ${item.description}`);
  };


  const renderSectionHeader = ({ section }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{section.title}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => description(item)} style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: `${item.thumbnail}` }} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.brand}>{item.brand}</Text>
        <Text style={styles.discount}>
          Discount Available: {item.discountPercentage}%
        </Text>
      </View>
    </TouchableOpacity>
  );

  const sections = query
    ? [{ title: 'Search Results', data: searchData, key: 'search' }]
    : categories.map((category) => ({
      title: category,
      data: productList.filter((item) => item.category === category),
      key: category,
    }));

  return (
    <View style={styles.MainContainer}>
     <View>
                <Text style={styles.productListText}>{String.productlist}</Text>
                <DropdownComponent />
            </View>
      <TextInput
        value={query}
        onChangeText={(text) => {

          handleSearch(text)
        }

        }
        placeholder="Search products..."
        style={styles.TextInputStyle}
      />

      <SectionList
        sections={sections}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        bounces={2}
      />
    </View>
  );
};

export default MainApp;
