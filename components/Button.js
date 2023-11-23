import {makeStyles} from '@rneui/themed';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.colors.secondary,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 5,
    elevation: 10,
  },
  buttontext: {
    color: theme.colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
}));

const ButtonComponent = ({title, onClick}) => {
  const styles = useStyles();
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <Text style={styles.buttontext}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonComponent;
