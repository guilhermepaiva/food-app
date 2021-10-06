import React from 'react';
import { StyleSheet, Text, Button, View, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors/colors';

Feather.loadFont();
MaterialCommunityIcons.loadFont();

const Details = ( { route, navigation } ) => {

    const { item } = route.params;
    

    const renderIngredientsItem = ( { item }) => {
        return (
            <View style={styles.ingredientItemWrapper}>
                <Image source={item.image} style={styles.ingredientImage} />
            </View>
        )
    }



    return (
        <View style={styles.container}>
            
            {/* Header */}
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={styles.headerLeft}>
                            <Feather name="chevron-left" size={12} color={colors.textDark} />
                        </View>
                    </TouchableOpacity>

                    <View style={styles.headerRight}>
                        <MaterialCommunityIcons name="star" size={12} color={colors.white} />    
                    </View>
                </View>
            </SafeAreaView>

            {/* Titles */}
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>{item.title}</Text>
            </View>

            {/* Price */}
            <View style={styles.priceWrapper}>
                <Text style={styles.price}>$ {item.price}</Text>
            </View>

            {/* Pizza Info */}
            <View style={styles.infoWrapper}>
                <View style={styles.infoLeftWrapper}>
                    <View style={styles.infoItemWrapper}>
                        <Text style={styles.infoItemTitle}>Size</Text>
                        <Text style={styles.infoItemText}>{item.sizeName} {item.sizeNumber}"</Text>
                    </View>

                    <View style={styles.infoItemWrapper}>
                        <Text style={styles.infoItemTitle}>Crust</Text>
                        <Text style={styles.infoItemText}>{item.crust}</Text>
                    </View>
                    
                    <View style={styles.infoItemWrapper}>
                        <Text style={styles.infoItemTitle}>Delivery in</Text>
                        <Text style={styles.infoItemText}>{item.deliveryTime} min</Text>
                    </View>
                </View>

                <View>
                    <Image source={item.image} style={styles.itemImage} />
                </View>
            </View>


            {/* Ingredients */}
            <View style={styles.ingredientsWrapper}>
                <Text style={styles.ingredientsTitle}>Ingredients</Text>
                <View style={styles.ingredientsListWrapper}>
                    <FlatList 
                        data={item.ingredients}
                        renderItem={renderIngredientsItem}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>


            {/* Place an Order */}
            <TouchableOpacity onPress={() => alert("You've placed an order")}>
                <View style={styles.orderWrapper}>
                    <Text style={styles.orderText}>Place an order</Text>
                    <Feather
                        name="chevron-right"
                        size={16}
                        color={colors.black}
                    />
                </View>
            </TouchableOpacity>

        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        marginTop: 40,
        marginLeft: 20,
        marginRight: 20
    },
    headerLeft: {
        borderColor: colors.textLight,
        padding: 14,
        borderRadius: 10,
        borderWidth: 2
    },
    headerRight: {
        padding: 14,
        backgroundColor: colors.primary,
        borderRadius: 10
    },
    titleWrapper: {
        marginTop: 10,
        marginLeft: 20,
        width: 180,
        height: 100
    },
    title: {
        fontFamily: "Montserrat-Bold",
        fontSize: 32
    },
    priceWrapper: {
        marginTop: 20,
        marginLeft: 20
    },
    price: {
        fontSize: 32,
        fontFamily: "Montserrat-Semibold",
        color: colors.price,
    },
    infoWrapper: {
        marginTop: 20,
        marginLeft: 20,
        flexDirection: "row",
        alignItems: 'center'
    },
    infoLeftWrapper: {
        flexDirection: "column"
    },
    infoItemWrapper: {
        marginTop: 20
    },
    infoItemTitle: {
        fontFamily: "Montserrat-Medium",
        fontSize: 14,
        color: colors.textLight,
        marginBottom: 5
    },
    infoItemText: {
        fontSize: 16,
        fontFamily: "Montserrat-SemiBold"
    },
    itemImage: {
        marginLeft: 50,
        resizeMode: "contain",
    },  
    ingredientsWrapper: {
        marginTop: 44,
        marginLeft: 20    
    },
    ingredientsTitle: {
        fontFamily: "Montserrat-Bold",
        fontSize: 16
    },
    ingredientsListWrapper: {
        marginTop: 20,
    },
    ingredientItemWrapper: {
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginRight: 15,
        borderRadius: 15,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    ingredientImage: {
        resizeMode: 'contain'
    },
    orderWrapper: {
        width: 335,
        height: 62,
        marginTop: 30,
        backgroundColor: colors.primary,
        borderRadius: 50,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 20,
        
    },
    orderText: {
        fontFamily: "Montserrat-Bold",
        fontSize: 14
    }
    
});

export default Details;