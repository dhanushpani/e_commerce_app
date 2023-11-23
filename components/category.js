/* eslint-disable react-hooks/exhaustive-deps */
import {makeStyles} from '@rneui/themed';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {categories} from '../utility/constants/categoryConstants';
import {useNavigation} from '@react-navigation/native';

const useStyles = makeStyles((theme, props) => ({
  container: {alignItems: 'center', marginHorizontal: 20},
  imageBack: {
    backgroundColor: theme.colors.primary,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    borderBottomEndRadius: 20,
    position: 'relative',
    height: 100,
    width: 100,
    paddingTop: -20,
  },
  image: {
    width: 100,
    height: 100,
    position: 'absolute',
    objectFit: 'contain',
    top: -0,
    left: 0,
    bottom: 0,
    zIndex: 2,
  },
  name: {
    fontSize: 14,
    fontWeight: '300',
    padding: 5,
    color: theme.colors.secondary,
  },
}));

const Category = () => {
  const styles = useStyles();
  const navigate = useNavigation();

  return (
    <>
      {categories.map(item => (
        <TouchableOpacity
          key={item.name}
          activeOpacity={0.8}
          style={styles.container}
          onPress={() => navigate.navigate('Products', {name: item.name})}>
          <View style={styles.imageBackground}>
            <View style={styles.imageBack} />
          </View>
          <Image style={styles.image} source={item.image} />
          <Text style={styles.name}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </>
  );
};

export default Category;
