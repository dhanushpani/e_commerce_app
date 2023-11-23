import {makeStyles} from '@rneui/themed';
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Category from './category';

const useStyles = makeStyles((theme, props) => ({
  container: {
    // height: 80,
    width: '100%',
  },
  scrollContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  categoryContainer: {},
}));
const Categories = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} style={styles.scrollContainer}>
        <Category />
      </ScrollView>
    </View>
  );
};

export default Categories;
