const CharacterList = ({item}) => {
    const { name, status, image, episode } = item;
    
    return ( 
        <div className="rounded overflow-hidden shadow-lg">
            <img className="w-full" src={image} alt={name} />
            <div className="px-6 py-4 leading-8">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="bg-slate-800 text-zinc-200 py-1 px-3 rounded-full w-auto inline-block font-bold text-xs">Status: {status}</p>
                <p>Total Episodes: {episode.length}</p>
            </div>
        </div>
    );
}

export default CharacterList;