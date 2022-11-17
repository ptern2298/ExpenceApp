import React from "react";
import { View, Text, Button, StyleSheet, SafeAreaView, ActivityIndicator } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font"

import {useState, useEffect } from "react";

export default function HomeScreen({})
{
    const[loading, setLoading] = useState(false);

    const startLoading = () =>
    {
        setLoading(true);
        setTimeout(() => { setLoading(false)},1000)
    }

    useEffect(()=> {startLoading()},[])

    return(
        <SafeAreaView>
            <ActivityIndicator animating={loading} size="large" style={}/>
            <>
                <Text>All Expenses</Text>
            </>
            <>
                <Text>No Expenses Yet!</Text>
            </>
            <Button title="Create Expense" onPress={}/>
            <StatusBar style="auto"/>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({});