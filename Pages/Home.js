import {makeStyles} from '@rneui/themed';
import React from 'react';
import {ScrollView, View} from 'react-native';
import SearchBar from '../components/searchbar';
import Categories from '../components/categories';
import SalePoster from '../components/salePoster';
import RecentlyViewed from '../components/recentlyViewed';

const useStyles = makeStyles((theme, props) => ({
  container: {
    height: '100%',
    backgroundColor: theme.colors.background,
  },
  searchcontainer: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 20,
  },
}));

const Home = ({navigation}) => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.searchcontainer}>
        <SearchBar />
      </View>
      <ScrollView>
        <Categories />
        <SalePoster />
        <RecentlyViewed />
      </ScrollView>
    </View>
  );
};

export default Home;
