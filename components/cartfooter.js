import {makeStyles} from '@rneui/themed';
import React from 'react';
import {View} from 'react-native';
import ButtonComponent from './Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native';

const useStyles = makeStyles(theme => ({
  container: {
    padding: 10,
    backgroundColor: theme.colors.background,
    elevation: 20,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
  },
  sharecontainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#fcf6f6',
    borderRadius: 5,
    elevation: 1,
    marginHorizontal: 20,
  },
}));

const CartFooter = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.sharecontainer}>
        <Icon name="share-alt" size={20} color={'#03045e'} />
      </TouchableOpacity>
      <View style={{flex: 1}}>
        <ButtonComponent title="Add to Cart" />
      </View>
    </View>
  );
};

export default CartFooter;
