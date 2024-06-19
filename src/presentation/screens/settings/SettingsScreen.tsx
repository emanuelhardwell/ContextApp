import {View, Text, Pressable} from 'react-native';
import {useStoreProfile} from '../../store/profile-store';
import {stylesGlobal} from '../../../config/app-theme';
import {useStoreCounter} from '../../store/counter-store';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';

export const SettingsScreen = () => {
  const name = useStoreProfile(state => state.name);
  const email = useStoreProfile(state => state.email);
  const incrementBy = useStoreCounter(state => state.incrementBy);
  const count = useStoreCounter(state => state.count);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: `Setting ---> Counter: ${count}`,
    });
  }, [count]);

  return (
    <View style={stylesGlobal.container}>
      <Text
        style={{textAlign: 'center', marginBottom: 20, ...stylesGlobal.title}}>
        SettingsScreen
      </Text>
      <Text>{name}</Text>
      <Text>{email}</Text>

      <Pressable
        style={{
          backgroundColor: 'skyblue',
          cursor: 'auto',
          padding: 10,
          borderRadius: 10,
          marginTop: 20,
        }}
        onPress={() => incrementBy(+1)}>
        <Text style={{color: 'black'}}>Incrementar</Text>
      </Pressable>

      <Pressable
        style={{
          backgroundColor: 'skyblue',
          cursor: 'auto',
          padding: 10,
          borderRadius: 10,
          marginTop: 20,
        }}
        onPress={() => incrementBy(-1)}>
        <Text style={{color: 'black'}}>Decrementar</Text>
      </Pressable>
    </View>
  );
};
