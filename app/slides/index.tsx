import ThemedButton from '@/presentations/shared/ThemedButton';
import ThemedText from '@/presentations/shared/ThemedText';
import ThemedView from '@/presentations/shared/ThemedView';
import { router } from 'expo-router';
import { useRef, useState } from 'react';
import { FlatList, Image, ImageSourcePropType, NativeScrollEvent, NativeSyntheticEvent, useWindowDimensions } from 'react-native';

// Interface para las imágenes del Slide
interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType; // Tipo de dato del source, para el atributo img de cada ítem.
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../../assets/images/slides/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../../assets/images/slides/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../../assets/images/slides/slide-3.png'),
  },
];

const SlidesScreen = () => {

  // Referencia a FlatList del Slide
  const flatListRef = useRef<FlatList>(null);

  // Determinar el slide actual
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Habilitar scroll
  const [isScrollEnabled, setIsScrollEnabled] = useState(false);

  // Referencia onScroll de FlatList
  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {

    // Sí está habilitado el scroll, no hacer nada
    if (isScrollEnabled) return;

    const {
      contentOffset, // Elemento del slide que sobrepasa la pantall
      layoutMeasurement, // Tamaño del elemento del slide
    } = event.nativeEvent;

    // Elemento actual
    const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);

    setCurrentSlideIndex(currentIndex > 0 ? currentIndex : 0);

    // Habilitar scroll sí se llega al último ítem
    if (currentIndex === items.length - 1) {
      setIsScrollEnabled(true);
    }
  };

  // Comprobar a qué elemento del Slide, se quiere navegar
  const scrollToSlide = (index: number) => {
    if (!flatListRef.current) return;

    flatListRef.current.scrollToIndex({
      index: index,
      animated: true,
    });
  };



  return (
    <ThemedView className='mb-10'>
      <FlatList
        ref={flatListRef}
        data={items}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <SlideItem item={item} />
        )}
        horizontal
        pagingEnabled
        scrollEnabled={isScrollEnabled}
        onScroll={onScroll}
      />
      {
        (currentSlideIndex === items.length - 1) // Sí el elemento actual del slide es el último se motrará "Finalizar"
          ?
          (
            <ThemedButton
              className='absolute bottom-10 right-5 w-[150px]'
              onPress={() => router.dismiss()}
            >
              Finalizar
            </ThemedButton>
          )
          : // De lo contrario se muestra el botón "Siguiente"
          (
            <ThemedButton
              className='absolute bottom-10 right-5 w-[150px]'
              onPress={() => scrollToSlide(currentSlideIndex + 1)}
            >
              Siguiente
            </ThemedButton>
          )
      }
    </ThemedView>
  );
};
export default SlidesScreen;

/**
 * SlideItem:
 * Componente Item del Slide
 */
interface Props {
  item: Slide;
}

const SlideItem = ({
  item
}: Props) => {

  // Dimensiones de la pantalla
  const { width } = useWindowDimensions();
  const { img, title, desc } = item;

  return (
    <ThemedView
      className='flex-1 rounded p-10 justify-center bg-red-600'
      style={{ width }}
    >
      <Image
        source={img}
        style={{
          width: width * 0.7,
          height: width * 0.7,
          resizeMode: 'center',
          alignSelf: 'center',
        }}
      />
      <ThemedText
        type='h1'
        className='text-light-primary dark:text-dark-primary'>
        {title}
      </ThemedText>
      <ThemedText>
        {desc}
      </ThemedText>
    </ThemedView>
  );
};