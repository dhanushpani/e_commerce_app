import React from 'react';
import {LogBox, Text, TouchableOpacity, View} from 'react-native';
import {Badge, makeStyles} from '@rneui/themed';
import Icon from 'react-native-vector-icons/AntDesign';
import SearchBar from './searchbar';
import {useNavigation} from '@react-navigation/native';

const useStyles = makeStyles((theme, props) => ({
  container: {
    width: '100%',
    backgroundColor: theme.colors.primary,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerContainer: {
    width: '80%',
    paddingTop: 5,
  },
  backbutton: {
    paddingHorizontal: 20,
  },
  searchContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: theme.colors.primary,
  },
  logo: {
    fontSize: 20,
    fontWeight: '600',
    color: theme.colors.secondary,
  },
  badgeTextStyle: {fontSize: 8},
  badgeContaierStyle: {position: 'absolute', top: -4, right: -4},
}));

function Header2(props) {
  LogBox.ignoreAllLogs();
  const navigation = useNavigation();

  const styles = useStyles(props);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.backbutton}
        onPress={() => navigation.goBack()}>
        <Icon
          name="arrowleft"
          size={25}
          style={{fontWeight: '600', color: 'black'}}
        />
      </TouchableOpacity>
      <View style={styles.headerContainer}>
        <SearchBar />
      </View>
    </View>
  );
}
export default Header2;
