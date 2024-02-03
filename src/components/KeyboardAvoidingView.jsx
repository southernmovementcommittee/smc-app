import { SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, StatusBar, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';

const KeyboardAvoidingWrapper = ({ children, scrollStyle, backgroundColor, headerAvailable }) => {
  const headerHeight = headerAvailable ? useHeaderHeight() + 20 : 20; 
  return (
      <SafeAreaView style={{ flex: 1, backgroundColor: backgroundColor || '#000' }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={headerHeight}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {children}
        </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    padding: 20,
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 
  }
})

export default KeyboardAvoidingWrapper;