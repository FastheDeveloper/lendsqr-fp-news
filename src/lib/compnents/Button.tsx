import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {GoogleIcon} from '@lib/icons/googleIcon/GoogleSvg';
interface Props {
  disabled?: boolean;
  title: string;
  onPress?: () => void;
}
export const Primary = ({disabled, title, onPress}: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {backgroundColor: disabled ? '#0F6DDC80' : '#0F6DDC'},
      ]}
      disabled={disabled}
      onPress={onPress}>
      <Text style={{color: '#fff'}}>{title}</Text>
    </TouchableOpacity>
  );
};

export const GoogleButton = ({disabled, title, onPress}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.containerG]}
      disabled={disabled}
      onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <GoogleIcon />
        <Text style={{color: '#0F6DDC', marginLeft: '3%'}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const Tetiary = ({disabled, title, onPress}: Props) => {
  return (
    <TouchableOpacity
      style={styles.containerT}
      disabled={disabled}
      onPress={onPress}>
      <Text style={styles.textDecor}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0F6DDC',
    alignItems: 'center',
    paddingVertical: '4%',
    borderRadius: 8,
  },
  containerG: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: '4%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#0F6DDC',
  },
  containerT: {
    alignItems: 'flex-end',
    paddingVertical: '4%',
  },
  textDecor: {
    color: '#0F6DDC',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },
});
