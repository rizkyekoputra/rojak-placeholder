import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Coming Soon! Kawal Media ID!</h1>
        </header>
        <p className="App-intro">
            Project kawalmedia.id adalah sebuah non-profit project untuk membantu jalannya proses pemilihan umum baik itu pilkada atau pilpres dalam hal pengawasan media daring (online). Dengan mengusung nilai-nilai kerelawanan, kolaborasi, transparansi dan objektivitas kami berharap mampu menjadi pusat informasi alternatif bagi para pemilih dan membantu mengurangi gesekan yang timbul saat musim pemilu.
        </p>
        <p className="App-intro">
            Dengan bantuan kawalmedia.id masyarakat dapat mengetahui bagaimana sentiment setiap media terhadap kandidat, bagaimana trend politik menghadapi pilkada dan pilpres di Indonesia dari hari ke hari berdasarkan data seluruh media daring di Indonesia, kandidat mana yang paling banyak di bahas oleh media dan lain-lain.
        </p>
      </div>
    );
  }
}

export default App;
