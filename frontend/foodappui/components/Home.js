import React from 'react';
import { StyleSheet, Text, Button, View, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import colors from '../assets/colors/colors';

Feather.loadFont();
MaterialCommunityIcons.loadFont();

const Home = ( { navigation }) => {

    const renderCategoryItem = ({ item }) => {
        return (
            <View style={[
                    styles.categoryItemWrapper,
                    {
                        backgroundColor: item.selected ? colors.primary : colors.white,
                        marginLeft: item.id == 1 ? 20 : 0,
                    },
                ]}>
                <Image source={item.image} style={styles.categoryImageItem} />
                <Text style={styles.categoryItemTitle}>{item.title}</Text>
                
                <View style={[
                    styles.categorySelectWrapper,
                    {
                        backgroundColor: item.selected ? colors.white : colors.secondary,
                    },
                ]}>
                    <Feather 
                        name="chevron-right" 
                        size={8} 
                        style={styles.categorySelectIcon}
                        color={item.selected ? colors.black : colors.white} />
                </View>
            </View>
        )
        
    }

    return (
        <View style={styles.container}>

            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}>

                {/* Header */}
                <SafeAreaView>
                    <View style={styles.headerWrapper}>
                        <Image
                            source={require('../assets/images/profile.png')} 
                            style={styles.profileImage} />
                        <Feather name="menu" size={24} color={colors.textDark} />

                    </View>
                </SafeAreaView>

                {/* Title */}
                <View style={styles.titleWrapper}> 
                    <Text style={styles.titleSubtitle}>Food</Text>
                    <Text style={styles.titleTitle}>Delivery</Text>
                </View>

                {/* Search */}
                <View style={styles.searchWrapper}>
                    <Feather name="search"size={16} />
                    <View style={styles.search}>
                        <Text style={styles.searchText}>Search...</Text>
                    </View>
                </View>

                {/* Categories */}
                <View style={styles.categoriesWrapper}>
                    <Text style={styles.categoriesTitle}>Categories</Text>
                    <View style={styles.categoriesListWrapper}>
                        <FlatList
                            data={categoriesData}
                            renderItem={renderCategoryItem}
                            keyExtractor={(item) => item.id}
                            horizontal={true}
                        />
                    </View>  
                </View>

                {/* Popular */}
                <View style={styles.popularWrapper}>
                    <Text style={styles.popularTitle}>Popular</Text>
                    {popularData.map((item) => (
                        <TouchableOpacity key={item.id} onPress={() => navigation.navigate('Details', {
                            item: item
                        })}>
                            <View 
                                style={[
                                    styles.popularCardWrapper,
                                    {
                                        marginTop: item.id == 1 ? 10 : 20,
                                    }
                                    ]}>
                                <View>
                                    <View>
                                        <View style={styles.popularTopWrapper}>
                                            <MaterialCommunityIcons
                                                name="crown"
                                                size={12}
                                                color={colors.primary}
                                            />
                                            <Text style={styles.popularTopText}>top of the week</Text>
                                        </View>
                                        <View style={styles.popularTitlesWrapper}>
                                            <Text style={styles.popularTitlesTitle}>{item.title}</Text>
                                            <Text style={styles.popularTitlesWeight}>Weight {item.weight}</Text>
                                        </View>
                                    </View>

                                    <View style={styles.popularCardBottom}>
                                        <View style={styles.addPizzaButton}>
                                            <Feather 
                                                name="plus" 
                                                size={10} 
                                                color={colors.textDark} />
                                        </View>
                                        <View style={styles.ratingWrapper}>
                                            <MaterialCommunityIcons
                                                name="star"
                                                size={10}
                                                color={colors.textDark}
                                            />
                                            <Text style={styles.rating}>{item.rating}</Text>
                                        </View>  
                                    </View>
                                </View>

                                <View style={styles.popularCardRight}>
                                    <Image source={item.image} style={styles.popularCardImage} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>        
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingTop: 20,
        alignItems: "center"
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 40,
        
    },
    titleWrapper: {
        marginTop: 30,
        paddingLeft: 20
    },
    titleSubtitle: {
        fontFamily: "Montserrat-Regular",
        fontSize: 16
    },
    titleTitle: {
        fontFamily: "Montserrat-Bold",
        fontSize: 32,
        marginTop: 5,
        color: colors.textDark,
    },
    searchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 30,
    },
    search: {
        flex: 1,
        marginLeft: 10,
        borderBottomColor: colors.textLight,
        borderBottomWidth: 2
    },
    searchText: {
        fontFamily: "Montserrat-Semibold",
        fontSize: 14,
        marginBottom: 5,
        color: colors.textLight,
    },
    categoriesWrapper: {
        marginTop: 30
    },
    categoriesTitle: {
        fontFamily: "Montserrat-Bold",
        fontSize: 16,
        paddingHorizontal: 20
    },
    categoriesListWrapper: {
        marginTop: 20
    },
    categoryItemWrapper: {
        backgroundColor: '#F5CA48',
        marginRight: 20,
        borderRadius: 20,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2
    },
    categoryImageItem: {
        width: 60,
        height: 60,
        marginTop: 25,
        alignSelf: "center",
        marginHorizontal: 20
    },
    categoryItemTitle: {
        fontFamily: "Montserrat-Medium",
        textAlign: "center",
        fontSize: 14,
        marginTop: 10
    },
    categorySelectWrapper: {
        width: 26,
        height: 26,
        borderRadius: 26,
        alignSelf: "center",
        marginTop: 20,
        marginBottom: 20,
        justifyContent: "center"
    },
    categorySelectIcon: {
        alignSelf: "center"
    },
    popularWrapper: {
        marginTop: 20,
        marginLeft: 20
    },
    popularTitle: {
        fontFamily: "Montserrat-Bold",
        fontSize: 16,
    },
    popularCardWrapper: {
        backgroundColor: colors.white,
        borderRadius: 25,
        paddingTop: 20,
        paddingLeft: 20,
        flexDirection: 'row',
        overflow: 'hidden',
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
        marginTop: 20,
        marginRight: 20
    },
    popularTopWrapper: {
        marginTop: 24,
        marginLeft: 20,
        alignItems: "center",
        flexDirection: "row"
    },
    popularTopText: {
        marginLeft: 10,
        fontSize: 14,
        fontFamily: "Montserrat-Semibold"
    },
    popularTitlesWrapper: {
        marginLeft: 22,
        marginTop: 20
    },
    popularTitlesTitle: {
        fontFamily: "Montserrat-Semibold",
        fontSize: 14,
        color: colors.textDark
    },
    popularTitlesWeight: {
        fontFamily: "Montserrat-Medium",
        fontSize: 12,
        marginTop: 5,
        color: colors.textLight
    },
    popularCardBottom: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: -20,
        marginTop: 10
    },
    addPizzaButton: {
        backgroundColor: colors.primary,
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25
    },
    ratingWrapper: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 20
    },
    rating: {
        marginLeft: 5,
        fontFamily: "Montserrat-Semibold",
        fontSize: 12,
        color: colors.textDark
    },
    popularCardRight: {
        marginLeft: 40
    },
    popularCardImage: {
        resizeMode: "contain",
        width: 210,
        height: 125
    },
});

export default Home;
