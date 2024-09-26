import {View, Text} from 'react-native';
import {useStoreProfile} from '../../store/profile-store';
import {stylesGlobal} from '../../../config/app-theme';
import {ButtonPrimary} from '../../components/ButtonPrimary';

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

      <ButtonPrimary
        onPress={() => {
          useStoreProfile.setState({name: 'nombre cambiado'});
        }}
        title="Cambiar nombre"
        colorBackground="red"
      />
      <ButtonPrimary
        onPress={() => {
          useStoreProfile.setState({email: 'email cambiado'});
        }}
        title="Cambiar email"
        colorBackground="orange"
      />

      <ButtonPrimary
        onPress={() => changeProfile('cloe', 'mtz')}
        title="Cambiar perfil"
        colorBackground="skyblue"
      />
    </View>
  );
};
