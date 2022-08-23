import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import { useRecoilState } from 'recoil'
import { inputtextwallpaper } from '../atoms/wallpaperinputtext'
import Navbar from './Navbar'

const Screen1 = ({ navigation }) => {
    const access_key = 'DfrgDYXv3xSbxgtlvRpVfKuXNhW3YMctXXALTDErVIw'
    const [searchvalue, setSearchValue] = useRecoilState(inputtextwallpaper)
    const [imagecollection, setImageCollection] = useState([])
    // console.log(searchvalue)
    useEffect(() => {
        const getimagecollection = async () => {
            let data = await fetch(`https://api.unsplash.com/search/collections?page=1&per_page=30&query=${searchvalue}&client_id=${access_key}`)
            let jsondata = await data.json()
            setImageCollection(jsondata)
            // console.log(jsondata)
        }

        getimagecollection()
    }, [searchvalue])

    // console.log(imagecollection)
    imagecollection.total == 0 && setSearchValue('all')


    const ShowWallpaper = (item) => {
        // console.log(item)
        navigation.navigate('S2', { clickedimage: `${JSON.stringify(item)}` })
    }
    return (
        <View style={styles.container}>
            {/* <Text>Showing results for {searchvalue}</Text> */}
            <Navbar />
            <FlatList numColumns={2} data={imagecollection.results}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => ShowWallpaper(item)}>
                        <View style={styles.imagecontainer}>
                            {/* <Text>{item.title}</Text> */}
                            <Image source={{ uri: item.cover_photo.urls.regular }} style={styles.image} />
                        </View>
                    </TouchableOpacity>
                }
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        // backgroundColor: "yellow",
        alignItems: 'center',
        // justifyContent: 'center',
        marginTop: 20,
    },
    imagecontainer: {
        width: 200,
        height: 200,
        backgroundColor: 'white',
    },
    image: {
        width: "100%",
        height: "100%",
    }
});
export default Screen1