import React from 'react';
import {View, Text} from 'react-native';

import styles from './style';

const LabelSuccess = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Berhasil</Text>
    </View>
  );
};

export default LabelSuccess;
