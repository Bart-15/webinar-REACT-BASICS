/* eslint-disable no-lone-blocks */
import { useState } from 'react';
import axios from 'axios';

{/* 
    // TODO: Fetch Rick and Morty API using useEffect
    // - API Enpoint: https://rickandmortyapi.com/api/character
    // use axios or fetch
*/}

const RickAndMorty = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errMessage, setErrorMessage] = useState('')


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
                        data.map((item) => {
                            return (
                                <div className="rounded overflow-hidden shadow-lg" key={item.id}>
                                    <img className="w-full" src={item.image} alt={item.name} />
                                    <div className="px-6 py-4 leading-8">
                                        <div className="font-bold text-xl mb-2">{item.name}</div>
                                        <p className="bg-slate-800 text-zinc-200 py-1 px-3 rounded-full w-auto inline-block font-bold text-xs">Status: {item.status}</p>
                                        <p>Total Episodes: {item.episode.length}</p>
                                    </div>
                                </div>
                            )
                        })
                    )
                }
            </div>
    </div>        
    );
}
 
export default RickAndMorty;