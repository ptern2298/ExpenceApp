import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function TotalExpense(props) {

    const sum = (props.expenses).map(item => parseFloat(item.price)).reduce((prev, next) => prev + next, 0)

    return(
        <View style={styles.totalItem}>
            <Text>Total Expense:</Text>
            <Text style={styles.totalItemTxt}>${sum}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    totalItem: {
        backgroundColor: '#FFF',
        padding: 64,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginTop: 20
    },
    totalItemTxt: {
        fontFamily: 'Verdana',
        fontSize: 32
    }

})