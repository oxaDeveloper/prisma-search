import { useState } from "react";
import Create from "./Create";

const Search = ({ handleSearch, searchParams, fetchData }: any) => {
  const [create, setCreate] = useState(false);

  return (
    <div className="relative m-5 flex flex-1 gap-5">
      <input
        type="text"
        className="w-full rounded-3xl bg-gray-300 px-3 py-2 text-xl"
        placeholder="Search..."
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />

      <button
        className="rounded-md bg-gray-300 px-2 py-1"
        onClick={() => setCreate(true)}
      >
        Create
      </button>

      {create && <Create setCreate={setCreate} fetchData={fetchData} />}
    </div>
  );
};

export default Search;
