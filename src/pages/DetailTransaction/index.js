import Clipboard from '@react-native-clipboard/clipboard';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, ToastAndroid, TouchableOpacity, View} from 'react-native';
import {IconArrowForward, IconCopy} from '../../assets';

import styles from './style';

const DetailTransaction = () => {
  const navigation = useNavigation();

  const copyToClipboard = () => {
    Clipboard.setString('#FT1627635');
    ToastAndroid.show('copied', ToastAndroid.SHORT);
  };

  return (
    <View style={styles.page}>
      <View style={[styles.row, styles.border, {borderBottomWidth: 0.5}]}>
        <Text style={styles.bold}>ID TRANSAKSI #FT1627635 </Text>
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
          <Text style={[styles.bold, styles.nameBank]}>Permata</Text>
          <IconArrowForward />
          <Text style={[styles.bold, styles.nameBank]}>BNI</Text>
        </View>
        <View style={[styles.row, styles.justifyBetween]}>
          <View style={styles.justifyStart}>
            <View style={styles.card}>
              <Text style={[styles.bold, styles.name]}>Syifa Salsabila</Text>
              <Text>0312918328</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.bold}>BERITA TRANSFER</Text>
              <Text>Coba banking yey</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.bold}>WAKTU DIBUAT</Text>
              <Text>8 April 2020</Text>
            </View>
          </View>
          <View style={styles.justifyStart}>
            <View style={styles.card}>
              <Text style={styles.bold}>Nominal</Text>
              <Text>Rp10.000</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.bold}>KODE UNIK</Text>
              <Text>50</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailTransaction;
