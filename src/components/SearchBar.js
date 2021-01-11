import React from 'react'
import { View,  StyleSheet, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 
const SearchBar = () => {
    return (
        <View style={styles.background}>
            <Ionicons name='search' size={30}/>
            <TextInput
                placeholder='Search...'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        display: 'flex',
        
    },
})
export default SearchBar