import Image from "next/image";

const UserData: React.FC = () => {
  return (
    <>
      <div className="w-[100%] flex justify-between p-4">
        <div className="flex flex-col">
          <div>
            <p className="font-bold text-white text-[1rem]">Good Morning, Mahan</p>
             {/* literal with userName */}
          </div>
          <div>
            <span className="text-white text-[.6rem]">08 Agoust,2024</span> 
            {/* literal with update time */}
          </div>
        </div>
        <div>
          <div className="w-[3rem] bg-green-600 h-[3rem] rounded-full">
            {/* <Image src={""} alt="" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserData;
