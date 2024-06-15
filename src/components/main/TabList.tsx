const TabList:React.FC =()=>{
    return (<>
    <div className="w-[100%] items-center p-5 flex justify-between">
        <div className="bg-green-600 rounded-full py-2 px-4">
            <p className="text-white text-sm font-bold">Gainers</p>
        </div>
        <div>
            <p className="text-white text-sm font-bold">Losers</p>
        </div>
        <div>
            <p className="text-white text-sm font-bold">24h Volume</p>
        </div>
    </div>
    </>);
}

export default TabList