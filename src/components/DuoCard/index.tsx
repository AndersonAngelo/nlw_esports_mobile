import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { GameController } from 'phosphor-react-native';

import { DuoInfo } from "../DuoInfo";

import { THEME } from "../../theme";
import { styles } from "./styles";

export interface DuoCardProps {
  id: string,
  hourEnd: string,
  hourStart: string,
  name: string,
  useVoiceChannel: boolean,
  weekDays: string[],
  yearsPlaying: number,
}

interface Props {
  data: DuoCardProps;
}

export function DuoCard({ data }: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo 
        label="Nome" 
        value={data.name} 
      />
      <DuoInfo 
        label="Tempo de jogo" 
        value={`${data.yearsPlaying} ano${data.yearsPlaying <= 1 ? '' : 's'}`} 
      />
      <DuoInfo 
        label="Disponibilidade" 
        value={`${data.weekDays.length} Dia${data.weekDays.length <= 1 ? '' : 's'} \u2022 ${data.hourStart} - ${data.hourEnd}`}
      />
      <DuoInfo
        label="Chamada de áudio?" 
        value={data.useVoiceChannel ? 'Sim' : 'Não'} 
        colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      />

      <TouchableOpacity style={styles.button}>
        <GameController 
          color={THEME.COLORS.TEXT}
          size={20}
        />
        <Text style={styles.buttonTitle}>
          Conectar
        </Text>
      </TouchableOpacity>
    </View>
  );
}