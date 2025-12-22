import FadeInImage from '@/presentations/images/FadeInImage';
import ThemedView from '@/presentations/shared/ThemedView';
import { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const InfiniteScrollScreen = () => {

  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const loadMore = () => {
    const newArray = Array.from({ length: 10 }, (_, i) => numbers.length + i); // Añade 5 elementos más a numbers
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 3000);
  };

  return (
    <ThemedView>
      {/** FlatList: Es útil para ahorrar memoria en un infiniti-scroll */}
      <FlatList
        data={numbers}
        renderItem={({ item }) => (
          <ListItem number={item} />
        )}
        onEndReached={loadMore} // Cuanto llega al los últimos elementos, llama al método loadMore par añadir más elementos.
        onEndReachedThreshold={0.6} // Porcentaje del scroll para que comience a cargar más elementos
        ListFooterComponent={() => ( // Indicador que está cargando 
          <View style={{ height: 150, justifyContent: 'center' }}>
            <ActivityIndicator size={40} />
          </View>
        )}
      />
    </ThemedView>
  );
};
export default InfiniteScrollScreen;


/**
 * Componente para simular data
 */
interface ListItemProps {
  number: number;
}

const ListItem = ({
  number
}: ListItemProps) => {
  return (
    <FadeInImage
      uri={`https://picsum.photos/id/${number}/500/400`}
      style={{
        height: 400,
        width: '100%',
      }}
    />
    // <Image
    //   source={{ uri: `https://picsum.photos/id/${number}/500/400` }}
    //   style={{
    //     height: 400,
    //     width: "100%",
    //   }}
    // />
  );
};