import React, { useEffect, useState } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import { useRecoilState } from 'recoil'
import { inputtextwallpaper } from '../atoms/wallpaperinputtext'
// import RNFetchBlob from 'rn-fetch-blob';

const Screen2 = ({ route }) => {
    const { clickedimage } = route.params
    const [searchvalue, setSearchValue] = useRecoilState(inputtextwallpaper)
    const [imagedata, setimagedata] = useState()
    useEffect(() => {
        setimagedata(JSON.parse(clickedimage)?.cover_photo.urls.regular)
    }, [])
    // console.log(typeof (imagedata))

    // const checkpermission = async () => { }
    // https://aboutreact.com/download-image-in-react-native/

    const checkPermission = async () => { }
    // const REMOTE_IMAGE_PATH = imagedata;

    // const checkPermission = async () => {

    //     // Function to check the platform
    //     // If iOS then start downloading
    //     // If Android then ask for permission

    //     if (Platform.OS === 'ios') {
    //         downloadImage();
    //     } else {
    //         try {
    //             const granted = await PermissionsAndroid.request(
    //                 PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    //                 {
    //                     title: 'Storage Permission Required',
    //                     message:
    //                         'App needs access to your storage to download Photos',
    //                 }
    //             );
    //             if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //                 // Once user grant the permission start downloading
    //                 console.log('Storage Permission Granted.');
    //                 downloadImage();
    //             } else {
    //                 // If permission denied then show alert
    //                 alert('Storage Permission Not Granted');
    //             }
    //         } catch (err) {
    //             // To handle permission related exception
    //             console.warn(err);
    //         }
    //     }
    // };

    // const downloadImage = () => {
    //     // Main function to download the image

    //     // To add the time suffix in filename
    //     let date = new Date();
    //     // Image URL which we want to download
    //     let image_URL = REMOTE_IMAGE_PATH;
    //     // Getting the extention of the file
    //     let ext = getExtention(image_URL);
    //     ext = '.' + ext[0];
    //     // Get config and fs from RNFetchBlob
    //     // config: To pass the downloading related options
    //     // fs: Directory path where we want our image to download
    //     const { config, fs } = RNFetchBlob;
    //     let PictureDir = fs.dirs.PictureDir;
    //     let options = {
    //         fileCache: true,
    //         addAndroidDownloads: {
    //             // Related to the Android only
    //             useDownloadManager: true,
    //             notification: true,
    //             path:
    //                 PictureDir +
    //                 '/image_' +
    //                 Math.floor(date.getTime() + date.getSeconds() / 2) +
    //                 ext,
    //             description: 'Image',
    //         },
    //     };
    //     config(options)
    //         .fetch('GET', image_URL)
    //         .then(res => {
    //             // Showing alert after successful downloading
    //             console.log('res -> ', JSON.stringify(res));
    //             alert('Image Downloaded Successfully.');
    //         });
    // };

    // const getExtention = filename => {
    //     // To get the file extension
    //     return /[.]/.exec(filename) ?
    //         /[^.]+$/.exec(filename) : undefined;
    // };

    const shownextimage = async () => {
        // console.log(searchvalue)
        const data = await fetch(`https://source.unsplash.com/900x1600/?${searchvalue}`)

        // console.log(data.url)
        setimagedata(data.url)
        console.log('next image')
    }
    return (
        <View style={styles.imagecontainer}>
            <Image source={{ uri: imagedata }} style={styles.image} />
            {/* <Text>My btn</Text> */}
            <TouchableOpacity style={styles.downloadbtn} onPress={checkPermission}>
                <Text style={styles.downloadbtntxt}>Download</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.nextbtn} onPress={shownextimage}>
                <Text style={styles.nextbtntxt}>Next</Text>
            </TouchableOpacity>
        </View>


    )
}
const styles = StyleSheet.create({

    imagecontainer: {
        width: "100%",
        height: "100%",
        backgroundColor: 'white',
    },
    image: {
        width: "100%",
        height: "100%",
    },
    downloadbtn: {
        position: "absolute",
        bottom: 10,
        left: 80,
        backgroundColor: 'black',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        elevation: 10,
    },
    downloadbtntxt: {
        color: 'white',
        fontSize: 20,
        // fontWeight: 'bold',
    },
    nextbtn: {
        position: "absolute",
        bottom: 10,
        right: 80,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        elevation: 10,
    },
    nextbtntxt: {
        color: 'black',
        fontSize: 20,
        // fontWeight: 'bold',
    },
});
export default Screen2