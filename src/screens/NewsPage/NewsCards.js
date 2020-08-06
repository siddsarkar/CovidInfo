// https://newsapi.org/v2/top-headlines?country=in&apiKey=d1a2290192fa42ed85d67ee17caffc4f
import React, {Component} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Linking,
  ActivityIndicator,
} from 'react-native';
import {Button, Card, Text, Divider} from 'react-native-elements';

export default class NewsCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardloading: true,
      news: [],
    };
  }

  componentDidMount = async () => {
    let res = await fetch(
      'https://newsapi.org/v2/top-headlines?country=in&apiKey=d1a2290192fa42ed85d67ee17caffc4f',
    );
    let data = await res.json();
    let newdata = data.articles.slice(0, 5);
    this.setState({news: newdata, cardloading: false});
  };

  render() {
    return this.state.cardloading ? (
      <View
        style={{
          ...styles.container,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" color="red" />
      </View>
    ) : (
      <ScrollView style={styles.container} horizontal>
        {this.state.news.map((item) => {
          return (
            <View key={item.publishedAt} style={{height: 380}}>
              <Card
                containerStyle={styles.card}
                // title='HELLO WORLD'
                image={{uri: `${item.urlToImage}`}}>
                <Text style={styles.timestamp}>{item.publishedAt}</Text>
                <Text style={styles.heading}>
                  {item.title.substring(0, 30) + '...'}
                </Text>
                <Divider style={{marginVertical: 5}} />

                <Text style={styles.description}>{item.content}</Text>
                <Button
                  onPress={() => Linking.openURL(`${item.url}`)}
                  containerStyle={styles.btn}
                  buttonStyle={{
                    borderRadius: 0,
                    marginLeft: 0,
                    marginRight: 0,
                    marginBottom: 0,
                  }}
                  title="VIEW NOW"
                />
              </Card>
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 420,
  },
  card: {
    width: 300,

    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btn: {
    alignSelf: 'flex-start',
    color: '#a6dcef',
  },
  heading: {
    marginLeft: 0,
    paddingLeft: 0,
    fontSize: 20,
    fontWeight: '900',
  },
  description: {
    marginBottom: 10,
    color: 'gray',
  },
  timestamp: {
    fontSize: 11,
    color: 'teal',
  },
});
