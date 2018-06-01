import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Title,
  Body,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage, StyleSheet, ListView } from 'react-native';
import { Database } from '../../config';

export default class Articles extends Component {
  constructor(props) {
    super(props);
    this.catId = this.props.catId;
    this.tasksRef = Database.database().ref('/Articles');

    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state = {
      dataSource: dataSource,
    };
  }
  componentDidMount() {
    this.listenForTasks(this.tasksRef);
  }

  listenForTasks(tasksRef) {
    tasksRef.on('value', dataSnapshot => {
      const tasks = [];
      dataSnapshot.forEach(child => {
        if (child.val().catId == this.catId) {
          tasks.push({
            title: child.val().title,
            key: child.key,
          });
        }
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(tasks),
      });
    });
  }

  renderRow(rowItem) {
    return (
      <Text
        style={styles.text}
        onPress={() => Actions.ArticlesRead({ _id: rowItem.key })}
      >
        {rowItem.title}
      </Text>
    );
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Унших</Title>
          </Body>
        </Header>
        <Content>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
          />
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    paddingLeft: 5,
    paddingTop: 8,
    justifyContent: 'center',
    height: 40,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    fontSize: 18,
  },
});
