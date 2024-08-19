import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
    <SafeAreaView style={styles.container}>
      <View style ={styles.search}>
        <Text>Search</Text>
      </View>
      <View style={styles.list}>
        <Text>List</Text>
      </View>
    </SafeAreaView>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  search:{
    backgroundColor:'green',
    height:'7%',
    width:'100%',
    justifyContent:'center',
    padding:15
  },
  list:{
    flex:1,
    backgroundColor: 'blue',
    width:'100%',
    padding:20
  }
});
