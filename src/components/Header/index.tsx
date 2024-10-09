import { Image, StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/Logo.png')} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 173,
    flexDirection: 'row',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 8,
    color: 'white'
  },
  to: {
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#4EA8DE'
  },
  do: {
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#5E60CE'
  }
});
