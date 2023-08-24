/* eslint-disable no-lone-blocks */

import { useQuery } from "@tanstack/react-query";
import axios from 'axios';

{/* 
    // TODO: Fetch Users 
    // - API Enpoint: https://jsonplaceholder.typicode.com/users
    // use axios or fetch
*/}

const ReactQuery = () => {

    const { isLoading, isError, data, error } = useQuery({});

    if (isLoading) {
        return <span className="mt-10">Loading...</span>
    }
    
    if (isError) {
        return <span className="mt-10">Error: {error.message}</span>
    }

    return ( 
        <div className="mt-10">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl md:text-5xl mb-10">User's</h1>
                <ul className="list-none">
                    {
                        data?.map(item => (
                            <li key={item.id}>
                                {item.name}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}
 
export default ReactQuery;