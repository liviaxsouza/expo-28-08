import { Text } from 'react-native'
import styles from './styles';

const TextButton = ({ textButton }) => {
  return (
      <Text style={styles.TextButton}>{textButton}</Text>
  )
}

export default TextButton;