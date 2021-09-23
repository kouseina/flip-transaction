import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  FlatList,
  ListViewComponent,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {IconArrowDownward, IconSearch} from '../../assets';
import RadioButton from '../../components/RadioButton';
import dataRadiobutton from '../../config/data.radiobutton';
import CustomModal from '../../containers/CustomModal';
import TransactionCard from '../../containers/TransactionCard';
import styles from './style';

const ListTransaction = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [filter, setFilter] = React.useState('URUTKAN');
  const [dataTransaction, setDataTransaction] = React.useState([]);

  const getListTransaction = async () => {
    const transaction = await (
      await fetch('https://nextar.flip.id/frontend-test')
    ).json();
    const arrayTransaction = [];

    for (const key in transaction) {
      if (Object.hasOwnProperty.call(transaction, key)) {
        arrayTransaction.push(transaction[key]);
      }
    }

    setDataTransaction(arrayTransaction);
  };

  React.useEffect(() => {
    getListTransaction();
  }, []);

  console.log(dataTransaction[0]);

  return (
    <View style={styles.page}>
      <CustomModal
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        {dataRadiobutton.map(data => (
          <RadioButton
            title={data.title}
            active={filter}
            key={data.id}
            onPress={() => {
              setFilter(data.title);
              setModalVisible(!modalVisible);
            }}
          />
        ))}
      </CustomModal>
      <View style={styles.wrapperTextInput}>
        <IconSearch />
        <TextInput
          style={styles.textInput}
          placeholder="Cari nama, bank, atau nominal"
        />
        <TouchableOpacity
          style={styles.wrapperSelect}
          onPress={() => setModalVisible(!modalVisible)}>
          <Text style={styles.titleSelect}>{filter}</Text>
          <IconArrowDownward />
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.listView}
        data={dataTransaction}
        renderItem={({item}) => (
          <TransactionCard
            onPress={() => navigation.navigate('DetailTransaction')}
            data={item}
          />
        )}
      />
    </View>
  );
};

export default ListTransaction;
