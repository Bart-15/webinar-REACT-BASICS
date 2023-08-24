import { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterList from './CharacterList';

const RickAndMorty = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errMessage, setErrorMessage] = useState('')

    useEffect(() => {
        async function fetchCharacter(){
            setLoading(true)
            try {
                const { data: { results } } = await axios.get('https://rickandmortyapi.com/api/character');
                setData(results); //
                setLoading(false);
            }catch(e) {
                setLoading(false);
                console.log(e.response.data.error);
                setErrorMessage('Something went wrong, please try again.');
            }
        }

        fetchCharacter();

    }, []);

    if(loading) {
        return <p className="mt-10">Loading ...</p>
    }

    if(errMessage) {
        return <p className="mt-10">{errMessage}</p>
    }

    return ( 
        <div className="mt-10">
            <h1 className="text-3xl md:text-5xl mb-10 text-center">Rick and Morty</h1>
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {
                    !data?.length 
                    ? <p>Data Not Available</p> 
                    : (
                        data.map(item => <CharacterList item={item} key={item.id}/>)
                    )
                }

            </div>
    </div>        
    );
}
 
export default RickAndMorty;