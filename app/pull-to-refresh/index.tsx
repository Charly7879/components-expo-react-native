import { useThemeColor } from '@/components/Themed';
import ThemedText from '@/presentations/shared/ThemedText';
import ThemedView from '@/presentations/shared/ThemedView';
import { useState } from 'react';
import { RefreshControl, ScrollView } from 'react-native';

const PullToRefreshScreen = () => {

  /**
   * Colores según el theme light o darck
   */
  const primaryColor = useThemeColor({}, 'primary');
  const backgroundColor = useThemeColor({
    dark: 'black',
    light: 'white'
  }, 'background');

  // Estado del componente RefreshControl
  const [isReFreshing, setIsReFreshing] = useState(false);

  // Método de simulación
  const onRefresh = async () => {
    setIsReFreshing(true);

    setTimeout(() => {
      setIsReFreshing(false);
    }, 3000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isReFreshing}
          onRefresh={onRefresh}
          colors={[primaryColor, 'red', 'orange', 'green']}
          progressBackgroundColor={backgroundColor}
        />
      }
    >
      <ThemedView margin>
        <ThemedText>Pull to refresh</ThemedText>
      </ThemedView>
    </ScrollView>
  );
};
export default PullToRefreshScreen;
