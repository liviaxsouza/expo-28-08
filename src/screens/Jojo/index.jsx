import { View } from 'react-native'
import styles from './styles'
import MyButton from '../../components/MyButton';
import Title from '../../components/Title';


export default function Jojo() {
  return (
    <View  style={styles.container}>
      <Title title="Jojo Screen" />

      <MyButton screen="Home" name="Home" />
      <MyButton screen="Lili" name="Lili" />
    </View>
  )
}