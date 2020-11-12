/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const saluda = (nombre, apellido) => {
  return (
    <View>
      <Text>Hola mundo</Text>
      <Text>Soy {nombre} {apellido}</Text>
    </View>
  )

}



class App extends Component {
  render() {
    return (
      <View style={styles.fondo}>
        <View style={styles.titulo}>
          <Image source={{ uri: 'https://i.ibb.co/cgx8yH1/logo.png' }}
            style={{ width: 'auto', height: 100 }} />
        </View>
        <View style={styles.partidos}>
          <View style={styles.seccion}>
            <View>
              <Text style={styles.seccio4}>Madrid VS Barcelona</Text>
              <Text style={styles.seccio4}>    12/10/2020    </Text>
              <Text style={styles.seccio4}>          21:00          </Text>
            </View>
          </View>
          <View style={styles.seccion}>
          <Text style={styles.seccio4}>Valencia VS Levante</Text>
              <Text style={styles.seccio4}>    14/10/2020    </Text>
              <Text style={styles.seccio4}>          13:00          </Text>
          </View>
          <View style={styles.seccion}>
          <Text style={styles.seccio4}>Getafe VS Sevilla</Text>
              <Text style={styles.seccio4}>    16/10/2020    </Text>
              <Text style={styles.seccio4}>          22:00          </Text>
          </View>
        </View>
      </View>
    );
  }
}




const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#009933',
    borderWidth: 5,
  },
  titulo: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#009933',
    borderWidth: 15,
    borderColor: '#009933'
  },
  partidos: {
    flex: 6,
    flexDirection: 'column',
    backgroundColor: 'black',
    borderWidth: 15,
    borderColor: '#009933'
  },
  seccion: {
    /*flex: 1,
    borderColor: 'transparent',
    backgroundColor: '#006622',
    borderWidth: 5,
    fontSize: 12,
    fontWeight: '600',
    margin: 4,
    padding: 12,
    textAlign: 'right',*/
    flex: 1,
    borderWidth: 5,
    backgroundColor: '#006622',

  },
  seccio2: {
    flex: 1,
    borderColor: 'transparent',
    borderWidth: 3,
    fontSize: 12,
    fontWeight: '600',
  },
  seccio3: {
    borderColor: 'transparent',
    backgroundColor: '#009933',
    color: 'white',
    borderWidth: 5,
    fontSize: 20,
    textAlign: 'center'
  },
  seccio4: {
    borderColor: 'transparent',
    backgroundColor: '#009933',
    color: 'white',
    borderWidth: 5,
    fontSize: 20,
    margin: 5,
    textAlign: 'center',
    justifyContent: 'flex-end'
  },
  fechaHora: {
    marginTop: '30%'
  }
});

/*
<View style={styles.seccio1}>
          <View style={styles.seccio2}>
            <Text style={styles.seccio3}>Madrid VS Barcelona</Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text style={styles.seccio4}>    12/10/2020    </Text>
            <Text style={styles.seccio4}>          21:00          </Text>
          </View>
        </View>
*/

/*
<View style={styles.seccion}>
          <View style={styles.seccio2}>
            <Text style={styles.seccio3}>Valencia VS Levante</Text>
            <View style={styles.fechaHora}>
              <Text style={styles.seccio4}>12/20/2020</Text>
              <Text style={styles.seccio4}>15:00</Text>
            </View>
            <View>
            <Image source={{ uri: 'https://i.ibb.co/cgx8yH1/logo.png' }} 
        style={{ width: 'auto', height: 100 }}/>
            </View>
          </View>
        </View>
*/
export default App;
