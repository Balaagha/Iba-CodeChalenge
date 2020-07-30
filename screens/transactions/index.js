import React,{useEffect,useState} from 'react'
import { View, Text, Button, StyleSheet, FlatList, Image } from 'react-native'
import { getTransactionsAll } from '../../store/transactions';
import { connect } from 'react-redux';
import { getFormattedTime } from '../../utils';
import { COLORS } from '../../styles/colors';
import { CustomText } from '../../components/CustomText';
import { IMAGES } from '../../styles/images';
import { TouchableOpacity } from 'react-native-gesture-handler';

const mapsStateToProps=(state)=>({transactionsData:getTransactionsAll(state)});


export const Transactions = connect(mapsStateToProps)(({navigation,transactionsData}) => {
    useEffect(() => {}, [])
    return (
        <View style={styles.container}>
            <CustomText weight="bold" style={styles.transactionsHeading}>Performance</CustomText>
            <View style={{borderWidth:1,borderColor:COLORS.lightGray,width:"100%",}} />
            <CustomText weight="bold" style={styles.transactionsHeading}>Transactions</CustomText>
            <View style={{borderWidth:1,borderColor:COLORS.lightGray,width:"100%",}} />
            <FlatList
                    showsVerticalScrollIndicator = {false}
                    data={transactionsData}
                    renderItem={({item,index})=>{
                        return (
                            <TouchableOpacity onPress={()=>navigation.navigate('TransactionsDetails',{title:item.name,id:item.id})}>
                                <View style={{height:50,justifyContent:'space-between',flexDirection:'row',paddingHorizontal:10,}}>
                                    <View style={{flexDirection:'row',alignItems:'center',width:'70%'}}>
                                        <Image resizeMode="contain" style={{height: 30,width: 30,}} source={IMAGES[item.image]} />
                                        <CustomText style={{marginLeft:10}}>{item.name}</CustomText>
                                    </View>
                                    <View style={{justifyContent:'center',width:'30%'}}>
                                        <CustomText style={{color:COLORS.gray}}>{item.count}</CustomText>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={(item,index) => item.id.toString()}
                />
        </View>
    )
});

const styles = StyleSheet.create({
    container: {flex: 1,paddingHorizontal:18,backgroundColor:COLORS.white,},
    transactionsHeading:{marginVertical:14},
  });
  