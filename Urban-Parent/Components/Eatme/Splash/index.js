import React, { View, Text, StyleSheet } from 'react-native';

export default function Splash() {
  const style = StyleSheet.create({
    spash: {
      flex: 1,
      backgroundColor: 'pink',
      alignItems: 'center',
      justifyContent: 'center',
    },
    splashInner:{
        color:"white",
    }
  });
  return (
    <View style={style.spash}>
      <View >
        <Text style={style.splashInner}>Splash Screen</Text>
      </View>
    </View>
  );
}
