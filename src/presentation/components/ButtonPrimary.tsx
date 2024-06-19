import {FC} from 'react';
import {Pressable, Text} from 'react-native';

interface ButtonPrimaryProps {
  title: string;
  colorBackground: string;
  colorText?: string;
  onPress: () => void;
}

export const ButtonPrimary: FC<ButtonPrimaryProps> = ({
  title,
  colorBackground,
  colorText = 'black',
  onPress,
}) => {
  return (
    <Pressable
      style={{
        backgroundColor: colorBackground,
        cursor: 'auto',
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
      }}
      onPress={onPress}>
      <Text style={{color: colorText}}>{title}</Text>
    </Pressable>
  );
};
