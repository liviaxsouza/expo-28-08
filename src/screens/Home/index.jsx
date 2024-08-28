import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>

      <TouchableOpacity onPress={() => navigation.navigate("Lili")}>
        <Text style={styles.text}>Go to Lili</Text>
      </TouchableOpacity>
    </View>
  )                 
}