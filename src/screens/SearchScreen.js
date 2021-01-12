import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";
import useResults from "../hooks/useResults";
const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();
  console.log(results);
  const filterPrice = (price) => {
    // price === "$" || "$$" || "$$$"
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <View>
      <SearchBar
        onTermSubmit={() => searchApi(term)}
        term={term}
        onTermChange={setTerm}
      />
      {errorMessage ? (
        <Text>{errorMessage}</Text>
      ) : (
        <Text>{results.length}</Text>
      )}
      <ResultsList title="Cost Effective" results={filterPrice("$")} />
      <ResultsList title="Big Pricier" results={filterPrice("$$")} />
      <ResultsList title="Big Spender" results={filterPrice("$$$")} />
    </View>
  );
};

const styles = StyleSheet.create({});
export default SearchScreen;
