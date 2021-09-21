import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 12,
  },

  padding: {
    padding: 16,
    paddingLeft: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  labelLeft: isSuccess => ({
    position: 'absolute',
    left: 0,
    width: 7,
    height: '100%',
    backgroundColor: isSuccess ? '#50B785' : '#FA6642',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  }),

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  nameBank: {
    fontWeight: 'bold',
  },

  name: {
    textTransform: 'uppercase',
  },
});
