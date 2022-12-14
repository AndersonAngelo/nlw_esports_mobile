import React from 'react';
import { Modal, ModalProps, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Heading } from '../Heading';

import { styles } from './styles';
import { THEME } from '../../theme';

interface Props extends ModalProps {
  discord: string;
  onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...rest }: Props) {
  return (
    <Modal 
      transparent
      statusBarTranslucent
      {...rest}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.closeIcon}
            onPress={onClose}
          >
            <MaterialIcons 
              name='close'
              size={20}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>

          <MaterialIcons
            name='check-circle'
            size={50}
            color={THEME.COLORS.SUCCESS}
          />

          <Heading 
            title="Lets's play!"
            subtitle="Agora é só começar a jogar!"
            style={{ alignItems: 'center', marginTop: 24 }}
          />
          <Text style={styles.discord}>
            {discord}
          </Text>
        </View>
      </View>
    </Modal>
  );
}