import React from 'react'
import { Text, View, StyleSheet, TextInput, Image } from 'react-native'
import logo from '../assets/searchicon.png'
import { inputtextwallpaper } from '../atoms/wallpaperinputtext'
import { useRecoilState } from 'recoil'

const Navbar = () => {
    const [searchvalue, setSearchValue] = useRecoilState(inputtextwallpaper)


    onChangeTextinput = (text) => {
        // console.log(text)
        setSearchValue(text)
        // console.log(searchvalue)
    }
    return (
        <View style={styles.container}>
            {/* <Text>Navbar</Text> */}
            <View style={styles.searchcont}>
                <Image source={logo} style={styles.icon} />
                <TextInput onChangeText={this.onChangeTextinput} style={styles.searchinput} placeholder="Search Anything..." />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingVertical: 10,
        // height: "100%",
        backgroundColor: "white",
        alignItems: 'center',
        // justifyContent: 'center',
    },
    icon: {
        width: 20,
        height: 20,
    },
    searchcont: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        elevation: 10,
        borderRadius: 10,
        padding: 10,
        width: "80%",
    },
    searchinput: {
        width: '90%',
        fontSize: 20,
        paddingLeft: 10,
    }
});
export default Navbar