/**
 * AlertsScreen:
 * Demostración del componente Alert de react-native
 * https://reactnative.dev/docs/alert
 * 
 */
import ThemedButton from '@/presentations/shared/ThemedButton';
import ThemedView from '@/presentations/shared/ThemedView';
import { Alert } from 'react-native';

const AlertsScreen = () => {

  // Alert con 2 botones
  const crateTwoButtonAlert = () => {
    Alert.alert('Alert title', 'Alert message', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel pressed'),
        style: 'cancel',
      },
      {
        text: 'Ok',
        onPress: () => console.log('Ok pressed')
      }
    ])
  };

  // Alert con 3 botones
  const crateThreeButtonAlert = () => {
    Alert.alert('Alert title', 'Alert message', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel pressed'),
        style: 'destructive',
      },
      {
        text: 'Ok',
        onPress: () => console.log('Ok pressed')
      }
    ])
  };

  return (
    <ThemedView margin>
      <ThemedButton
        className='my-5'
        children='Alert two buttons'
        onPress={crateTwoButtonAlert}
      />
      <ThemedButton
        children='Alert three buttons'
        onPress={crateThreeButtonAlert}
      />
    </ThemedView>
  );
};
export default AlertsScreen;
