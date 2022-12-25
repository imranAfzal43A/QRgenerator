import { Appbar } from 'react-native-paper';
import styles from './style';
import { useContext } from 'react';
import { ThemeContext } from './qrCodegen';
const MyAppBar = (props) => {
  const themeNight = useContext(ThemeContext);
  return (
    <Appbar.Header style={!themeNight ? styles.appBr : styles.appBrN}>
      <Appbar.Content title={props.title} />
      <Appbar.Action icon={!themeNight ? require('../assets/sun.png') : require('../assets/moon.png')} onPress={props.onPress} />
    </Appbar.Header>
  );
}
export default MyAppBar;