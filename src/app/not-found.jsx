"use client";

import { FileMagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const NotFound = () => {
   const router = useRouter();
   return (
      <div className="min-h-screen max-w-xl mx-auto flex items-center justify-center">
         <div className="flex items-center justify-center gap-4 flex-col">
            <FileMagnifyingGlass size={44} className="text-color-accent" />
            <h3 className="text-color-accent text-4xl font-bold">
               PAGE NOT FOUND
            </h3>
            <button
               onClick={() => router.back()}
               className="text-color-primary hover:text-color-accent transition-all underline"
            >
               Kembali
            </button>
         </div>
      </div>
   );
};

export default NotFound;
