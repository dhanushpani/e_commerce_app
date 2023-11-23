import React from 'react';
import {LogBox, Text, View} from 'react-native';
import {Badge, makeStyles} from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchBar from './searchbar';

const useStyles = makeStyles((theme, props) => ({
  container: {
    width: '100%',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: 5,
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

function Header(props) {
  LogBox.ignoreAllLogs();

  const styles = useStyles(props);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.logo}>{props.name}</Text>
        <View>
          <Icon name="bell-o" size={25} />
          <Badge
            status="error"
            value={10}
            textStyle={styles.badgeTextStyle}
            containerStyle={styles.badgeContaierStyle}
          />
        </View>
      </View>
    </View>
  );
}
export default Header;
