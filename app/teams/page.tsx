import DropDownMenu from "@/components/DropDownMenu";
import Image from "next/image";

export default function Dashboard() {
  return (
    <>
      <div className="p-5 h-screen overflow-scroll no-scrollbar bg-[#FBFBFB] xs:max-sm:hidden">
        <div className=" rounded-lg bg-[#ffffff] min-h-24 flex items-center gap-2 justify-between flex-wrap">
          <div className=" pl-4  shrink-0">
            <p className="text-[#1C274C] text-lg font-bold">
              Total Number of Teams
            </p>
            <p className="text-xl  font-bold">28 Teams</p>
          </div>

          <div className="flex items-center overflow-scroll no-scrollbar">
            {Array.from({ length: 5 }).map((player, index) => (
              <div key={index} className=" mr-[-15px] items-center w-fit">
                <Image
                  src={`https://i.pravatar.cc/?img=${index}`}
                  width={40}
                  height={40}
                  className=" rounded-full"
                  alt="Picture of the author"
                />
              </div>
            ))}
            <div className="ml-6 text-[#000000] font-semibold">+2</div>
          </div>
          <div className="flex gap-2">
            <DropDownMenu
              label={"By Coach"}
              options={[
                "option1",
                "option2",
                "option3",
                "option4",
                "option5",
                "option6",
              ]}
            />
            <DropDownMenu
              label={"By Coach"}
              options={[
                "option1",
                "option2",
                "option3",
                "option4",
                "option5",
                "option6",
              ]}
            />
            <button className=" flex text-l hover:opacity-90 shrink-0  items-center justify-center gap-2 w-fit p-2 px-5 rounded-xl font-bold text-white  bg-[#1C274C]">
              Add New Team
            </button>
          </div>
        </div>
      </div>

      <div id="mobile" className=" h-screen">
        <div className="text-xs  mt-16 p-6 bg-white border rounded-lg sm:hidden">
          <div className="flex justify-between">
            <div className=" pl-4">
              <p className="text-[#1C274C]  font-bold">Total Number of Teams</p>
              <p className="font-bold text-sm">28 Teams</p>
            </div>
            <button className=" flex text-l hover:opacity-90 shrink-0  items-center justify-center gap-2 w-fit p-2 px-5 rounded-xl font-bold text-white  bg-[#1C274C]">
              Add New Team
            </button>
          </div>
          <div className="flex items-center overflow-scroll no-scrollbar p-4">
            {Array.from({ length: 5 }).map((player, index) => (
              <div key={index} className=" mr-[-15px] items-center w-fit">
                <Image
                  src={`https://i.pravatar.cc/?img=${index}`}
                  width={40}
                  height={40}
                  className=" rounded-full"
                  alt="Picture of the author"
                />
              </div>
            ))}
            <div className="ml-6 text-[#000000] font-semibold">+2</div>
          </div>
        </div>
        <div className="flex justify-between m-2">
          <DropDownMenu
            label={"By Coach"}
            options={[
              "option1",
              "option2",
              "option3",
              "option4",
              "option5",
              "option6",
            ]}
          />
          <DropDownMenu
            label={"By Coach"}
            options={[
              "option1",
              "option2",
              "option3",
              "option4",
              "option5",
              "option6",
            ]}
          />
        </div>
      </div>
    </>
  );
}
