import { useContext, useEffect, useState } from 'react';
import { BaseContext } from '../App.tsx';
import React from 'react';

const Pagination = () => {
  const { currentPage, pageLimit, setCurrentPage } = useContext(BaseContext);

  const [pageArr, setPageArr] = useState([pageLimit]);

  useEffect(() => {
    let tempArr: number[] = [];
    let increment = currentPage + 1;
    let decrement = currentPage - 1;
    tempArr.unshift(currentPage);
    if (currentPage === 1) {
      while (increment <= Math.min(pageLimit, 10)) {
        tempArr.push(increment);
        increment++;
      }
      setPageArr(tempArr);
    } else if (currentPage - 8 >= 1 && currentPage + 5 <= pageLimit) {
      while (currentPage + 5 >= increment && currentPage - 5 <= decrement) {
        tempArr.push(increment);
        tempArr.unshift(decrement);
        increment++;
        decrement--;
      }

      setPageArr(tempArr);
    } else if (currentPage > pageLimit - 5 && currentPage < pageLimit) {
      tempArr = [...pageArr];
      let tempVar = pageArr[pageArr.length - 1];
      while (tempVar < pageLimit) {
        tempArr.push(tempVar + 1);
        tempVar++;
      }
      setPageArr(tempArr);
    }
  }, [pageLimit, currentPage]);

  return (
    <div className='flex w-full flex-row justify-center py-3 gap-4 '>
      <button
        type='button'
        disabled={currentPage === 1}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setCurrentPage(1);
        }}
        className={`w-10 h-10 rounded justify-center flex items-center hover:text-white hover:bg-[#2A3958]/60 text-[#A1A1A1] disabled:hover:bg-white disabled:hover:text-[#a1a1a1] disabled:cursor-not-allowed `}
      >
        &lt;&lt;
      </button>
      <button
        type='button'
        disabled={currentPage === 1}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setCurrentPage(currentPage - 1);
        }}
        className={`w-10 h-10 rounded justify-center flex items-center hover:text-white hover:bg-[#2A3958]/60 text-[#A1A1A1] disabled:hover:bg-white disabled:hover:text-[#a1a1a1] disabled:cursor-not-allowed `}
      >
        &lt;
      </button>
      {pageArr.map((el) => (
        <button
          key={el}
          type='button'
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setCurrentPage(el);
          }}
          className={`w-10 h-10 rounded justify-center flex items-center hover:text-white hover:bg-[#2A3958]/60 ${
            currentPage === el
              ? 'bg-[#2A3958] hover:bg-[#2A3958] text-white'
              : 'text-[#A1A1A1]'
          } `}
        >
          {el}
        </button>
      ))}
      <button
        type='button'
        disabled={currentPage === pageLimit}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setCurrentPage(currentPage + 1);
        }}
        className={`w-10 h-10 rounded justify-center flex items-center hover:text-white hover:bg-[#2A3958]/60 text-[#A1A1A1] disabled:hover:bg-white disabled:hover:text-[#a1a1a1] disabled:cursor-not-allowed`}
      >
        &gt;
      </button>
      <button
        type='button'
        disabled={currentPage === pageLimit}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          const tempArr: number[] = [];
          let count = pageLimit;
          while (count >= pageLimit - 10) {
            tempArr.unshift(count);
            count--;
          }
          setPageArr(tempArr);
          setCurrentPage(pageLimit);
        }}
        className={`w-10 h-10 rounded justify-center flex items-center hover:text-white hover:bg-[#2A3958]/60 text-[#A1A1A1] disabled:hover:bg-white disabled:hover:text-[#a1a1a1] disabled:cursor-not-allowed`}
      >
        &gt;&gt;
      </button>
    </div>
  );
};

export default Pagination;

