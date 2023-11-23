/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {makeStyles} from '@rneui/themed';
import {ActivityIndicator, Dimensions, Image, View} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import CartFooter from '../components/cartfooter';
import {Text} from 'react-native';
import {Rating} from '@rneui/themed';
import {LinearProgress} from '@rneui/base';

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    position: 'relative',
    height: '100%',
  },
  footer: {
    position: 'absolte',
    width: '100%',
    top: 0,
    bottom: 0,
  },
  productcontainer: {
    marginTop: 20,
    elevation: 8,
    padding: 10,
  },
  prodctname: {
    color: theme.colors.black,
    fontWeight: 'bold',
    fontSize: 20,
  },
  prodctdesc: {
    fontSize: 15,
  },
  productprice: {
    fontSize: 20,
    color: theme.colors.secondary,
    paddingVertical: 5,
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.primary,
  },
  producthighlightcontainer: {
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.primary,
  },
  producthighlight: {
    fontSize: 18,
    fontWeight: 'bold',
  },
}));

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

const slideList = Array.from({length: 4}).map((_, i) => {
  return {
    id: i,
    image: `https://picsum.photos/1440/2842?random=${i}`,
  };
});

function Slide({data}) {
  return (
    <View
      style={{
        height: 300,
        width: windowWidth,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={{uri: data.image}}
        style={{
          width: windowWidth * 0.4,
          height: windowHeight * 0.4,
        }}
      />
    </View>
  );
}

const Product = props => {
  const data = props.route.params;
  const styles = useStyles();

  if (!data) {
    return <ActivityIndicator size={'large'} />;
  }

  const CarouselCards = () => {
    return (
      <FlatList
        data={slideList}
        style={{flex: 1}}
        renderItem={({item}) => {
          return <Slide data={item} />;
        }}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={true}
      />
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <CarouselCards />
        <View style={styles.productcontainer}>
          <Text style={styles.prodctname}>Product Name</Text>
          <Text style={styles.prodctdesc}>
            Descripton Magna consectetur quis dolore adipisicing nulla fugiat
            enim ipsum fugiat nisi irure.
          </Text>
          <Text style={styles.productprice}>500</Text>
          <View style={styles.producthighlightcontainer}>
            <Text style={styles.producthighlight}>Product HighLights</Text>
            <FlatList
              data={[
                {key: 'Devin'},
                {key: 'Dan'},
                {key: 'Dominic'},
                {key: 'Jackson'},
                {key: 'James'},
              ]}
              renderItem={({item}) => (
                <Text style={styles.item}>{item.key}</Text>
              )}
            />
          </View>
          <View>
            <Text>Review and Ratings</Text>
            <View>
              <Rating
                imageSize={5}
                readonly
                startingValue={4}
                style={styles.rating}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <CartFooter />
      </View>
    </View>
  );
};

export default Product;
