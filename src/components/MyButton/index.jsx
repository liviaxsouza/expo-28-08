import { Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import TextButton from '../TextButton';

const MyButton = ({ screen, name }) => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(screen)}>
      <Text>
        <TextButton textButton="Go to" /> {name}</Text>
    </TouchableOpacity>
  )
}

export default MyButton;