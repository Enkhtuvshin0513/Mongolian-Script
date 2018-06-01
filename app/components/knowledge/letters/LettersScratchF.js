import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  ImageBackground,
  Image
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Button,
  Body,
  Title,
  Thumbnail
} from 'native-base';
import PropTypes from 'prop-types';

import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';

export default class ScratchDraw extends Component {
  render() {
    const image = this.props.image;

    return (
      <Container style={styles.Container}>
        <Content>
          <View style={styles.container}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <ImageBackground
                source={image}
                style={{
                  flex: 1,
                  width: 300,
                  height: 400,
                  resizeMode: 'contain'
                }}
              >
                <RNSketchCanvas
                  containerStyle={{ backgroundColor: 'transparent', flex: 1 }}
                  canvasStyle={{ backgroundColor: 'transparent', flex: 1 }}
                  defaultStrokeIndex={0}
                  defaultStrokeWidth={50}
                  clearComponent={
                    <View style={styles.functionButton}>
                      <Text style={{ color: 'white' }}>Цэвэрлэх</Text>
                    </View>
                  }
                />
              </ImageBackground>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  View: {
    width: '100%'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },

  functionButton: {
    marginHorizontal: 2.5,
    marginVertical: 8,
    height: 30,
    width: 80,
    backgroundColor: '#39579A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  }
});

ScratchDraw.propTypes = {
  image: PropTypes.string
};
