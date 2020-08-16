// https://newsapi.org/v2/top-headlines?country=in&apiKey=d1a2290192fa42ed85d67ee17caffc4f
import React, { Component } from 'react';
import {
  View,
  ScrollView,
  ActivityIndicator,
  ImageBackground,
  RefreshControl,
  Switch,
} from 'react-native';
import { Button, Card, Text, Divider } from 'react-native-elements';
import { material } from 'react-native-typography';
export default class NewsCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardloading: true,
      news: [],
      isLocal: true,
      refreshing: false,
    };
  }

  componentDidMount = () => {
    this.makeRequest();
  };

  makeRequest = () => {
    this.setState(this.setState({ cardloading: true, news: [] }), async () => {
      const res = await fetch(
        'https://newsapi.org/v2/top-headlines?' +
          // 'q=coronavirus&' +
          'country=in&' +
          'apiKey=d1a2290192fa42ed85d67ee17caffc4f',
      );
      const data = await res.json();
      const newdata = data.articles;
      this.setState({ news: newdata, cardloading: false });
    });
  };
  makeRequestGlobalNews = () => {
    this.setState(this.setState({ cardloading: true, news: [] }), async () => {
      const res = await fetch(
        'https://newsapi.org/v2/everything?' +
          'q=coronavirus&' +
          'from=2020-08-07&' +
          'sortBy=popularity&' +
          'apiKey=d1a2290192fa42ed85d67ee17caffc4f',
      );
      const data = await res.json();
      const newdata = data.articles;
      this.setState({ news: newdata, cardloading: false });
    });
  };
  switchHandler = () => {
    if (this.state.isLocal) {
      this.setState(this.setState({ isLocal: false }), () =>
        this.makeRequestGlobalNews(),
      );
    } else if (this.state.isLocal == false) {
      this.setState(this.setState({ isLocal: true }), () => this.makeRequest());
    }
  };
  render() {
    return (
      <>
        <View
          style={{
            backgroundColor: '#fff',
            padding: 5,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}>
          <Text style={material.body2}>GLOBAL</Text>
          <Switch
            style={{ marginHorizontal: 5 }}
            trackColor={{ false: '#708090', true: '#81b0ff' }}
            thumbColor={this.state.isLocal ? '#191970' : '#2F4F4F'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => this.switchHandler()}
            value={this.state.isLocal}
          />
          <Text style={material.body2}>LOCAL</Text>
        </View>
        {this.state.cardloading ? (
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#000" />
          </View>
        ) : (
          <ScrollView
            style={{ marginHorizontal: 10 }}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={() =>
                  this.state.isLocal
                    ? this.makeRequest()
                    : this.makeRequestGlobalNews()
                }
              />
            }>
            {this.state.news.map((item) => (
              <View key={item.url} style={{ padding: 10 }}>
                <Card
                  containerStyle={{
                    backgroundColor: '#DCDCDC',
                    borderWidth: 0,

                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                    margin: 0,
                    padding: 0,
                  }}>
                  <ImageBackground
                    style={{
                      top: 0,

                      left: 0,
                      height: 150,
                      width: '100%',
                    }}
                    source={{ uri: `${item.urlToImage}` }}
                  />
                  <View style={{ padding: 10 }}>
                    <Text style={material.caption}>{item.publishedAt}</Text>
                    <Text style={material.headline}>{item.title}</Text>
                    <Divider style={{ marginVertical: 5 }} />

                    <Text style={material.body1}>{item.content}</Text>
                    <Button
                      onPress={() =>
                        this.props.navigation.push('article', { url: item.url })
                      }
                      buttonStyle={{
                        width: '100%',
                        marginTop: 10,
                      }}
                      title="READ NOW"
                    />
                  </View>
                </Card>
              </View>
            ))}
          </ScrollView>
        )}
      </>
    );
  }
}
