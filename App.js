import { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numero: 0,
      btnIniciar: 'INICIAR',
      ultimo: null
    }

    this.timer = null
    this.iniciar = this.iniciar.bind(this)
    this.limpar = this.limpar.bind(this)

  }

  iniciar() {
    if (this.timer != null) {
      clearInterval(this.timer)
      this.timer = null
      this.setState({ btnIniciar: 'INICIAR' })
    } else {
      this.timer = setInterval(() => {
        this.setState({ numero: this.state.numero + 0.1 })
      }, 100)

      this.setState({ btnIniciar: 'PAUSAR' })
    }
  }

  limpar() {
    // if (this.timer != null) {
    clearInterval(this.timer)
    this.timer = null
    this.setState({
      ultimo: this.state.numero,
      btnIniciar: 'INICIAR',
      numero: 0,

    })
    // }
  }

  render() {
    return (
      <View style={styles.container} >
        <Image source={require('./src/image/cronometro.png')} style={styles.image} />
        <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.botao} onPress={this.iniciar}>
            <Text style={styles.btnTexto}>{this.state.btnIniciar}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={this.limpar}>
            <Text style={styles.btnTexto}>LIMPAR</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.areaUltimo}>
          <Text style={styles.textoUltimo}>{this.state.ultimo > 0 ? 'Ultimo tempo: ' + this.state.ultimo.toFixed(2) : ''}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3c4b64',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {

  },
  timer: {
    marginTop: -160,
    color: '#fff',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  botao: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3c4b64'
  },
  areaUltimo: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  textoUltimo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
});

export default App