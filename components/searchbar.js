import {useNavigation} from '@react-navigation/native';
import {makeStyles} from '@rneui/themed';
import React from 'react';
import {TextInput, View} from 'react-native';

const useStyles = makeStyles((theme, props) => ({
  search: {
    padding: 5,
    width: '100%',
    borderWidth: 0.2,
    marginVertical: 10,
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: theme.colors.background,
    elevation: 8,
  },
}));

function SearchBar() {
  const styles = useStyles();
  const navigation = useNavigation();
  const handleRoute = () => {
    navigation.navigate('Search');
  };

  return (
    <View>
      <TextInput
        placeholder="search..."
        style={styles.search}
        onFocus={() => handleRoute()}
      />
    </View>
  );
}

export default SearchBar;
