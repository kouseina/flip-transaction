import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 12,
  },

  padding: {
    padding: 16,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
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

  senderBank: data => ({
    textTransform: data.sender_bank.length <= 4 ? 'uppercase' : 'capitalize',
  }),

  beneficiaryBank: data => ({
    textTransform:
      data.beneficiary_bank.length <= 4 ? 'uppercase' : 'capitalize',
  }),

  column: {
    flex: 1,
    marginRight: 10,
  },
});
