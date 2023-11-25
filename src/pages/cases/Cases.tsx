import React, { useState } from "react";
import ItemSearch from "../../components/common/ItemSearch";
import Button from "../../components/common/Button";
import JudgmentCases from "./tabs/JudgmentCases";
import AllCases from "./tabs/AllCases";
import OldCases from "./tabs/OldCases";
import ClosedCases from "./tabs/ClosedCases";
import NewCases from "./tabs/NewCases";

const Cases = () => {
  const arr = [1, 2, 3, 5, 6, 7]
  const [tab, setTabs] = useState("Allcases")
  return (
    <div>
      <div className="flex flex-row justify-between px-11 py-12">
        <div className="flex flex-col gap-1">
          <p className="text-xl font-medium">All Cases</p>
          <p className="text-base font-normal text-[#868686]">
            Add and view legal cases
          </p>
        </div>
        <div className="flex items-center">
          <ItemSearch placeholder="cases Search" />
          <Button style="bg-[#0F2C64] p-3 text-white rounded-2xl">
            {" "}
            Add New Case
          </Button>
        </div>
      </div>
      <div className="border-y-2 border-gray-300">
        <ul className="flex flex-row gap-9 pl-20 p-4">
          <li className={ tab === "Allcases" ? "text-lg font-normal  text-[#0F2C64] underline" : ` text-lg font-normal cursor-pointer text-[#868686]`} onClick={() => setTabs("Allcases")}>
            All Cases
          </li>
          <li className={ tab === "OldCases" ? "text-lg font-normal  text-[#0F2C64] underline" : ` text-lg font-normal cursor-pointer text-[#868686]`} onClick={() => setTabs("OldCases")}>
            Old Cases
          </li>
          <li className={ tab === "NewCases" ? "text-lg font-normal  text-[#0F2C64] underline" : ` text-lg font-normal cursor-pointer text-[#868686]`} onClick={() => setTabs("NewCases")}>
            New Cases
          </li>
          <li className={ tab === "JudgmentCases" ? "text-lg font-normal  text-[#0F2C64] underline" : ` text-lg font-normal cursor-pointer text-[#868686]`} onClick={() => setTabs("JudgmentCases")}>
            Judgement Cases
          </li>
          <li className={ tab === "ClosedCases" ? "text-lg font-normal  text-[#0F2C64] underline" : ` text-lg font-normal cursor-pointer text-[#868686]`} onClick={() => setTabs("ClosedCases")}>
            Closed Cases
          </li>
        </ul>
      </div>
      {tab === "Allcases" && <AllCases />}
      {tab === "NewCases" && <NewCases />}
      {tab === "ClosedCases" && <ClosedCases />}
      {tab === "OldCases" && <OldCases />}
      {tab === "JudgmentCases" && <JudgmentCases />}

    </div>
  );
};

export default Cases;
