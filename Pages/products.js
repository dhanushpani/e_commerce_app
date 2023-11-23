/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView} from 'react-native';
import CardContainer from '../components/cardContainer';
import {
  AccessoriesData,
  FootwearData,
  KidsData,
  WomenData,
  menData,
} from '../utility/constants/sampleData';
import {useRoute} from '@react-navigation/native';

const Products = () => {
  const route = useRoute();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (route.params.name === 'Men') {
      setData(menData);
    }
    if (route.params.name === 'Women') {
      setData(WomenData);
    }
    if (route.params.name === 'Kids') {
      setData(KidsData);
    }
    if (route.params.name === 'Footwear') {
      setData(FootwearData);
    }
    if (route.params.name === 'Accessories') {
      setData(AccessoriesData);
    }
  }, [data]);

  if (data === null) {
    return <ActivityIndicator size={'large'} />;
  }
  return (
    <ScrollView>
      <CardContainer data={data} />
    </ScrollView>
  );
};

export default Products;
