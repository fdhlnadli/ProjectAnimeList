"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
   const searchRef = useRef();
   const router = useRouter();

   // const handleSearch = (event) => {
   //    event.preventDefault();
   //    const keyword = searchRef.current.value;

   //    router.push(`/search/${keyword}`);
   // };

   // const handleKeyPress = (event) => {
   //    const key = event.keycode || event.which;
   //    if (key === 13) {
   //       handleSearch(event);
   //    }
   // };

   const handleSearch = (event) => {
      const keyword = searchRef.current.value;

      if (!keyword || keyword.trim() == "") return;

      if (event.key === "Enter" || event.type === "click") {
         event.preventDefault();
         router.push(`/search/${keyword}`);
      }
   };

   return (
      <div className="relative">
         <input
            placeholder="Cari anime..."
            className="w-full p-2 rounded-md"
            ref={searchRef}
            onKeyDown={handleSearch}
         />
         <button className="absolute top-2 end-2" onClick={handleSearch}>
            <MagnifyingGlass size={24} />
         </button>
      </div>
   );
};

export default InputSearch;
