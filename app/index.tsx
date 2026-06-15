import React, { useState } from 'react';
import { KayitProvider } from './KayitContext';
import Sayfa1 from './Sayfa1';
import Sayfa2 from './Sayfa2';
import Sayfa3 from './Sayfa3';
import Sayfa4 from './Sayfa4';
import Sayfa5 from './Sayfa5';
import Sayfa6 from './Sayfa6';
import Sayfa7 from './Sayfa7';
import Sayfa8 from './Sayfa8';
import Sayfa9 from './Sayfa9';
import Sayfa10 from './Sayfa10';
import { Button, View, ScrollView } from 'react-native';

const Index = () => {
  const [sayfa, setSayfa] = useState(1);

  return (
    <KayitProvider>
      {/* Sayfa değiştirme butonları yatay scrollView içinde */}
      

      {/* Seçilen sayfa */}
      {sayfa === 1 && <Sayfa1 />}
      {sayfa === 2 && <Sayfa2 />}
      {sayfa === 3 && <Sayfa3 />}
      {sayfa === 4 && <Sayfa4 />}
      {sayfa === 5 && <Sayfa5 />}
      {sayfa === 6 && <Sayfa6 />}
      {sayfa === 7 && <Sayfa7 />}
      {sayfa === 8 && <Sayfa8 />}
      {sayfa === 9 && <Sayfa9 />}
      {sayfa === 10 && <Sayfa10 />}
    </KayitProvider>
  );
};

export default Index;
