import {View, Text, Pressable} from 'react-native';
import {useStoreProfile} from '../../store/profile-store';
import {stylesGlobal} from '../../../config/app-theme';

export const ProfileScreen = () => {
  const name = useStoreProfile(state => state.name);
  const email = useStoreProfile(state => state.email);
  const changeProfile = useStoreProfile(state => state.changeProfile);

  return (
    <View style={stylesGlobal.container}>
      <Text
        style={{textAlign: 'center', marginBottom: 20, ...stylesGlobal.title}}>
        ProfileScreen
      </Text>
      <Text>{name}</Text>
      <Text>{email}</Text>

      <Pressable
        style={{
          backgroundColor: 'red',
          cursor: 'auto',
          padding: 10,
          borderRadius: 10,
          marginTop: 20,
        }}
        onPress={() => {
          useStoreProfile.setState({name: 'nombre cambiado'});
        }}>
        <Text style={{color: 'black'}}>Cambiar nombre</Text>
      </Pressable>

      <Pressable
        style={{
          backgroundColor: 'orange',
          cursor: 'auto',
          padding: 10,
          borderRadius: 10,
          marginTop: 20,
        }}
        onPress={() => {
          useStoreProfile.setState({email: 'email cambiado'});
        }}>
        <Text style={{color: 'black'}}>Cambiar email</Text>
      </Pressable>

      <Pressable
        style={{
          backgroundColor: 'skyblue',
          cursor: 'auto',
          padding: 10,
          borderRadius: 10,
          marginTop: 20,
        }}
        onPress={() => changeProfile('cloe', 'mtz')}>
        <Text style={{color: 'black'}}>Cambiar perfil</Text>
      </Pressable>
    </View>
  );
};
