import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext, useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import SayfaButonlari from './SayfaButonlari';
import { KayitContext } from './KayitContext';
import { SafeAreaView } from 'react-native-safe-area-context';

const Sayfa1 = () => {
  
//https://mevzuat.gov.tr/mevzuat?MevzuatNo=201811834&MevzuatTur=21&MevzuatTertip=5

  const { alan, setAlan, unvan, setUnvan } = useContext(KayitContext);

  const unvanData = [
    { label: 'Profesör', value: '1' },
    { label: 'Doçent', value: '2' },
    { label: 'Doktor Öğretim Üyesi', value: '3' },
    { label: 'Araştırma Görevlisi', value: '4' },
    { label: 'Öğretim Görevlisi', value: '5' },
  ];

  const alanData = [
    { label: 'A1', value: '1' },
    { label: 'A2', value: '2' },
    { label: 'A3', value: '3' },
    { label: 'A4', value: '4' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tablo}>
        <Text style={styles.baslik}>Alanlar</Text>
        <Text style={styles.aciklama}>A1: Eğitim Bilimleri, Fen Bilimleri ve Matematik, Mühendislik, Sağlık Bilimleri, Ziraat, Orman ve Su Ürünleri</Text>
        <Text style={styles.aciklama}>A2: Filoloji, Hukuk, İlahiyat, Sosyal, Beşeri ve İdari Bilimler, Spor Bilimleri</Text>
        <Text style={styles.aciklama}>A3: Mimarlık, Planlama ve Tasarım</Text>
        <Text style={styles.aciklama}>A4: Güzel Sanatlar</Text>
      </View>

      <View style={styles.updatecontainer}>
        <Text style={styles.guncellemeText}>
          <Text style={{ fontWeight: 'bold' }}>Güncelleme Tarihi:</Text> 20/01/25
        </Text>
      </View>

      <View style={styles.dropdownContainer}>
        <Text style={styles.dropdownLabel}>Unvan:</Text>
        <Dropdown
          style={styles.dropdown}
          data={unvanData}
          maxHeight={250}
          labelField="label"
          valueField="value"
          placeholder="Unvan Seçiniz"
          value={unvan}
          onChange={item => setUnvan(item.value)}
          selectedTextStyle={styles.selectedTextStyle}
        />
      </View>

      <View style={styles.dropdownContainer}>
        <Text style={styles.dropdownLabel}>Alan:</Text>
        <Dropdown
          style={styles.dropdown}
          data={alanData}
          labelField="label"
          valueField="value"
          placeholder="Alan Seçiniz"
          value={alan}
          onChange={item => setAlan(item.value)}
          selectedTextStyle={styles.selectedTextStyle}
        />
      </View>
      { 
      /* //<View style={{ padding: 0 }}><Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 0 }}>A{alan}</Text>
      // </View> *}
      


      {/*<TouchableOpacity style={styles.kaydetButonu} onPress={handleKaydet0}>
        <Text style={styles.kaydetYazi}>Kaydet</Text>
      </TouchableOpacity>*/}

      
    </SafeAreaView>
  );
};

export default Sayfa1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  tablo: {
    backgroundColor: '#1565c0',
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
    elevation: 3,
  },
  baslik: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 12,
  },
  aciklama: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#e0e0e0',
    marginBottom: 8,
  },
  updatecontainer: {
    marginBottom: 15,
    alignItems: 'center',
  },
  guncellemeText: {
    fontSize: 16,
    color: '#444',
  },
  dropdownContainer: {
    marginBottom: 25,
  },
  dropdownLabel: {
    fontSize: 28,
    marginBottom: 8,
    fontWeight: '600',
    color: '#222',
  },
  dropdown: {
    height: 55,
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    backgroundColor: '#f9f9f9',
  },
  selectedTextStyle: {
    fontSize: 18,
    color: '#333',
  },
  kaydetButonu: {
    backgroundColor: '#1976d2',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 40,
  },
  kaydetYazi: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  sayfaButonlariWrapper: {
    position: 'absolute',
    bottom: 15,
    left: 0,
    right: 0,
  },
});
