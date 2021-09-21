import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
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
      <View style={styles.listView}>
        <TransactionCard isSuccess={false} />
        <TransactionCard isSuccess={false} />
        <TransactionCard isSuccess={true} />
        <TransactionCard isSuccess={true} />
      </View>
    </View>
  );
};

export default ListTransaction;
