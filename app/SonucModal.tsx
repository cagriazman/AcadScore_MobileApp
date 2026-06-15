import React, { useState,useContext } from 'react';
import { KayitContext } from './KayitContext';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

type Props = {
  visible: boolean;
  onClose: () => void;
  sonuc: {
    detayliPuanlar: { [key: string]: number };
    nihaiPuan: number;
    oran: number;
    odemeTutari: number;
    
  };
};


const sayfaIsimleri: { [key: string]: string } = {
  sayfa1: 'Proje',
  sayfa2: 'Araştırma',
  sayfa3: 'Yayın',
  sayfa5: 'Tasarım',
  sayfa6: 'Sergi',
  sayfa7: 'Patent',
  sayfa8: 'Atıf',
  sayfa9: 'Tebliğ',
  sayfa10: 'Ödül',
};

const SonucModal: React.FC<Props> = ({ visible, onClose, sonuc }) => {
  const [hepsiniGoster, setHepsiniGoster] = useState(false);
  const { tumKayitlariSil } = useContext(KayitContext);

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.box}>
          <Text style={styles.title}>Akademik Teşvik Sonucu</Text>

          <View style={{
  marginTop: 10,
  marginBottom: 10,
  padding: 15,
  borderRadius: 10,
  backgroundColor: 'rgba(76, 175, 80, 0.3)', 
  width: '80%',
  alignItems: 'center',
  left:30
}}>
  <Text style={{fontSize: 18, fontWeight: 'bold',color:'#4caf50'}}>
    Toplam Ödeme: {sonuc.odemeTutari}
  </Text>
</View>


          <Text style={styles.text}>Toplam Puan(limit): {sonuc.nihaiPuan}</Text>
          {/*<Text style={[styles.text,{borderWidth:0.5}]}>Ödeme Tutarı: ₺{sonuc.odemeTutari}</Text>*/}

          <TouchableOpacity onPress={() => setHepsiniGoster(!hepsiniGoster)}>
            <Text style={styles.showAllButton}>
              {hepsiniGoster ? 'Puanları Gizle' : 'Tüm Sayfa Puanlarını Göster'}
            </Text>
          </TouchableOpacity>

          {hepsiniGoster && (
            <ScrollView style={styles.scrollArea}>
              {Object.entries(sonuc.detayliPuanlar).map(([sayfaKey, puan]) => (
                <View key={sayfaKey} style={styles.puanCard}>
                  <Text style={styles.cardTitle}>{sayfaIsimleri[sayfaKey] || sayfaKey}</Text>
                  <Text style={styles.cardValue}>{puan.toFixed(2)} puan</Text>
                </View>
              ))}
            </ScrollView>
          )}
          <TouchableOpacity style={styles.temizleButton} onPress={() => {tumKayitlariSil();onClose();}}>
            <Text style={styles.temizleText}>Tüm Seçenekleri Temizle</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.btnText}>Kapat</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1, backgroundColor: '#00000088',
    justifyContent: 'center', alignItems: 'center',
    
  },
  box: {
    backgroundColor: '#fff',
    width: '90%',
    maxHeight: '90%',
    padding: 20,
    borderRadius: 12,
    
  },
  title: {
    fontSize: 20, fontWeight: 'bold', marginBottom: 10, textAlign: 'center',
  },
  text: {
    fontSize: 16, marginVertical: 4,textAlign: 'center',
  },
  showAllButton: {
    color: '#1976d2',
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
  },
  scrollArea: {
    maxHeight: 250,
    marginTop: 10,
    marginBottom: 10,
  },
  puanCard: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#f9f9f9',
  },
  cardTitle: {
    fontWeight: '600',
    fontSize: 15,
  },
  cardValue: {
    fontSize: 14,
    color: '#444',
  },
  button: {
    marginTop: 15,
    backgroundColor: '#1976d2',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  btnText: {
    color: 'white', fontWeight: 'bold',
  },
  temizleButton: {
    marginTop: 15,
    backgroundColor: '#d32f2f',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  temizleText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SonucModal;
