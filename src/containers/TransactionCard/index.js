import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {IconArrowForward} from '../../assets';
import {Label} from '../../components';

import styles from './style';

const TransactionCard = ({onPress, data}) => {
  const isSuccess = () => data.status === 'SUCCESS';
  const createAt = Date(data.completed_at);

  const GetFormattedDate = dataTime => {
    let data = Date(dataTime);
    var month = data.getMonth() + 1;
    var day = data.getDate();
    var year = data.getFullYear();

    return month + '/' + day + '/' + year;
  };

  console.log(data ? GetFormattedDate(createAt) : 'null');

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
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
            <Text> 8 April 2020</Text>
          </Text>
        </View>
        <Label isSuccess={isSuccess()} />
      </View>
    </TouchableOpacity>
  );
};

export default TransactionCard;
