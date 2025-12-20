import ThemedButton from '@/presentations/shared/ThemedButton';
import ThemedView from '@/presentations/shared/ThemedView';
import { Link, router } from 'expo-router';
import { Text } from 'react-native';

const ModalScreen = () => {
  return (
    <ThemedView>
      <Link asChild href="/modal/modal-window" className="mx-4">
        <Text className="text-light-text dark:text-dark-text my-2 text-xl mb-5">
          Abrir modal con "Link"
        </Text>
      </Link>

      <ThemedButton
        className='mx-4'
        onPress={() => router.push('/modal/modal-window')}
      >
        Abrir Modal
      </ThemedButton>
    </ThemedView>
  );
};
export default ModalScreen;
