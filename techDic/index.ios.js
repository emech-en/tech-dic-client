/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  TextInput,
  StyleSheet,
} from 'react-native';

import { StyleProvider, Form, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Badge, Picker, Item as FormItem, Label, List, ListItem, Switch } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import getTheme from './native-base-theme/components';

const PickerItem = Picker.Item;

export default class techDic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'text': null,
      'loaded': false,
      'selected2': undefined
    };
  }

  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }

  render() {
    var equivalents = [{
      'text': 'اچ تی ام ال',
      'likes': 340,
      'dislikes': 20
    }, {
      'text': 'آزمون',
      'likes': 280,
      'dislikes': 110      
    }, {
      'text': 'نرم افزار',
      'likes': 50,
      'dislikes': 20      
    }, {
      'text': 'میان سکویی',
      'likes': 20,
      'dislikes': 100
    }]
    return (    
      <StyleProvider style={getTheme()}>  
        <Container>
          <Header>
            <Left>
              <Button transparent>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Title>تک دیک</Title>
            </Body>
            <Right />
          </Header>
          <Content padder>
            <Form>
                    <Text>
                      Domain:
                    </Text>
                    <Picker
                      mode="dropdown"
                      placeholder="Please Select"
                      selectedValue={this.state.selected2}
                      onValueChange={this.onValueChange2.bind(this)}
                      style={{backgroundColor: 'red', width: '100%'}}
                    >
                      <PickerItem label="IT" value="key0" />
                      <PickerItem label="Mechanical Engineering" value="key1" />
                      <PickerItem label="Psyc" value="key2" />
                    </Picker>
                    <Text>
                      Phrase:
                    </Text>
                    <TextInput
                      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                      onChangeText={(text) => this.setState({text})}
                      value={this.state.text}
                    />
                    <Text>
                      Equivalents:
                    </Text>
                    <List dataArray={equivalents}
                      renderRow={(equivalent) =>
                        <ListItem>
                          <Left style={{width:20}}>
                            <Grid  backgroundColor={'red'}>
                            <Row>
                            <Icon name="thumbs-up" />
                            </Row>
                            <Row>
                            <Icon name="thumbs-down" />
                            </Row>
                            </Grid>
                          </Left>
                          <Body style={{width:40}}>
                            <Text>{equivalent.text}</Text>
                            <Text>asd adasd asdsa das</Text>
                          </Body>
                          <Right style={{width: 40}}>
                            <Text style={{height:30, backgroundColor:'yellow', justifyContent:'center'}}>
                              {Math.floor((equivalent.likes - equivalent.dislikes) / (equivalent.likes + equivalent.dislikes) * 100)}
                            </Text>
                          </Right>

                        </ListItem>
                      }>
                    </List>
                
            </Form>
          </Content>
          <Footer>
            <FooterTab>
              <Button badge vertical>
                <Badge><Text>2</Text></Badge>
                <Icon name="apps" />
                <Text>Feed</Text>
              </Button>
              <Button active vertical>
                <Icon name="camera" />
                <Text>Translate</Text>
              </Button>
              <Button vertical>
                <Icon name="person" />
                <Text>Profile</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  labelCol: {
    width: 2,
    paddingRight: 10,
    backgroundColor: 'blue',
    // justifyContent: 'right',
  },
  valueCol: {
    width: 5
  }
});

AppRegistry.registerComponent('techDic', () => techDic);
