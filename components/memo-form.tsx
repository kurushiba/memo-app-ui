import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { COLORS } from '@/constants/colors';

export default function MemoForm() {
  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => (
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.saveButton}>保存</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <SafeAreaView style={styles.container} edges={['bottom']}>
          <TextInput
            style={styles.titleInput}
            value="買い物リスト"
            onChangeText={() => {}}
            placeholder="タイトル"
            placeholderTextColor={COLORS.subText}
          />
          <TextInput
            style={styles.bodyInput}
            value=""
            onChangeText={() => {}}
            placeholder="本文"
            placeholderTextColor={COLORS.subText}
            multiline
            textAlignVertical="top"
          />
        </SafeAreaView>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  saveButton: {
    color: COLORS.accent,
    fontSize: 16,
    fontWeight: '600',
    marginRight: 16,
  },
  saveButtonDisabled: {
    color: COLORS.subText,
    fontWeight: '400',
  },
  keyboardView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  titleInput: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.text,
    backgroundColor: COLORS.surface,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
    marginHorizontal: 16,
    marginTop: 16,
  },
  bodyInput: {
    flex: 1,
    fontSize: 16,
    color: COLORS.text,
    backgroundColor: COLORS.surface,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
    marginHorizontal: 16,
    marginTop: 10,
    textAlignVertical: 'top',
  },
});
