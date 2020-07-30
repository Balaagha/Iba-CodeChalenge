import React from 'react'
import { View, Text, StyleSheet, Dimensions,  } from 'react-native'
import { getTransactionsAll } from '../../store/transactions';
import { connect } from 'react-redux';
import { COLORS } from '../../styles/colors';
import { CustomText } from '../../components/CustomText';
import { CustomBtn } from '../../components/CustomBtn';

const mapsStateToProps=(state,{route})=>{
    return ({singleTransaction:getTransactionsAll(state).filter(item=>item.id===route?.params?.id)});
}
const appHeight = Dimensions.get('window').height;
export const TransactionsDetails = connect(mapsStateToProps)(({route,singleTransaction}) => {
    console.log("bura",singleTransaction[0].count);
    return (
        <View style={styles.container}>
            <View style={{height:appHeight * 0.3,alignItems:'center'}}>
                <CustomText weight="medium" style={{fontSize:30,marginVertical:30,}}>{`$${singleTransaction[0].count}`}</CustomText>
                <View style={{justifyContent:"space-evenly",flexDirection:'row',width:'90%'}}>
                    <CustomBtn title="beledir" />
                    <CustomBtn title="beledir" />
                </View>
            </View>
            <CustomText weight="bold" style={styles.transactionsHeading}>Transaction Details</CustomText>
            <View style={{borderWidth:1,borderColor:COLORS.lightGray,width:"100%",}} />
            <View style={{height:appHeight * 0.4,padding:20,}}>
                <View style={{justifyContent:'space-between',flexDirection:'row',width:'100%',marginBottom:10}}>
                    <CustomText weight="regular" style={{fontSize:14,}}>Type</CustomText>
                    <CustomText weight="regular" style={{fontSize:14,}}>{`${singleTransaction[0].transactionDetail.type}`}</CustomText>
                </View>
                <View style={{justifyContent:'space-between',flexDirection:'row',width:'100%',marginBottom:10}}>
                    <CustomText weight="regular" style={{fontSize:14,}}>Paymetn Detail</CustomText>
                    <CustomText weight="regular" style={{fontSize:14,}}>{`${singleTransaction[0].transactionDetail.payMethod}`}</CustomText>
                </View>
            </View>

        </View>
    )
});

const styles = StyleSheet.create({
    container: {flex: 1,paddingHorizontal:18,backgroundColor:COLORS.white,},
    transactionsHeading:{marginVertical:14},

  });
  