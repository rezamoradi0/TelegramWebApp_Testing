const SearchInput: React.FC = () => {
  return (
    <>
      <div className="flex items-center mt-6 p-[.5rem] rounded-full w-[90%] bg-neutral-700">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="text-gray-300 m-1 size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <div>
          <input type="text" className="ml-2 w-[90%] text-gray-300 bg-neutral-700 border-none outline-none" placeholder="Search Crypto Currency" />
        </div>
      </div>
    </>
  );
};

export default SearchInput;
