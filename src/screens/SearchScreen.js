import React, {useState} from 'react'
import { View,  StyleSheet, Text } from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'
const SearchScreen = () => {

    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const searchApi = async (searchTerm) => {
        console.log('hi there!');
        try {
            const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'san jose',
            },
        });
        setResults(response.data.businesses)
        } catch (err) {
            setErrorMessage('Something went wrog')
            console.log('err', err);
        }
    }

    // call search api
    // is first render
    // searchApi('pasta') BAD CODE
    return (
        <View>
            <SearchBar
                onTermSubmit={()=>searchApi(term)}
                term={term}
                onTermChange={setTerm}
            />
            {
                errorMessage
                    ? <Text>{errorMessage}</Text>
                    : <Text>{results.length}</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({})
export default SearchScreen