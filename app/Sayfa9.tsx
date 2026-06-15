import { View, Text, Modal, TextInput, TouchableOpacity, StyleSheet, Button, Alert, Pressable,ScrollView, FlatList  } from 'react-native'
import React, { useContext,useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { KayitContext } from './KayitContext';
import SonucModal from './SonucModal';

const Sayfa9 = () => {

  const {tumKayitlariSil,hesaplaAkademikTesvikPuan,tumKayitlariSilSayfa9,alan, kayitlarSayfa9, toplamPuanSayfa9, kayitEkleSayfa9, kayitSilSayfa9 } = useContext(KayitContext);
  
const handleKaydet1 = () => {kayitEkleSayfa9
  ({kisiSayisi:kisiSayisi1, adet: adet1},() => setModal1Visible(false));};
  

const [modal1Visible, setModal1Visible] = useState(false);
const [adet1, setAdet1] = useState('');
const [kisiSayisi1, setKisiSayisi1] = useState('');

const [sonuc, setSonuc] = useState<any>(null);
    const [modalVisible, setModalVisible] = useState(false);
  const handleHesapla = () => {
    const res = hesaplaAkademikTesvikPuan();
    setSonuc(res);
    setModalVisible(true);
  };
    const handleSil=()=>tumKayitlariSil();



return (
<View style={styles.container}>
  
  <ScrollView contentContainerStyle={{ paddingBottom: 0, paddingTop: 0,alignItems: 'center' }}>
  <View style={{ backgroundColor: '#1976d2', padding: 10, borderRadius: 10, marginVertical: 20 }}>
    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>8. Tebliğ (20 puan)</Text>
  </View>
  

  <View style={styles.satirStil}>
    <Text style={styles.metinStil} numberOfLines={4}>
8.1. Hakemli uluslararası bilimsel konferansta, sempozyumda veya kongrede sözlü olarak sunulan ve bunların kitabında yayımlanan tam bildiri	
    </Text>
    <Pressable onPress={() => setModal1Visible(true)}>
      <AntDesign name="pluscircleo" size={24} color="#1976d2" />
    </Pressable>
  </View>

  

  

      
      <Modal transparent visible={modal1Visible} animationType="fade" onRequestClose={() => setModal1Visible(false)}>
        <View style={styles.modalArkaPlan}>
          <View style={styles.modalIcerik}>
            
            <Text style={styles.baslik}>Kaç Adet?</Text>
            <TextInput
              style={styles.input}
              placeholder="Adet giriniz"
              keyboardType="numeric"
              value={adet1}
              onChangeText={setAdet1}
            />
            <Text style={styles.baslik}>Kaç kişiyle?</Text>
            <TextInput
              style={styles.input}
              placeholder="Adet giriniz"
              keyboardType="numeric"
              value={kisiSayisi1}
              onChangeText={setKisiSayisi1}
            />
            
            <TouchableOpacity style={styles.kaydetButonu} onPress={handleKaydet1}>
              <Text style={styles.kapatYazi}>Kaydet</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.kaydetButonu} onPress={() => setModal1Visible(false)}>
              <Text style={styles.kapatYazi}>İptal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      

       
      

  <View style={{ marginVertical: 20, width: '90%' }}>
    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Eklenen Puanlar:</Text>
    {kayitlarSayfa9.length === 0 && <Text>Henüz puan eklenmedi.</Text>}
    {kayitlarSayfa9.map((k, index) => (
      <View key={index} style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 8,
      padding: 12,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#90caf9',
      backgroundColor: '#e3f2fd',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
}}>
      <View>
        <Text>Kişi Sayısı:{k.kisiSayisi}</Text>
        <Text>Adet: {k.adet}</Text>
        <Text>Puan: {k.puan.toFixed(2)}</Text>
      </View>

      <TouchableOpacity onPress={() => kayitSilSayfa9(index)} style={{
            backgroundColor: '#d32f2f',
            padding: 0,
            borderRadius: 5,
            width: 60,
            height: 60,
            alignItems: 'center',
            justifyContent: 'center'}}>
        
        <AntDesign name="delete" size={20} color="white" />
      </TouchableOpacity>

    </View>
        ))}
  </View>


    
  

<View style={{
  marginTop: 20,
  marginBottom: 10,
  padding: 15,
  borderRadius: 10,
  backgroundColor: '#e3f2fd',
  width: '90%',
  alignItems:'center'
}}>
  {toplamPuanSayfa9 > 20 && (
    <Text style={{
      fontSize: 18,
      fontWeight: 'bold',
      color: 'red',
      marginBottom: 5
    }}>
      Limit Puan: 20
    </Text>
  )}
  <Text style={{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0d47a1'
  }}>
    Toplam Puan: {toplamPuanSayfa9.toFixed(2)}
  </Text>
</View>

        <View style={styles.butonContainer}>
          <TouchableOpacity style={styles.butonTemizle} onPress={tumKayitlariSilSayfa9}>
            <Text style={styles.textTemizle}>Tüm Kayıtları Temizle</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleHesapla} activeOpacity={0.7} style={styles.buttonHesapla}>
            <Text style={styles.textHesapla}>HESAPLA</Text>
          </TouchableOpacity>
        </View>
        <SonucModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          sonuc={sonuc || {
            detayliPuanlar: {}, nihaiPuan: 0, oran: 0, odemeTutari: 0
          }}
        />

      
 
</ScrollView>
</View>
  )
}

export default Sayfa9

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',

    },
    buttonsekli:{
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#4ca832',
      borderWidth:0.5,
      width:35,
      height:35,
      borderRadius:35,
    },
    modalArkaPlan: { 
      flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', justifyContent: 'center', alignItems: 'center' 
    },
    modalIcerik: { 
      width: 300, backgroundColor: 'white', borderRadius: 12, padding: 20 
    },
    baslik: { 
      fontSize: 16, marginTop: 10, marginBottom: 5 
    },
    label: {
      marginTop: 10,
      fontWeight: 'bold'
    },
    dropdown: { 
      height: 45, borderColor: '#999', borderWidth: 1, borderRadius: 8, paddingHorizontal: 10 
    },
    pickerContainer: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      marginTop: 5
    },
    picker: {
      height: 40,
      width: '100%'
    },
    input: { 
      borderWidth: 1, borderColor: '#999', borderRadius: 8, padding: 10, height: 45, marginTop: 5 
    },
    dugmeAlani: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20
    },
    buton: {
      padding: 10,
      borderRadius: 8,
      width: '48%',
      alignItems: 'center'
    },
    butonYazi: {
      color: 'white',
      fontWeight: 'bold'
    },
    kaydetButonu: {
    backgroundColor: '#1976d2', marginTop: 25, padding: 12, borderRadius: 8, alignItems: 'center'
    },
    kapatYazi: { 
      color: 'white', fontWeight: 'bold' 
    },
     satirStil : {
      flexDirection: 'row',
      width: '100%',
      minHeight: 70,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      alignItems: 'center',
      padding: 12,
      justifyContent: 'space-between',
      marginBottom: 10,
      backgroundColor: '#f9f9f9'
    },
    metinStil : {
      fontSize: 16,
      color: '#333',
      flex: 1,
      flexShrink: 1,
      marginRight: 10
    },
    butonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between', 
      gap: 10, 
      marginTop: 0,
      paddingHorizontal: 20,
    },
    buttonHesapla: {
      backgroundColor: '#1976d2',
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 8,
    },
    textHesapla: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
    },
    butonTemizle: {
      backgroundColor: '#d32f2f',
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 8,
    },
    textTemizle: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
    },

});