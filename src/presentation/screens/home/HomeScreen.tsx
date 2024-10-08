import {View, Text} from 'react-native';
import {useStoreProfile} from '../../store/profile-store';
import {stylesGlobal} from '../../../config/app-theme';

export const HomeScreen = () => {
  const name = useStoreProfile(state => state.name);
  const email = useStoreProfile(state => state.email);

  return (
    <View style={stylesGlobal.container}>
      <Text
        style={{textAlign: 'center', marginBottom: 20, ...stylesGlobal.title}}>
        HomeScreen
      </Text>
      <Text>{name}</Text>
      <Text>{email}</Text>
    </View>
  );
};
