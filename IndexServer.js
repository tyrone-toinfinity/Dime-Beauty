import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import Client from "shopify-buy";
import { StatusBar } from "expo-status-bar";
// import { API_URL, API_KEY } from "@env";

const IndexServer = ({ childToParent }) => {
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState();
  let [response, setResponse] = useState();

  useEffect(() => {
    try {
      const client = Client.buildClient({
        domain: "dime-beauty-demo.myshopify.com",
        storefrontAccessToken: "df6fc859931d69c4b8a6d2fbb6ea2286",
      });
      client.product.fetchAll().then((products) => {
        setIsLoading(false);
        setResponse(products);
      });
    } catch {
      console.log("Im sorry there was an error");
      setIsLoading(false);
      setError(error);
    }
  }, []);

  const getContent = () => {
    if (isLoading) {
      return <ActivityIndicator size="large" />;
    }
    if (error) {
      return <Text>{error}</Text>;
    } else {
      return childToParent(response);
    }
  };

  return (
    <View>
      {getContent()}
      <StatusBar style="auto" />
    </View>
  );
};

export default IndexServer;
