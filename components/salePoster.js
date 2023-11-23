import {makeStyles} from '@rneui/themed';
import React from 'react';
import {Image} from 'react-native';

const useStyles = makeStyles({
  image: {
    width: '100%',
    objectFit: 'contain',
    height: 300,
  },
});

const SalePoster = () => {
  const styles = useStyles();
  return (
    <Image
      source={{
        uri: 'https://img.freepik.com/free-vector/summer-colection-banner-with-hand-drawn-flowers_1188-312.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697932800&semt=ais',
      }}
      style={styles.image}
    />
  );
};

export default SalePoster;
