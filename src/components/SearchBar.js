import React from 'react'
import { View,  StyleSheet, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Ionicons name='search' style={ styles.iconStyle}/>
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                value={term}
                onChangeText={onTermChange}
                style={styles.inputStyle}
                placeholder='Search...'
                onEndEditing={onTermSubmit}
                
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        marginTop: 10,
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center'
    }
})
export default SearchBar