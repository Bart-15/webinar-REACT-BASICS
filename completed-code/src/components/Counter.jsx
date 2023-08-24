import { useEffect, useState } from 'react';

const Counter = () => {

    const [counter, setCounter] = useState(0); 

    function increment(){
        setCounter((prev) => prev + 1);
    };

    function decrement(){
        setCounter((prev) => prev - 1);
    }

    function reset() {
        setCounter((prev) => prev = 0);
    }

    useEffect(() => {
        // code that we want to run 
        console.log("The count is:", counter);

        //clean up function
        return () => {
            console.log("I'm cleaned")
        }

    }, [counter])

    return (
        <div className="mt-10">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl md:text-5xl mb-10">Counter App</h1>
                <div>
                    <p className="text-center text-1xl md:text-2xl mb-6"> Counter value: {counter} </p>
                    <div className="flex flex-row gap-5 justify-center items-center">
                        <button onClick={decrement} className="text-white bg-zinc-900 py-1 px-3 rounded">-</button>
                        <button onClick={reset} className="text-white bg-zinc-900 py-1 px-3 rounded">Reset</button>
                        <button onClick={increment} className="text-white bg-zinc-900 py-1 px-3 rounded">+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Counter;