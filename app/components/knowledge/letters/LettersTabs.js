import React, { Component } from 'react';
import {
  Container,
  Header,
  Tab,
  Tabs,
  TabHeading,
  Icon,
  Text,
  Title,
  Body
} from 'native-base';
import LettersAbout from './LettersAbout';
import LettersScratchF from './LettersScratchF';

class ScratchTabs extends Component {
  render() {
    const item = this.props.item;
    return (
      <Container>
        <Header hasTabs>
          <Body>
            <Title>{item.title}</Title>
          </Body>
        </Header>
        <Tabs>
          {/* <Tab
            heading={
              <TabHeading>
                <Text>Тухай</Text>
              </TabHeading>
            }
          >
            <LettersAbout item={item} />
          </Tab> */}
          <Tab
            heading={
              <TabHeading>
                <Text>Эхэнд</Text>
              </TabHeading>
            }
          >
            <LettersScratchF image={item.first} />
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Text>Дунд</Text>
              </TabHeading>
            }
          >
            <LettersScratchF image={item.middle} />
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Text>Адагт</Text>
              </TabHeading>
            }
          >
            <LettersScratchF image={item.last} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default ScratchTabs;
