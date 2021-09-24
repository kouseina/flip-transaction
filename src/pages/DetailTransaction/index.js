import Clipboard from '@react-native-clipboard/clipboard';
import {useNavigation, useRoute} from '@react-navigation/core';
import React from 'react';
import {Text, ToastAndroid, TouchableOpacity, View} from 'react-native';
import {IconArrowForward, IconCopy} from '../../assets';
import dateConvert from '../../config/dateConvert';
import numberConvert from '../../config/numberConvert';

import styles from './style';

const DetailTransaction = () => {
  const navigation = useNavigation();
  const data = useRoute().params.data;

  const copyToClipboard = () => {
    Clipboard.setString(`#${data.id}`);
    ToastAndroid.show('copied', ToastAndroid.SHORT);
  };

  return (
    <View style={styles.page}>
      <View style={[styles.row, styles.border, {borderBottomWidth: 0.5}]}>
        <Text style={styles.bold}>ID TRANSAKSI #{data.id} </Text>
        <TouchableOpacity onPress={copyToClipboard}>
          <IconCopy />
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.row,
          styles.justifyBetween,
          styles.border,
          {borderBottomWidth: 1},
        ]}>
        <Text style={styles.semiBold}>DETAIL TRANSAKSI</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.closeText}>Tutup</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.column}>
        <View style={styles.row}>
          <Text style={[styles.bold, styles.nameBank, styles.senderBank(data)]}>
            {data.sender_bank}
          </Text>
          <IconArrowForward />
          <Text
            style={[
              styles.bold,
              styles.nameBank,
              styles.beneficiaryBank(data),
            ]}>
            {data.beneficiary_bank}
          </Text>
        </View>
        <View style={[styles.row, styles.justifyBetween]}>
          <View style={styles.justifyStart}>
            <View style={styles.card}>
              <Text style={[styles.bold, styles.name]}>
                {data.beneficiary_name}
              </Text>
              <Text>{data.account_number}</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.bold}>BERITA TRANSFER</Text>
              <Text>{data.remark}</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.bold}>WAKTU DIBUAT</Text>
              <Text>{dateConvert(data.created_at)}</Text>
            </View>
          </View>
          <View style={styles.justifyStart}>
            <View style={styles.card}>
              <Text style={styles.bold}>Nominal</Text>
              <Text>{numberConvert(data.amount)}</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.bold}>KODE UNIK</Text>
              <Text>{data.unique_code}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailTransaction;
