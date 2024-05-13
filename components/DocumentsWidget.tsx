import type { FC } from "react";
import { FaFilePdf } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";

interface DocumentsWidgetProps {}

const DocumentsWidget: FC<DocumentsWidgetProps> = () => {
  return (
    <>
      <div className=" w-[450px] flex-1">
        <div className="text-xl dark:text-white">Recent Documents</div>
        <div className="p-8 overflow-scroll no-scrollbar -8 mt-2 dark:bg-[#232429] bg-[#FFFFFF] h-[360px] rounded-3xl">
          <div className="flex flex-col gap-8">
            {Array.from({ length: 20 }).map((item) => {
              return (
                <div className="flex items-center justify-between gap-2">
                  <div className="flex gap-2">
                    <FaFilePdf color="#F95555" size={36} />
                    <div className="flex flex-col ">
                      <p className="text-[#1C274C]  font-semibold dark:text-white">
                        Contract John Doe
                      </p>
                      <p className="text-xs text-[#666666]">20/04/2024 22:03</p>
                    </div>
                  </div>

                  <div className="bg-[#1C274C]   w-12 h-9 flex items-center justify-center rounded-xl hover:opacity-85 cursor-pointer">
                    <MdDownload size={24} color="white" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default DocumentsWidget;
