import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {IconArrowForward} from '../../assets';
import {Label} from '../../components';

import styles from './style';

const TransactionCard = ({onPress, isSuccess}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.labelLeft(isSuccess)} />
      <View style={styles.padding}>
        <View style={styles.column}>
          <View style={styles.row}>
            <Text style={styles.nameBank}>Permata</Text>
            <IconArrowForward />
            <Text style={styles.nameBank}>BNI</Text>
          </View>
          <Text style={styles.name}>Reza Mauliadi</Text>
          <Text>
            <Text>Rp10.001 </Text>
            <Text style={{fontSize: 9}}> &#9679; </Text>
            <Text> 8 April 2020</Text>
          </Text>
        </View>
        <Label isSuccess={isSuccess} />
      </View>
    </TouchableOpacity>
  );
};

export default TransactionCard;
