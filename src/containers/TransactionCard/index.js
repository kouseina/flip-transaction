import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {IconArrowForward} from '../../assets';
import {Label} from '../../components';
import dateConvert from '../../config/dateConvert';

import styles from './style';

const TransactionCard = ({data}) => {
  const navigation = useNavigation();
  const isSuccess = () => data.status === 'SUCCESS';

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('DetailTransaction', {data})}>
      <View style={styles.labelLeft(isSuccess())} />
      <View style={styles.padding}>
        <View style={styles.column}>
          <View style={styles.row}>
            <Text style={styles.nameBank}>{data ? data.sender_bank : ''}</Text>
            <IconArrowForward />
            <Text style={styles.nameBank}>
              {data ? data.beneficiary_bank : ''}
            </Text>
          </View>
          <Text style={styles.name}>{data ? data.beneficiary_name : ''}</Text>
          <Text>
            <Text>Rp{data ? data.amount : ''} </Text>
            <Text style={{fontSize: 9}}> &#9679; </Text>
            <Text>{dateConvert(data.created_at)}</Text>
          </Text>
        </View>
        <Label isSuccess={isSuccess()} />
      </View>
    </TouchableOpacity>
  );
};

export default TransactionCard;
