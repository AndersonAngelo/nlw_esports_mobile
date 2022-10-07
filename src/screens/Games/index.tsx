import { Image, TouchableOpacity, View, FlatList, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

import logoImg from '../../assets/logo-nlw-esports.png';

import { useEffect, useState } from 'react';
import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';

import { GameParams } from '../../@types/navigation';

import { THEME } from '../../theme';
import { styles } from './styles';
import React from 'react';

export function Games() {
  const [duos, setDuos] = useState<DuoCardProps[]>([])

  const navigation = useNavigation();
  const route = useRoute();
  const game = route.params as GameParams;

  useEffect(() => {
    fetch(`http://192.168.0.254:3333/games/${game.id}/ads`)
      .then(res => res.json())
      .then(data => setDuos(data))
  }, [])


  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo 
              name='chevron-thin-left'
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>
            <Image 
              source={logoImg}
              style={styles.logo}
            />

            <View style={styles.right}/>
        </View>

        <Image 
          source={{ uri: game.bannerURL }} 
          style={styles.cover}
          resizeMode='cover'
        />

        <Heading 
          title={game.title}
          subtitle='Conecte-se e comece a jogar!'
        />

        <FlatList 
          data={duos}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <DuoCard 
              data={item}
              onConnect={() => {}}
            />
          )}
          horizontal
          style={styles.containerList}
          contentContainerStyle={[duos.length === 0 ? styles.emptyListContent : styles.contentList]}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>
              Não há anúcios publicados ainda.
            </Text>
          )}
        />
      </SafeAreaView>
    </Background>
  );
}