import {useNavigation} from '@react-navigation/native';
import {makeStyles} from '@rneui/themed';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const useStyles = makeStyles((theme, props) => ({
  container: {
    width: '50%',
    padding: 10,
    display: 'flex',
    elevation: 10,
  },
  imageContainer: {
    height: 200,
    backgroundColor: theme.colors.primary,
    width: '100%',
    borderBottomRightRadius: 20,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  image: {
    height: 200,
    objectFit: 'contain',
    width: '100%',
  },
  heartContainer: {
    position: 'absolute',
    bottom: 10,
    left: 15,
    elevation: 10,
    backgroundColor: 'white',
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 5,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  cartContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    elevation: 10,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
  },
  rating: {fontSize: 10, paddingLeft: 10},
  title: {
    color: theme.colors.secondary,
    fontSize: 16,
    fontWeight: '300',
    paddingTop: 4,
  },
  subtitle: {
    color: theme.colors.secondary,
    fontSize: 12,
    fontWeight: '500',
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {fontSize: 18, fontWeight: '600', paddingRight: 10},
}));

const CardComponent = props => {
  const styles = useStyles();
  const [liked, setLiked] = useState(false);
  const navigation = useNavigation();
  const data = props.data;

  if (!data) return <ActivityIndicator size={'large'} />;

  return (
    <TouchableOpacity
      activeOpacity={0.2}
      style={styles.container}
      onPress={() => navigation.navigate('Product', {data: data})}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/footwear.png')}
          style={styles.image}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.heartContainer}
          onPress={() => setLiked(!liked)}>
          <Icon
            name={liked ? 'heart' : 'heart-o'}
            size={10}
            color={liked ? 'red' : 'gray'}
          />
          <Text style={styles.rating}>3.2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cartContainer} activeOpacity={0.8}>
          <Icon name="shopping-cart" size={15} color={'gray'} />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.subtitle}>{data.subtitle}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>₹{data.price}</Text>
        <Text
          style={
            ([styles.price], {textDecorationLine: 'line-through', fontSize: 12})
          }>
          ₹{props.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardComponent;
