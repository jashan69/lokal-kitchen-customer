import React from 'react'
import { Dimensions, ScrollView } from 'react-native'
import { View,Text,Image,TouchableOpacity } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import HomeHeader from '../component/HomeHeader'
import OfferCarousel from '../component/OfferCarousel'
import TypeCarousel from '../component/TypeCarousel'
import DishList from '../component/dishlist'
import ChefList from '../component/cheflist'

const HomeScreen=({navigation})=>{
    return(
        <SafeAreaView style={{flex:1}} >
        <HomeHeader/>
        <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}}>
        <View style={{padding:10}}>
        <Text style={{fontFamily:'light', fontSize:30}}>Welcome</Text>
        <Text style={{fontFamily:'book', fontSize:45}}>Jashan Shetty</Text>
        </View>

        <OfferCarousel/>
        <TypeCarousel/>
        <ChefList/>
        <DishList/>
        
        </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen