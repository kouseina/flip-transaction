import React from 'react';
import {View, Text} from 'react-native';

import styles from './style';

const Label = ({isSuccess}) => {
  if (isSuccess) {
    return (
      <View style={styles.containerSuccess}>
        <Text style={styles.text(isSuccess)}>Berhasil</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.containerPending}>
        <Text style={styles.text(isSuccess)}>Pengecekan</Text>
      </View>
    );
  }
};

export default Label;
