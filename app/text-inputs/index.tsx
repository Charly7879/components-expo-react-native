import ThemedCard from '@/presentations/shared/ThemedCard';
import ThemedText from '@/presentations/shared/ThemedText';
import ThemedInputText from '@/presentations/shared/ThemedTextInput';
import ThemedView from '@/presentations/shared/ThemedView';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';

const TextInputsScreen = () => {

  // Formulario
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
  });

  // Plataforma
  const isIOS = Platform.OS === 'ios';

  return (
    <KeyboardAvoidingView behavior={isIOS ? 'height' : undefined}>
      <ScrollView>
        <ThemedView margin>
          <ThemedCard className='mb-5'>
            <ThemedInputText
              placeholder='Nombre completo'
              autoCapitalize={'words'}
              autoCorrect={false}
              onChangeText={(text) => setForm({ ...form, fullName: text })}
            />
            <ThemedInputText
              placeholder='E-mail'
              autoCorrect={false}
              keyboardType='email-address'
              onChangeText={(text) => setForm({ ...form, email: text })}
            />
            <ThemedInputText
              placeholder='Teléfono'
              autoCorrect={false}
              keyboardType='phone-pad'
              onChangeText={(text) => setForm({ ...form, phone: text })}
            />
          </ThemedCard>
          <ThemedCard className='mb-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className='mb-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className='mb-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className='mb-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className='mb-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className='mb-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
        </ThemedView>
        <ThemedCard className='mb-5'>
          <ThemedInputText
            placeholder='Teléfono'
            autoCorrect={false}
            keyboardType='phone-pad'
            onChangeText={(text) => setForm({ ...form, phone: text })}
          />
        </ThemedCard>
        {/* Sí es IOS se agrega un view con margin-button*/}
        {isIOS && <View style={{ marginBottom: 100 }} />}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
