import {
  StyleSheet,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    fontSize: 32,
    fontFamily: 'Avenir',
  }
})

interface Props {
  children: string
}

function Label(props: Props) {
  return <Text style={styles.label}>{props.children}</Text>
}

export default Label;
