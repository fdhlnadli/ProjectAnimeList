import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Link from "next/link";

const page = async () => {
   const user = await authUserSession();
   const comments = await prisma.comment.findMany({
      where: { user_email: user.email },
   });
   console.log();

   return (
      <session className="mt-4 px-4 w-full">
         <Header title="My Comment" />

         <div className="grid grid-cols-1 px-4 py-8 gap-4">
            {comments.map((comment) => {
               return (
                  <Link
                     href={`/anime/${comment.anime_mal_id}`}
                     key={comment.id}
                     className="text-color-dark bg-color-primary p-4"
                  >
                     <p className="font-bold text-sm">{comment.anime_title}</p>
                     <p className="italic">{comment.comment}</p>
                  </Link>
               );
            })}
         </div>
      </session>
   );
};

export default page;
