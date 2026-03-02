import {
  ActivityIndicator,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '@/constants/colors';

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* ローディング表示 - コメントアウトを切り替えて表示/非表示を変更 */}
      {/* <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={COLORS.accent} />
      </View> */}

      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.label}>毎日の通知</Text>
          <Switch
            value={false}
            onValueChange={() => {}}
            trackColor={{ false: COLORS.separator, true: COLORS.accent }}
            thumbColor="#FFFFFF"
          />
        </View>
        <View style={styles.separator} />
        {/* 通知時刻行 - 有効状態を確認したい場合は `true` を `false` に変更 */}
        <View style={[styles.row, true && styles.disabled]}>
          <Text style={[styles.label, true && styles.disabledText]}>
            通知時刻
          </Text>
          <View style={styles.timePicker}>
            <View style={styles.timeUnit}>
              <TouchableOpacity onPress={() => {}} disabled={true}>
                <Text style={[styles.arrow, true && styles.disabledText]}>
                  ▲
                </Text>
              </TouchableOpacity>
              <Text style={[styles.timeValue, true && styles.disabledText]}>
                09
              </Text>
              <TouchableOpacity onPress={() => {}} disabled={true}>
                <Text style={[styles.arrow, true && styles.disabledText]}>
                  ▼
                </Text>
              </TouchableOpacity>
            </View>

            <Text style={[styles.colon, true && styles.disabledText]}>:</Text>

            <View style={styles.timeUnit}>
              <TouchableOpacity onPress={() => {}} disabled={true}>
                <Text style={[styles.arrow, true && styles.disabledText]}>
                  ▲
                </Text>
              </TouchableOpacity>
              <Text style={[styles.timeValue, true && styles.disabledText]}>
                00
              </Text>
              <TouchableOpacity onPress={() => {}} disabled={true}>
                <Text style={[styles.arrow, true && styles.disabledText]}>
                  ▼
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    backgroundColor: COLORS.surface,
    borderRadius: 14,
    marginHorizontal: 16,
    marginTop: 28,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  label: {
    fontSize: 16,
    color: COLORS.text,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: COLORS.separator,
    marginLeft: 16,
  },
  disabled: {
    opacity: 0.4,
  },
  disabledText: {
    color: COLORS.subText,
  },
  timePicker: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  timeUnit: {
    alignItems: 'center',
    gap: 4,
  },
  arrow: {
    fontSize: 14,
    color: COLORS.accent,
    paddingHorizontal: 10,
  },
  timeValue: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.text,
    minWidth: 44,
    textAlign: 'center',
  },
  colon: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.text,
  },
});
