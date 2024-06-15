import TabList from "./TabList";
import CryptoListItem from "./CryptoListItem";

const PricesList: React.FC = () => {
  return (
    <>
      <p className="ml-5 font-bold text-white text-lg">Prices</p>
      <div>
        <TabList />
      </div>
      <div className="overflow-y-scroll h-[49vh] flex flex-col items-center w-[100%]">
        <CryptoListItem name="Ethereum" price={2590.66} type="ETH/USD"/>
        <CryptoListItem name="Ethereum" price={2590.66} type="ETH/USD"/>
        <CryptoListItem name="Ethereum" price={2590.66} type="ETH/USD"/>
        <CryptoListItem name="Ethereum" price={2590.66} type="ETH/USD"/>
        <CryptoListItem name="Ethereum" price={2590.66} type="ETH/USD"/>
      </div>
    </>
  );
};

export default PricesList;
