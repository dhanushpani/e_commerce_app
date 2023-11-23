import {makeStyles} from '@rneui/themed';
import React from 'react';
import {Text, View} from 'react-native';
import CardContainer from './cardContainer';
import {RecentlyViewData} from '../utility/constants/recentlyViewData';

const useStyles = makeStyles(theme => ({
  title: {fontSize: 16, color: theme.colors.secondary, paddingHorizontal: 10},
}));

const RecentlyViewed = () => {
  const styles = useStyles();
  return (
    <View>
      <Text style={styles.title}>Suggested for you</Text>
      <CardContainer data={RecentlyViewData} />
    </View>
  );
};

export default RecentlyViewed;
