import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  StyleSheet,
} from 'react-native';
import SketchDraw from 'react-native-sketch-draw';
import Zurlag from '../../letters/zurlag';

const SketchDrawConstants = SketchDraw.constants;

const tools = {};

tools[SketchDrawConstants.toolType.pen.id] = {
  id: SketchDrawConstants.toolType.pen.id,
  name: SketchDrawConstants.toolType.pen.name,
  nextId: SketchDrawConstants.toolType.eraser.id,
};
tools[SketchDrawConstants.toolType.eraser.id] = {
  id: SketchDrawConstants.toolType.eraser.id,
  name: SketchDrawConstants.toolType.eraser.name,
  nextId: SketchDrawConstants.toolType.pen.id,
};
export default class Draw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '#FFFFFF',
      toolSelected: SketchDrawConstants.toolType.pen.id,
    };
  }

  isEraserToolSelected() {
    return this.state.toolSelected === SketchDrawConstants.toolType.eraser.id;
  }

  toolChangeClick() {
    this.setState({ toolSelected: tools[this.state.toolSelected].nextId });
  }

  getToolName() {
    return tools[this.state.toolSelected].name;
  }

  onSketchSave(saveEvent) {
    this.props.onSave && this.props.onSave(saveEvent);
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <SketchDraw
          style={{ flex: 1, backgroundColor: 'white' }}
          ref="sketchRef"
          selectedTool={this.state.toolSelected}
          toolColor={'#FFFA38'} //Yelow Example! you can changIT!
          toolSize={16}
          onSaveSketch={this.onSketchSave.bind(this)}
          localSourceImagePath={this.props.localSourceImagePath}
        />
        <Image source={Zurlag[1].zuraga} style={styles.backgroundImage} />

        <View style={{ flexDirection: 'row', backgroundColor: '#EEE' }}>
          <TouchableHighlight
            underlayColor={'#CCC'}
            style={{ flex: 1, alignItems: 'center', paddingVertical: 20 }}
            onPress={() => {
              this.refs.sketchRef.clearSketch();
            }}
          >
            <Text style={{ color: '#888', fontWeight: '600' }}>CLEAR</Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor={'#CCC'}
            style={{
              flex: 1,
              alignItems: 'center',
              paddingVertical: 20,
              borderLeftWidth: 1,
              borderRightWidth: 1,
              borderColor: '#DDD',
            }}
            onPress={() => {
              this.refs.sketchRef.saveSketch();
            }}
          >
            <Text style={{ color: '#888', fontWeight: '600' }}>SAVE</Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor={'#CCC'}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: this.isEraserToolSelected()
                ? '#CCC'
                : 'rgba(0,0,0,0)',
            }}
            onPress={this.toolChangeClick.bind(this)}
          >
            <Text style={{ color: '#888', fontWeight: '600' }}>ERASER</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
});
