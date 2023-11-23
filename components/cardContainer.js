import {makeStyles} from '@rneui/themed';
import React from 'react';
import {View} from 'react-native';
import CardComponent from './card';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
}));
const CardContainer = data => {
  const styles = useStyles();
  const newData = data.data;

  return (
    <View style={styles.container}>
      {newData?.map(item => (
        <CardComponent data={item} />
      ))}
    </View>
  );
};

export default CardContainer;
