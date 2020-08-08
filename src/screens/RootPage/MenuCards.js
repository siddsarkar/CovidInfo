import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-elements';
import { material } from 'react-native-typography';

const MenuCards = ({ navigation }) => {
  return (
    <>
      <View style={{ flexDirection: 'row', height: 95, marginBottom: 10 }}>
        <TouchableOpacity
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
        <TouchableOpacity
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
            GLOBAL
          </Text>
          <Text
            style={{
              position: 'absolute',
              bottom: 0,
              left: 5,
              ...material.display2White,
            }}>
            STATS
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', height: 95, marginBottom: 10 }}>
        <TouchableOpacity
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
        <TouchableOpacity
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
        <TouchableOpacity
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
        <TouchableOpacity
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
        <TouchableOpacity
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
                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
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
        <TouchableOpacity
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
            <Icon name="chevron-forward" size={30} color="#576574" />
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default MenuCards;
