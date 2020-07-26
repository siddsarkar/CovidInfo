import React from 'react'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'
import Pie from 'react-native-pie'

const PieChartExample = () => {
    return (
        <View style={styles.container}>
            <View
                style={{
                    paddingVertical: 15,
                    flexDirection: 'row',
                    width: 350,
                    justifyContent: 'space-between',
                }}
            >
                <Pie
                    radius={80}
                    sections={[
                        {
                            percentage: 10,
                            color: '#C70039',
                        },
                        {
                            percentage: 20,
                            color: '#44CD40',
                        },
                        {
                            percentage: 30,
                            color: '#404FCD',
                        },
                        {
                            percentage: 40,
                            color: '#EBD22F',
                        },
                    ]}
                    strokeCap={'butt'}
                />
                <Pie
                    radius={80}
                    innerRadius={50}
                    sections={[
                        {
                            percentage: 10,
                            color: '#C70039',
                        },
                        {
                            percentage: 20,
                            color: '#44CD40',
                        },
                        {
                            percentage: 30,
                            color: '#404FCD',
                        },
                        {
                            percentage: 40,
                            color: '#EBD22F',
                        },
                    ]}
                    strokeCap={'butt'}
                />
            </View>
            <View
                style={{
                    paddingVertical: 15,
                    flexDirection: 'row',
                    width: 350,
                    justifyContent: 'space-between',
                }}
            >
                <Pie
                    radius={80}
                    innerRadius={60}
                    sections={[
                        {
                            percentage: 10,
                            color: '#C70039',
                        },
                        {
                            percentage: 20,
                            color: '#44CD40',
                        },
                        {
                            percentage: 30,
                            color: '#404FCD',
                        },
                        {
                            percentage: 40,
                            color: '#EBD22F',
                        },
                    ]}
                    dividerSize={4}
                    strokeCap={'round'}
                />
                <Pie
                    radius={80}
                    innerRadius={60}
                    sections={[
                        {
                            percentage: 10,
                            color: '#C70039',
                        },
                        {
                            percentage: 20,
                            color: '#44CD40',
                        },
                        {
                            percentage: 30,
                            color: '#404FCD',
                        },
                        {
                            percentage: 40,
                            color: '#EBD22F',
                        },
                    ]}
                    dividerSize={6}
                    strokeCap={'butt'}
                />
            </View>
            <View
                style={{
                    paddingVertical: 15,
                    width: 350,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <Pie
                    radius={80}
                    sections={[
                        {
                            percentage: 10,
                            color: '#C70039',
                        },
                        {
                            percentage: 20,
                            color: '#44CD40',
                        },
                        {
                            percentage: 30,
                            color: '#404FCD',
                        },
                        {
                            percentage: 40,
                            color: '#EBD22F',
                        },
                    ]}
                    dividerSize={6}
                    strokeCap={'butt'}
                />
                <View style={{ width: 175, alignItems: 'center' }}>
                    <Pie
                        radius={80}
                        innerRadius={75}
                        sections={[
                            {
                                percentage: 60,
                                color: '#f00',
                            },
                        ]}
                        backgroundColor="#ddd"
                    />
                    <View
                        style={styles.gauge}
                    >
                        <Text
                            style={styles.gaugeText}
                        >
                            60%
                </Text>
                    </View>
                </View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: { alignItems: 'center', justifyContent: 'center', height: 1050 },
    gauge: {
        position: 'absolute',
        width: 100,
        height: 160,
        alignItems: 'center',
        justifyContent: 'center',
    },
    gaugeText: {
        backgroundColor: 'transparent',
        color: '#000',
        fontSize: 24,
    },
})

export default PieChartExample;