/*
-Müşteri bir profil sayfası istemektedir. 
-Profil sayfasi isim, soyisim, yas, cinsiyet, calisma gecmisi, egitim gecmisi,hobiler gibi kisisel bilgiler icermelidir. 
-Bu bilgiler component dosyasında yapılmalıdır.
-ikonlar ve resim component dosyasında olmalı.
-profil.js dosyası açılıp componentler import edilmeli.
-daha sonra App.js dosyasında profil.js import edilip, program çalıştırılacak.
*/

import './App.css';
import React from 'react';
import Main from './component/profil';

function App() {
    return ( 
        <div className = "App" >
        <header className = "App-header">
        <Main/>
        </header> 
        </div>
    );
}

export default App;
