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
import ScratchsAbout from './ScratchsAbout';
import ScratchDraw from './ScratchDraw';

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
          <Tab
            heading={
              <TabHeading>
                <Text>Тухай</Text>
              </TabHeading>
            }
          >
            <ScratchsAbout item={item} />
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Text>Зурах</Text>
              </TabHeading>
            }
          >
            <ScratchDraw image={item.zuraga} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default ScratchTabs;
