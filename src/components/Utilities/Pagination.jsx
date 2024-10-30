const Pagination = ({ page, lastPage, setPage }) => {
   const scrollTop = () => {
      scrollTo({
         behavior: "smooth",
         top: 0,
      });
   };

   if (page < 1 || page > lastPage) return;

   const handleNextPage = () => {
      setPage((prevState) => prevState + 1);
      scrollTop();
   };

   const handlePrevPage = () => {
      setPage((prevState) => prevState - 1);
      scrollTop();
   };

   return (
      <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary">
         {page > 1 ? (
            <button
               onClick={handlePrevPage}
               className="transition-all hover:text-color-accent underline"
            >
               Prev
            </button>
         ) : null}

         <p>
            {page} of {lastPage}
         </p>

         {page < lastPage ? (
            <button
               onClick={handleNextPage}
               className="transition-all hover:text-color-accent underline"
            >
               Next
            </button>
         ) : null}
      </div>
   );
};

export default Pagination;
