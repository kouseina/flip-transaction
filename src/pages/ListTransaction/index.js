import React from 'react';
import {
  ActivityIndicator,
  FlatList,
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
  const [modalVisible, setModalVisible] = React.useState(false);
  const [filter, setFilter] = React.useState('URUTKAN');
  const [dataTransaction, setDataTransaction] = React.useState([]);
  const [fixDataTransaction, setFixDataTransaction] = React.useState([]);
  const [search, setSearch] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    getListTransaction().finally(() => setIsLoading(false));
  }, [filter]);

  React.useEffect(() => {
    setIsLoading(true);
    searchFilter();
  }, [search]);

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

    if (filter === 'Nama A-Z') {
      const sortAZ = arrayTransaction.sort(
        (a, b) => a.beneficiary_name > b.beneficiary_name,
      );
      setDataTransaction(sortAZ);
      setFixDataTransaction(sortAZ);
    } else if (filter === 'Nama Z-A') {
      const sortZA = arrayTransaction.sort(
        (a, b) => a.beneficiary_name < b.beneficiary_name,
      );
      setDataTransaction(sortZA);
      setFixDataTransaction(sortZA);
    } else if (filter === 'Tanggal Terbaru') {
      const sortDateNewest = arrayTransaction.sort(
        (a, b) => a.created_at < b.created_at,
      );
      setDataTransaction(sortDateNewest);
      setFixDataTransaction(sortDateNewest);
    } else if (filter === 'Tanggal Terlama') {
      const sortDateOldest = arrayTransaction.sort(
        (a, b) => a.created_at > b.created_at,
      );
      setDataTransaction(sortDateOldest);
      setFixDataTransaction(sortDateOldest);
    } else {
      setDataTransaction(arrayTransaction);
      setFixDataTransaction(arrayTransaction);
    }
  };

  const searchFilter = () => {
    const toCapitalCase = word =>
      word
        .toLowerCase()
        .replace(/\w/, firstLetter => firstLetter.toUpperCase());

    const filtered = fixDataTransaction.filter(data => {
      const nameLow = data.beneficiary_name.toLowerCase();
      const nameUp = data.beneficiary_name.toUpperCase();
      const bankUp = data.beneficiary_bank.toUpperCase();
      const bankCap = toCapitalCase(data.beneficiary_bank);
      const senderBankUp = data.sender_bank.toUpperCase();
      const senderBankCap = toCapitalCase(data.sender_bank);
      const amount = data.amount.toString();

      return (
        nameLow.includes(search) === true ||
        nameUp.includes(search) === true ||
        bankUp.includes(search) === true ||
        amount.includes(search) === true ||
        senderBankUp.includes(search) === true ||
        bankCap.includes(search) === true ||
        senderBankCap.includes(search) === true ||
        data.beneficiary_name.includes(search) === true ||
        data.beneficiary_bank.includes(search) === true ||
        data.sender_bank.includes(search) === true
      );
    });

    setDataTransaction(filtered);
    setIsLoading(false);
  };

  const itemSeparator = () => (
    <View
      style={{
        height: 12,
      }}
    />
  );

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
              setSearch('');
            }}
          />
        ))}
      </CustomModal>
      <View style={styles.wrapperTextInput}>
        <IconSearch />
        <TextInput
          style={styles.textInput}
          placeholder="Cari nama, bank, atau nominal"
          value={search}
          onChangeText={text => setSearch(text)}
        />
        <TouchableOpacity
          style={styles.wrapperSelect}
          onPress={() => setModalVisible(!modalVisible)}>
          <Text style={styles.titleSelect}>{filter}</Text>
          <IconArrowDownward />
        </TouchableOpacity>
      </View>
      {isLoading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="#F4603A" />
        </View>
      ) : (
        <FlatList
          ItemSeparatorComponent={itemSeparator}
          keyExtractor={item => item.id}
          style={styles.listView}
          data={dataTransaction}
          renderItem={({item}) => <TransactionCard data={item} />}
        />
      )}
    </View>
  );
};

export default ListTransaction;
