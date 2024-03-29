import React, { useCallback, useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Button} from 'react-native';
import BottomSheet, { BottomSheetView, BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import ApplePay from './src/components/ApplePay';
import { GestureHandlerRootView } from 'react-native-gesture-handler';



 export default function App() {

   const sheetRef = useRef<BottomSheet>(null);
   const [isOpen, setIsOpen] = useState(true);

   const snapPoints = ["40%",];

   const handleSnapPress = useCallback((index:number) => {
     sheetRef.current?.snapToIndex(index);
     setIsOpen(true);
   }, []);

   return (
    <GestureHandlerRootView style={{ flex: 1 }}>

     <SafeAreaView style={[styles.container, { backgroundColor: isOpen ? '#00000090' : '#fff'}]}>
       <Text style={styles.subtitle}>{new Date().toString().slice(0, 11)}</Text>
       <Text style={styles.title}>Today</Text>
       <View style={styles.shadow}>
          <Image style={[styles.image, {opacity: isOpen ? 0.2 : 1 }]} source={require('./assets/pexels-roberto-nickson-2559941.jpg')} />
       </View>
       <TouchableOpacity
         style={styles.button}
         onPress={() => handleSnapPress(0)}>
         <Text style={{ color: '#0080FB', fontSize: 16, fontWeight: '600'}}>GET</Text>
       </TouchableOpacity>
       <BottomSheet
         ref={sheetRef}
         snapPoints={snapPoints}
         enablePanDownToClose={true}
         onClose={() => setIsOpen(false)}
       >
         <BottomSheetView>
           <ApplePay />
         </BottomSheetView>
       </BottomSheet>
     </SafeAreaView>
     </GestureHandlerRootView>

   );
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: "flex-start",
    
   },
   title: {     fontSize: 32,
     textAlign: "left",
     margin: 10,
     fontWeight: "bold",
   },
   subtitle: {
     fontSize: 18,
     textAlign: "left",
     marginLeft: 10,     color: "#aaa",
     fontWeight: '500',
    
   },
   image: {
     width: "90%",
     height: 400,
     resizeMode: "cover",
    alignSelf: "center",
     borderRadius: 20,

   },
   shadow: {
    marginTop: 20,
     alignItems: "center",
     justifyContent: "center",
     shadowColor: "#000",
     shadowOffset: {
       width: 0,
       height: 5,
     },
     shadowOpacity: .55,
     shadowRadius: 6.84,
     elevation: 5,
   },
   button: {
     marginTop: 20,
     backgroundColor: '#f4f4f4',
     width: 80,
     height: 30,
     alignItems: 'center',
     justifyContent: 'center',
     alignSelf: 'center',
     borderRadius: 15,
   }
 });