import React, { useState, useEffect,useRef } from "react";
import { StyleSheet, Text, View, ScrollView, Pressable, Button } from "react-native";
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

export default function CameraScreen ({ route, navigation})
{
    const [ready, setReady] = useState(false);
    let camera = useRef();
    const [hasPermission, SetHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back)

    useEffect(() => {
        (async  () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            SetHasPermission( status === 'granted');
        })();
    }, []);

    useEffect(() => {
        (async () => {
            const { status,} = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if(status !== 'granted') { alert("You can't use this app.")}
        })();
    })
    const takePic = () => {
        const options = {
            quality: 0.8,
            exif: true,
            base64: true,
        };
        camera.TakePictureAsync(options).then(({ uri, width, height, exif, base64}) => {
            route.params.setCameraImage(uri)
            navigation.navigate('',)
        });
    };

    const useImageGallery = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({
            madiaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [3,4],
            quality: 1,
        });
        if(!result.cancelled) {
            route.params.setCameraImage(result.uri);
        }
    }

    if(hasPermission === null) { return <View/> }
    if(hasPermission === false) { return (
        <View>
            <Text>No access to camera</Text>
        </View>
    );
    }

    return (
        <ScrollView style={}>
            <Camera style={} type={type} ref={(r) => { camera = r; }}>
                <View>
                    <Pressable>
                        <Text>Flip</Text>
                    </Pressable>
                </View>
            </Camera>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 10,
    },
    camera: {
        width: 350,
        height: 425,
        margin: 10,
    },
    text: {
        color: 'white',
        fontSize: 24,
    },
    buttonTake: {
        height: 10,
        width: 40,
        marginTop: 30
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
})