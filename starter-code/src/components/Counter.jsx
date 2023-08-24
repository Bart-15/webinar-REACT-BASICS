

//TODO: Fix this code

const Counter = () => {

    let counter = 0;

    function increment(){
        counter += 1;
    };

    function decrement(){
        counter -= -1;
    }

    function reset() {
        counter = 0;
    }

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