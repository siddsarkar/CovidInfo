import { View, Text, TouchableOpacity, Linking } from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar, Divider } from 'react-native-elements';
import { material } from 'react-native-typography';

const MenuCards = ({ navigation }) => {
  const [Data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let res = await fetch('https://covid19.mathdro.id/api');
    let data = await res.json();
    setData(data);
    setIsLoading(false);
  };

  // const cured = Data.recovered.value;
  // const deaths = Data.deaths.value;
  const getWidth = (x) => {
    if (isLoading) {
      return 0;
    } else {
      if (x == 'deaths') {
        const num = Math.floor(
          (Data.deaths.value / Data.confirmed.value) * 100,
        );
        const percent = num + '%';
        return percent;
      } else if (x == 'recovered') {
        const num = Math.floor(
          (Data.recovered.value / Data.confirmed.value) * 100,
        );
        const percent = num + '%';
        return percent;
      }
    }
  };

  return (
    <>
      <View style={{ flexDirection: 'row', height: 95, marginBottom: 10 }}>
        <TouchableOpacity //LATEST NEWS
          onPress={() => navigation.push('News')}
          style={{
            backgroundColor: '#25CCF7',
            borderWidth: 0,
            borderRadius: 7,
            flex: 1,
            marginHorizontal: 12,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
          }}>
          <Icon
            style={{
              position: 'absolute',
              top: 10,
              right: 10,
            }}
            name="newspaper-outline"
            size={35}
            color="#fff"
          />
          <Text
            style={{
              ...material.captionWhite,
              left: 5,
              top: 30,
              position: 'absolute',
            }}>
            LATEST
          </Text>
          <Text
            style={{
              position: 'absolute',
              bottom: 0,
              left: 5,
              ...material.display2White,
            }}>
            NEWS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity //GLOBAL STATS
          onPress={() => navigation.push('Global')}
          style={{
            backgroundColor: '#EAB543',
            borderWidth: 0,
            borderRadius: 7,
            flex: 1,
            marginHorizontal: 12,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
          }}>
          <Icon
            style={{ position: 'absolute', top: 10, right: 10 }}
            name="stats-chart"
            size={35}
            color="#fff"
          />

          <Text
            style={{
              ...material.captionWhite,
              left: 5,
              top: 30,
              position: 'absolute',
            }}>
            LOCATION
          </Text>
          <Text
            style={{
              position: 'absolute',
              bottom: 0,
              left: 5,
              ...material.display2White,
            }}>
            INFO
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', height: 95, marginBottom: 10 }}>
        <TouchableOpacity //SAFETY TIPS
          onPress={() => navigation.push('Tips')}
          style={{
            backgroundColor: '#3B3B98',
            borderWidth: 0,
            borderRadius: 7,
            flex: 1,
            marginHorizontal: 12,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
          }}>
          <Icon
            style={{ position: 'absolute', top: 10, right: 10 }}
            name="fitness-outline"
            size={35}
            color="#fff"
          />
          <Text
            style={{
              ...material.captionWhite,
              left: 5,
              top: 30,
              position: 'absolute',
            }}>
            SAFETY
          </Text>
          <Text
            style={{
              position: 'absolute',
              bottom: 0,
              left: 5,
              ...material.display2White,
            }}>
            TIPS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity //DAYWISE CASES
          onPress={() => navigation.push('Time')}
          style={{
            backgroundColor: '#82589F',
            borderWidth: 0,
            borderRadius: 7,
            flex: 1,
            marginHorizontal: 12,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
          }}>
          <Icon
            style={{ position: 'absolute', top: 10, right: 10 }}
            name="medical"
            size={35}
            color="#fff"
          />

          <Text
            style={{
              ...material.captionWhite,
              left: 5,
              top: 30,
              position: 'absolute',
            }}>
            DAYWISE
          </Text>
          <Text
            style={{
              position: 'absolute',
              bottom: 0,
              left: 5,
              ...material.display2White,
            }}>
            CASES
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', height: 95, marginBottom: 10 }}>
        <TouchableOpacity //IMPORTANT LINKS
          onPress={() => navigation.push('Links')}
          style={{
            backgroundColor: '#BDC581',
            borderWidth: 0,
            borderRadius: 7,
            flex: 1,
            marginHorizontal: 12,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
          }}>
          <Icon
            style={{ position: 'absolute', top: 10, right: 10 }}
            name="link"
            size={35}
            color="#fff"
          />

          <Text
            style={{
              ...material.captionWhite,
              left: 5,
              top: 30,
              position: 'absolute',
            }}>
            IMPORTANT
          </Text>
          <Text
            style={{
              position: 'absolute',
              bottom: 0,
              left: 5,
              ...material.display2White,
            }}>
            LINKS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity //DATA SEARCH
          onPress={() => navigation.push('Search')}
          style={{
            backgroundColor: '#58B19F',
            borderWidth: 0,
            borderRadius: 7,
            flex: 1,
            marginHorizontal: 12,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
          }}>
          <Icon
            style={{ position: 'absolute', top: 10, right: 10 }}
            name="search"
            size={35}
            color="#fff"
          />

          <Text
            style={{
              ...material.captionWhite,
              left: 5,
              top: 30,
              position: 'absolute',
            }}>
            DATA
          </Text>
          <Text
            style={{
              position: 'absolute',
              bottom: 0,
              left: 5,
              ...material.display2White,
            }}>
            SEARCH
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', height: 95, marginTop: 15 }}>
        <TouchableOpacity // How Are You Feeling Today?
          onPress={() =>
            Linking.openURL(
              'https://www.who.int/news-room/photo-story/photo-story-detail/self-care-during-covid-19',
            )
          }
          style={{
            backgroundColor: '#2C3A47',
            borderWidth: 0,
            borderRadius: 7,
            flex: 1,
            marginHorizontal: 12,
            alignItems: 'center',
            flexDirection: 'row',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
          }}>
          <Avatar
            containerStyle={{
              backgroundColor: '#58B19F',
              margin: 15,
            }}
            size="medium"
            source={{
              uri:
                'https://www.todayshospitalist.com/wp-content/uploads/2010/06/drugseeking-300x350.jpg',
            }}
            rounded
          />
          <View style={{ width: 200, flexDirection: 'column' }}>
            <Text style={{ ...material.display1White, fontSize: 24 }}>
              How Are You
            </Text>
            <Text
              style={{
                ...material.captionWhite,
                fontSize: 16,
              }}>
              Feeling Today?
            </Text>
          </View>
          <Icon
            style={{ position: 'absolute', right: 20 }}
            name="chevron-forward"
            size={30}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', height: 300, marginTop: 25 }}>
        <TouchableOpacity //  Situation (Global)
          style={{
            backgroundColor: '#CAD3C8',
            borderWidth: 0,
            borderRadius: 7,
            flex: 1,
            marginHorizontal: 12,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
          }}>
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              paddingLeft: 20,
              justifyContent: 'space-between',
            }}>
            <Text style={{ ...material.display1, fontSize: 20 }}>
              <Text
                style={{
                  ...material.headline,
                  fontWeight: '700',
                  fontSize: 20,
                }}>
                Situation
              </Text>{' '}
              (Global)
            </Text>
            {/* <Icon name="chevron-forward" size={30} color="#576574" /> */}
          </View>
          <View style={{ marginBottom: 10 }}>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',

                padding: 5,
              }}>
              <Text style={material.subheading}>
                {' '}
                <Icon name="radio-button-on" color="green" /> Recovered
              </Text>
              <Text
                style={{
                  position: 'absolute',
                  top: 5,
                  right: 20,
                  ...material.subheading,
                }}>
                {isLoading ? null : Data.recovered.value}
              </Text>
            </View>
            <View style={{ margin: 10, marginHorizontal: 20 }}>
              <Divider
                style={{
                  backgroundColor: 'white',
                  borderRadius: 5,
                  height: 10,
                  width: '100%',
                }}>
                <Divider
                  style={{
                    backgroundColor: 'green',
                    borderRadius: 5,
                    height: 10,
                    width: getWidth('recovered'),
                  }}
                />
              </Divider>
            </View>
          </View>
          <View style={{ marginBottom: 10 }}>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',

                padding: 5,
              }}>
              <Text style={material.subheading}>
                {' '}
                <Icon name="radio-button-on" color="red" /> Deaths
              </Text>
              <Text
                style={{
                  position: 'absolute',
                  top: 5,
                  right: 20,
                  ...material.subheading,
                }}>
                {isLoading ? null : Data.deaths.value}
              </Text>
            </View>
            <View style={{ margin: 10, marginHorizontal: 20 }}>
              <Divider
                style={{
                  backgroundColor: 'white',
                  borderRadius: 5,
                  height: 10,
                  width: '100%',
                }}>
                <Divider
                  style={{
                    backgroundColor: 'red',
                    borderRadius: 5,
                    height: 10,
                    width: getWidth('deaths'),
                  }}
                />
              </Divider>
            </View>
          </View>
          <View>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',

                padding: 5,
              }}>
              <Text style={material.subheading}>
                {' '}
                <Icon name="radio-button-on" color="yellow" /> Confirmed
              </Text>
              <Text
                style={{
                  position: 'absolute',
                  top: 5,
                  right: 20,
                  ...material.subheading,
                }}>
                {isLoading ? null : Data.confirmed.value}
              </Text>
            </View>
            <View style={{ margin: 10, marginHorizontal: 20 }}>
              <Divider
                style={{
                  backgroundColor: 'white',
                  borderRadius: 5,
                  height: 10,
                  width: '100%',
                }}>
                <Divider
                  style={{
                    backgroundColor: 'yellow',
                    borderRadius: 5,
                    height: 10,
                    width: '100%',
                  }}
                />
              </Divider>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default MenuCards;
