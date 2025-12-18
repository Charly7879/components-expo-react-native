import ThemedCard from '@/presentations/shared/ThemedCard';
import ThemedSwitch from '@/presentations/shared/ThemedSwitch';
import ThemedView from '@/presentations/shared/ThemedView';
import { useState } from 'react';

const Switches = () => {

  // Estados del switch
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  return (
    <ThemedView margin className="mt-3">
      <ThemedCard>
        <ThemedSwitch
          className='mb-2'
          text='Activo'
          onValueChange={(value) => setState({ ...state, isActive: value })}
          value={state.isActive}
        />

        <ThemedSwitch
          className='mb-2'
          text='Hambriento'
          onValueChange={(value) => setState({ ...state, isHungry: value })}
          value={state.isHungry}
        />

        <ThemedSwitch
          className='mb-2'
          text='Contento'
          onValueChange={(value) => setState({ ...state, isHappy: value })}
          value={state.isHappy}
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default Switches;
