import {View, Text} from 'react-native';
import {useStoreProfile} from '../../store/profile-store';
import {stylesGlobal} from '../../../config/app-theme';
import {useStoreCounter} from '../../store/counter-store';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {ButtonPrimary} from '../../components/ButtonPrimary';

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

      <ButtonPrimary
        onPress={() => incrementBy(+1)}
        title="Incrementar"
        colorBackground="skyblue"
      />
      <ButtonPrimary
        onPress={() => incrementBy(-1)}
        title="Decrementar"
        colorBackground="skyblue"
      />
    </View>
  );
};
