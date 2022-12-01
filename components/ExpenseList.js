import React from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import ExpenseItem from './ExpenseItem';

export default function ExpenseList(props) {

    return(
        <SafeAreaView>
            <FlatList style={styles.flatListContainer} data={props.expenses} renderItem={({item}) =>
                    <ExpenseItem price={item.price}
                                 title={item.title}
                                 deleteExpense={props.deleteExpense}
                                 id={item.id} image={item.image}
                                 expenseDate={item.expenseDate}
                    />}
                keyExtractor={(item) => item.id}
                extraData={props.deleteExpense}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    flatListContainer: {
        backgroundColor: '#FFF',
        borderRadius: 16,
        margin: 5,
        marginBottom: 10,
        borderTopWidth:1,

    },
    shadowProp:{
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    }

})
