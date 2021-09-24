import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  page: {
    backgroundColor: 'white',
    marginTop: 12,
  },

  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  justifyBetween: {
    justifyContent: 'space-between',
  },

  justifyStart: {
    justifyContent: 'flex-start',
  },

  border: {
    padding: 20,
    borderColor: '#EAEAEA',
  },

  id: {
    fontWeight: 'bold',
  },

  column: {
    paddingVertical: 16,
    paddingHorizontal: 20,
  },

  bold: {
    fontWeight: 'bold',
  },

  semiBold: {
    fontWeight: '600',
  },

  closeText: {
    color: '#F4603A',
  },

  nameBank: {
    fontSize: 16,
  },

  card: {
    marginTop: 10,
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
});
