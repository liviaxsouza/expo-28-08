import { View } from 'react-native'
import styles from './styles'
import MyButton from '../../components/MyButton';
import Title from '../../components/Title';


export default function Lili() {
  return (
    <View  style={styles.container}>
      <Title title="Lili Screen" />

      <MyButton screen="Home" name="Home" />
    </View>
  )
}