import React from 'react';
import {View, Modal} from 'react-native';

import styles from './style';

const CustomModal = props => {
  return (
    <Modal animationType="fade" transparent={true} {...props}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>{props.children}</View>
      </View>
    </Modal>
  );
};

export default CustomModal;
