import React from 'react';
import {LogBox, Text, View} from 'react-native';
import {makeStyles} from '@rneui/themed';
import {Button, Input} from '@rneui/base';

const useStyles = makeStyles((theme, props) => ({
  container: {
    backgroundColor: theme.colors.primary,
    width: props.fullWidth ? '100%' : 'auto',
    height: '100%',
    display: 'flex',
    padding: '10%',
  },
  logo: {
    color: theme.colors.black,
    fontSize: 25,
    fontWeight: '800',
    marginBottom: 30,
  },
  Input: {
    color: theme.colors.secondary,
    fontSize: 20,
  },
  buttonContainer: {
    borderRadius: 50,
  },
  button: {
    backgroundColor: theme.colors.secondary,
  },
}));

function Login(props) {
  LogBox.ignoreAllLogs();

  const styles = useStyles(props);
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Sign In</Text>
      <Input
        placeholder="Phone Number"
        defaultValue="+91"
        keyboardType="numeric"
      />
      <Button
        title={'Sign-in'}
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.button}
      />
    </View>
  );
}
export default Login;
