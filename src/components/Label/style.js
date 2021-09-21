import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  containerSuccess: {
    backgroundColor: '#57B485',
    borderRadius: 7,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },

  containerPending: {
    borderColor: '#E97E5E',
    borderWidth: 2,
    borderRadius: 7,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },

  text: isSuccess => ({
    fontWeight: 'bold',
    color: isSuccess ? 'white' : 'black',
  }),
});
