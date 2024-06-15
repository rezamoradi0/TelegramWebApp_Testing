interface CryptoData {
  name: string;
  price: number;
  type: string;
}

const CryptoListItem: React.FC<CryptoData> = ({ name, price, type }) => {
  return (
    <>
      <div className="flex w-[90%] justify-between mb-3 p-3 rounded-3xl bg-neutral-700">
        <div className="flex">
          <div className="flex items-center p-3 justify-center bg-white rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          <div className="flex ml-3 flex-col justify-center">
            <div>
              <p className="text-[.8rem] font-bold text-white">{type}</p>
            </div>
            <div>
              <p className="text-[.5rem] font-bold text-gray-400">{name}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-white text-md font-bold">${price}</p>
        </div>
      </div>
    </>
  );
};

export default CryptoListItem;
