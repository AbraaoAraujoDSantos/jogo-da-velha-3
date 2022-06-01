import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function Jogo() {

  const [tela, setTela] = useState('menu');
  const [jogadorAtual, setJogadorAtual] = useState('');
  const [tabuleiro, setTabuleiro] = useState([]);
  const [jogadasRestantes, setJogadasRestantes] = useState(0);
  const [ganhador, setGanhandor] = useState('');

  function inciarJogo(jogador) {
    setJogadorAtual(jogador);
    setJogadasRestantes(9);
    setTabuleiro([
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ])
    setTela('jogo');
  }

  function jogar(linha, coluna) {
    tabuleiro[linha][coluna] = jogadorAtual;
    setTabuleiro([...tabuleiro]);

    setJogadorAtual(jogadorAtual === 'X' ? 'O' : 'X');

    verificarGanhador(tabuleiro, linha, coluna);

  }

  function verificarGanhador(tabuleiro, linha, coluna) {

    let linha_h1 = tabuleiro[0][0] !== '' && tabuleiro[0][0] === tabuleiro[0][1] && tabuleiro[0][1] === tabuleiro[0][2]

    let linha_h2 = tabuleiro[2][0] !== '' && tabuleiro[2][0] === tabuleiro[2][1] && tabuleiro[2][1] === tabuleiro[2][2]

    let linha_h3 = tabuleiro[1][0] !== '' && tabuleiro[1][0] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[1][2]

    let linha_v1 = tabuleiro[0][0] !== '' && tabuleiro[0][0] === tabuleiro[1][0] && tabuleiro[1][0] === tabuleiro[2][0]

    let linha_v2 = tabuleiro[0][1] !== '' && tabuleiro[0][1] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][1]

    let linha_v3 = tabuleiro[0][2] !== '' && tabuleiro[0][2] === tabuleiro[1][2] && tabuleiro[1][2] === tabuleiro[2][2]

    let linha_x1 = tabuleiro[0][0] !== '' && tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][2]

    let linha_x2 = tabuleiro[0][2] !== '' && tabuleiro[0][2] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][0]

    if (linha_h1 === true) {
      return finalizarJogo(tabuleiro[0][0])
    }
    else if (linha_h2 === true) {
      return finalizarJogo(tabuleiro[2][0])
    }
    else if (linha_h3 === true) {
      return finalizarJogo(tabuleiro[1][0])
    }
    else if (linha_v1 === true) {
      return finalizarJogo(tabuleiro[0][0])
    }
    else if (linha_v2 === true) {
      return finalizarJogo(tabuleiro[0][1])
    }
    else if (linha_v3 === true) {
      return finalizarJogo(tabuleiro[0][2])
    }
    else if (linha_x1 === true) {
      return finalizarJogo(tabuleiro[0][0])
    }
    else if (linha_x2 === true) {
      return finalizarJogo(tabuleiro[0][2])
    }

    /*
    // linha horizontal 1 (cima)
     if (tabuleiro[0][0] !== '' && tabuleiro[0][0] === tabuleiro[0][1] && tabuleiro[0][1] === tabuleiro[0][2]) {
      return finalizarJogo(tabuleiro[0][0])
    }
    
    //linha horizontal 2 (baixo)
    if (tabuleiro[2][0] !== '' && tabuleiro[2][0] === tabuleiro[2][1] && tabuleiro[2][1] === tabuleiro[2][2]) {
      return finalizarJogo(tabuleiro[2][0])
    }
    
    //linha horizontal 3 (meio)
    if (tabuleiro[1][0] !== '' && tabuleiro[1][0] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[1][2]) {
      return finalizarJogo(tabuleiro[1][0])
    }
    
    //linha vertical 1
    if (tabuleiro[0][0] !== '' && tabuleiro[0][0] === tabuleiro[1][0] && tabuleiro[1][0] === tabuleiro[0][0]) {
      return finalizarJogo(tabuleiro[0][0])
     }
    
    //linha vertical 2
    if (tabuleiro[0][1] !== '' && tabuleiro[0][1] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][1]) {
      return finalizarJogo(tabuleiro[0][1])
     }
    
    //linha vertical 3
    if (tabuleiro[0][2] !== '' && tabuleiro[0][2] === tabuleiro[1][2] && tabuleiro[1][2] === tabuleiro[2][2]) {
      return finalizarJogo(tabuleiro[0][2])
     }
    
     /*   if (tabuleiro[linha][0] !== '' && tabuleiro[linha][0] === tabuleiro[linha][1] === tabuleiro[linha][2]){
          return finalizarJogo(tabuleiro[linha][0]);
        }
        if (tabuleiro[0][coluna] !== '' && tabuleiro[0][coluna] === tabuleiro[1][coluna] === tabuleiro[2][coluna]){
          return finalizarJogo(tabuleiro[0][coluna]);
        } 
        if (tabuleiro[0][0] !== '' && tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][2]) {
          return finalizarJogo(tabuleiro[0][0]);
        }
        if (tabuleiro[0][2] !== '' && tabuleiro[0][2] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][0]){
          return finalizarJogo(tabuleiro[0][2])
        } */
    if ((jogadasRestantes - 1) === 0) {
      return finalizarJogo('');
    }
    setJogadasRestantes((jogadasRestantes - 1));
  }

  function finalizarJogo(jogador) {
    setGanhandor(jogador);
    setTela('ganhador');
  }



  switch (tela) {
    case 'menu':
      return getTelaMenu();
    case 'jogo':
      return getTelajogo();
    case 'ganhador':
      return getTelaGanhador();
  }

  function getTelaMenu() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.title}>Jogo da Velha</Text>
        <Text style={styles.subtitle}>Escolha o Primeiro jogador</Text>
        <View style={styles.inLineItens}>
          <TouchableOpacity style={styles.boxJogador}
            onPress={() => inciarJogo('X')}>
            <Text style={styles.jogadorX}>X</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.boxJogador}
            onPress={() => inciarJogo('O')}>
            <Text style={styles.jogadorO}>O</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }

  function getTelajogo() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.title}>Jogo da Velha</Text>
        {
          tabuleiro.map((linha, numeroLinha) => {
            return (
              <View key={numeroLinha} style={styles.inLineItens}>
                {
                  linha.map((coluna, numeroColula) => {
                    return (
                      <TouchableOpacity key={numeroColula} style={styles.boxJogador}
                        onPress={() => jogar(numeroLinha, numeroColula)}
                        disabled={coluna !== ''}>

                        <Text style={coluna === 'X' ? styles.jogadorX : styles.jogadorO}>{coluna}</Text>
                      </TouchableOpacity>
                    )
                  })
                }
              </View>
            )
          })
        }
        <TouchableOpacity style={styles.botaoMenu}
          onPress={() => setTela('menu')}>

          <Text style={styles.textoBotaoMenu}>Voltar</Text>

        </TouchableOpacity>
      </View>
    );
  }

  function getTelaGanhador() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.title}>Jogo da Velha</Text>
        <Text style={styles.subtitle}>Resultado Final</Text>
        {
          ganhador === '' &&
          <Text style={styles.ganhador}>Nenhum ganhador!</Text>
        }

        {
          ganhador !== '' &&
          <>
            <Text style={styles.ganhador}>Ganhador!</Text>
            <View style={styles.boxJogador}>
              <Text style={ganhador === 'X' ? styles.jogadorX : styles.jogadorO}>{ganhador}</Text>

            </View>
          </>
        }
        <TouchableOpacity style={styles.botaoMenu}
          onPress={() => setTela('menu')}>
          <Text style={styles.textoBotaoMenu}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  subtitle: {
    fontSize: 20,
    color: '#ffffff',
    marginTop: 20
  },
  boxJogador: {
    width: 80,
    height: 80,
    backgroundColor: '#ffff33',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },
  jogadorX: {
    fontSize: 40,
    color: '#000000', //#7f00ff
  },
  jogadorO: {
    fontSize: 40,
    color: '#A0A0A0'
  },
  inLineItens: {
    flexDirection: 'row'
  },
  botaMenu: {
    marign: 20,
  },
  textoBotaoMenu: {
    color: '#4e6fe4',
  },
  ganhador: {
    color: '#ffffff',
  }
});
