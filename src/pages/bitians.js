// import ProfileCard from "@/components/bitians/ProfileCard";
import Gradyear from "@/components/bitians/GradYear";
import Branches from "@/components/bitians/Branches";
import { useEffect, useState } from "react";
import ProfileList from "@/components/bitians/ProfileList";

export default function Home({ bitians }) {
  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedBranches, setSelectedBranches] = useState([]);
  

  // Function to update the selected years
  const updateSelectedYears = (years) => {
    setSelectedYears(years);
  };

  const updateSelectedBranches = (branches) => {
    setSelectedBranches(branches);
  };

  // Filter the bitians based on selected years
  const filteredByYears = selectedYears.length === 0
  ? bitians
  : bitians.filter((bitian) =>
      selectedYears.includes(bitian.yearofgraduation.toString())
    );

// Filter the bitians based on selected branches
const filteredByBranches = selectedBranches.length === 0
  ? bitians
  : bitians.filter((bitian) =>
      selectedBranches.includes(bitian.branch)
    );

// Calculate the intersection of the two filtered arrays
const filteredBitians = filteredByYears.filter((bitian) =>
  filteredByBranches.includes(bitian)
);

  return (
    <div className="w-3/4">
      

      <div className="fixed top-0 right-0 z-50 flex flex-row">
        <Gradyear onSelect={updateSelectedYears} selectedYears={selectedYears} />
        <Branches onSelect={updateSelectedBranches} selectedBranches={selectedBranches}/>
      </div>

      <div className="flex flex-col mt-8 items-center justify-center">
        <ProfileList bitians={filteredBitians} />

      </div>
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const res = await fetch(`${apiBaseUrl}/api/bitians`);
  const data = await res.json();
  console.log(data);
  // Pass data to the page via props
  return { props: { bitians: data.bitians_instance } };
}
