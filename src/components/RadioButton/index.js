import React from 'react';
import {Pressable, Text} from 'react-native';
import {IconRadioButton} from '../../assets';
import styles from './style';

const RadioButton = ({title, active, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <IconRadioButton active={active === title} />
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default RadioButton;
