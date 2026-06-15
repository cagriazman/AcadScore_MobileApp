import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Link, usePathname } from 'expo-router';

const sayfalar = [
  { isim: 'Sayfa1', numara: 1, baslik: 'Alan&Unvan' },
  { isim: 'Sayfa2', numara: 2, baslik: '1.Proje' },
  { isim: 'Sayfa3', numara: 3, baslik: '2.Araştırma' },
  { isim: 'Sayfa4', numara: 4, baslik: '3.Yayın' },
  { isim: 'Sayfa5', numara: 5, baslik: '4.Tasarım' },
  { isim: 'Sayfa6', numara: 6, baslik: '5.Sergi' },
  { isim: 'Sayfa7', numara: 7, baslik: '6.Patent' },
  { isim: 'Sayfa8', numara: 8, baslik: '7.Atıf' },
  { isim: 'Sayfa9', numara: 9, baslik: '8.Tebliğ' },
  { isim: 'Sayfa10', numara: 10, baslik: '9.Ödül' },
];

const SayfaButonlari = () => {
  const aktifPath = usePathname(); 

  return (
    <View
      style={{
        paddingVertical: 10,
        backgroundColor: '#e3f2fd', 
        borderRadius: 20,
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 3, 
      }}
    >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      >
        {sayfalar.map((sayfa, index) => {
          const aktifMi = aktifPath.includes(sayfa.isim);

          return (
            <Link key={index} href={`./${sayfa.isim}`} asChild>
              <TouchableOpacity
                style={{
                  paddingVertical: 8,
                  paddingHorizontal: 12,
                  backgroundColor: aktifMi ? '#4caf50' : '#ffffff',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 12,
                  marginRight: 8,
                  minWidth: 90,
                  borderWidth: aktifMi ? 0 : 1,
                  borderColor: '#ccc',
                }}
              >
                <Text style={{ fontWeight: 'bold', fontSize: 12, color: aktifMi ? '#fff' : '#000' }}>
                   {sayfa.baslik}
                </Text>
              </TouchableOpacity>
            </Link>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default SayfaButonlari;
