import { StyleSheet } from 'react-native';

const styles = {
	text: {
		color: 'red'
	}
};

styles.textWithBackground = {
	...styles.text,

	backgroundColor: 'orange',
	padding: 10
};

export default StyleSheet.create(styles);