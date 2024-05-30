import { createContext, useEffect, useState } from 'react';
import Dot from './components/Dot.tsx';
import Pagination from './components/Pagination.tsx';
import SelectBox from './components/SelectBox.tsx';
import Tabs from './components/Tabs.tsx';

import {
  filterOptions,
  sortOptions,
  statusOption,
  viewLimitOptions,
} from './utils/statics.ts';
import tableData from './utils/tableData.ts';
import Table from './components/Table.tsx';
import { alertModalStateType, contextType, tableDataType } from './utils/types.ts';
import AlertModal from './components/modals/AlertModal.tsx';
import RejectionModal from './components/modals/RejectionModal.tsx';
import ChangeInvestmentTypeModal from './components/modals/ChangeInvestmentType.tsx';
import moment from 'moment';
import React from 'react';
import Button from './components/Button.tsx';

export const BaseContext = createContext<contextType>({
  setDataLimit: () => {},
  dataLimit: 1,
  currentPage: 1,
  pageLimit: 1,
  setCurrentPage: () => {},
  sortingAttribute: '',
  setSortingAttribute: () => {},
  selectedData: [],
  setSelectedData: () => {},
  visibleArr: [],
  alertModalState: { visibleState: false, text: '' },
  setAlertModalState: () => {},
  rejectionModalView: false,
  setRejectionModalView: () => {},
  investmentModalView: false,
  setInvestmentModalView: () => {},
  investmentDocs: [],
  setInvestmentDocs: () => {},
});

function App() {
  const [dataLimit, setDataLimit] = useState<number>(viewLimitOptions[0].value);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageLimit, setPageLimit] = useState<number>(1);
  const [sortingAttribute, setSortingAttribute] = useState<string>('');
  const [selectedData, setSelectedData] = useState<string[]>([]);
  const [visibleArr, setVisibleArr] = useState<tableDataType[]>([]);
  const [alertModalState, setAlertModalState] = useState<alertModalStateType>({
    visibleState: false,
    text: '',
  });
  const [rejectionModalView, setRejectionModalView] = useState(false);
  const [investmentModalView, setInvestmentModalView] = useState(false);
  const [investmentDocs, setInvestmentDocs] = useState<File[]>([]);
  const [filterValue, setFilterValue] = useState<string>(
    filterOptions[0].value.toString()
  );
  const [sortValue, setSortValue] = useState<string>(
    sortOptions[0].value.toString()
  );

  useEffect(() => {
    const tempNestedArr: any[][] = [];
    let filteredArr: tableDataType[] = [];
    /**
     * Filter Condition
     */
    if (filterValue === '승인여부 전체') {
      filteredArr = [...tableData];
    } else if (filterValue === '승인대기') {
      filteredArr = tableData.filter(
        (item) => item.승인여부.title === '승인대기'
      );
    } else if (filterValue === '승인완료') {
      filteredArr = tableData.filter(
        (item) => item.승인여부.title === '승인완료'
      );
    } else if (filterValue === '승인거부') {
      filteredArr = tableData.filter(
        (item) => item.승인여부.title === '승인거부'
      );
    }

    /**
     * Sort Condition
     */

    if (sortValue === '신청일시순') {
      console.log('sort triggered 1st');

      filteredArr.sort((first, second) => {
        const sortResult =
          moment(first.신청일시.title).valueOf() -
          moment(second.신청일시.title).valueOf();

        return sortResult;
      });
    } else if (sortValue === '승인일시순') {
      console.log('sort triggered 2nd');

      filteredArr.sort((first, second) => {
        const sortResult =
          moment(first.승인일시.title).valueOf() -
          moment(second.승인일시.title).valueOf();

        return sortResult;
      });
    }

    const tempData = [...filteredArr];
    if (tempData.length > dataLimit) {
      for (let i = 0; i < tempData.length; i += dataLimit) {
        const chunk = tempData.slice(i, i + dataLimit);
        tempNestedArr.push(chunk);
      }

      setVisibleArr(tempNestedArr[currentPage - 1]);
      setPageLimit(tempNestedArr.length);
    } else {
      setVisibleArr([tempData]);
    }
  }, [dataLimit, currentPage, filterValue, sortValue]);
  return (
    <BaseContext.Provider
      value={{
        setDataLimit,
        dataLimit,
        currentPage,
        pageLimit,
        setCurrentPage,
        sortingAttribute,
        setSortingAttribute,
        selectedData,
        setSelectedData,
        visibleArr,
        alertModalState,
        setAlertModalState,
        rejectionModalView,
        setRejectionModalView,
        investmentModalView,
        setInvestmentModalView,
        investmentDocs,
        setInvestmentDocs,
      }}
    >
      <>
        <section className='container py-6 flex flex-col flex-wrap justify-start items-start '>
          <div className='flex w-full py-3 border-transparent border border-b-[#D7D8DA] flex-row items-center justify-start gap-6 '>
            <h1 className='text-[#0B101A] text-2xl font-bold leading-7 '>
              회원상세
            </h1>
            <p className='text-[#FF4D4F] relative font-medium text-sm leading-4 '>
              <span className='absolute -top-0.5 -left-2'>
                <Dot />
              </span>
              필수항목
            </p>
          </div>
          <div className='py-3 mb-[21px] w-full flex flex-wrap justify-start items-start '>
            <Tabs />
          </div>
          <div className='w-full flex flex-col gap-2 justify-start items-start md:flex-row md:items-center border border-transparent border-b-[#D7D8DA] md:justify-between py-3 '>
            <div className='flex justify-start items-center gap-2'>
              <h2 className='font-semibold text-xl text-[#0B101A] '>
                신청 목록
              </h2>
              <p className='font-medium text-sm leading-4 text-[#5A616A]'>
                (총 {tableData.length}명 | 승인대기&nbsp;
                <span className='text-[#FF4D4F] underline'>
                  {
                    tableData.filter(
                      (item) => item.승인여부.title === '승인대기'
                    ).length
                  }
                </span>
                건)
              </p>
            </div>
            <div className='flex flex-wrap justify-start items-center gap-1 '>
              <SelectBox
                dataArr={filterOptions}
                onChangeOptionCb={(e) => {
                  setFilterValue(e.value.toString());
                }}
              />
              <SelectBox
                dataArr={sortOptions}
                onChangeOptionCb={(e) => {
                  setSortValue(e.value.toString());
                }}
              />
              <SelectBox
                dataArr={viewLimitOptions}
                onChangeOptionCb={(e) => {
                  setDataLimit(parseInt(e.value.toString()));
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>
          <div className='w-full flex flex-col gap-2 justify-end items-end sm:flex-row sm:justify-between py-3 sm:items-center '>
            <Button
              actionCb={() => setInvestmentModalView(true)}
              title='등록'
            />

            <div className='flex flex-wrap gap-2 justify-end items-center'>
              <p className='text-[#5A616A] text-sm mr-4 whitespace-nowrap leading-[16px] '>
                선택한 {selectedData.length}건
              </p>

              <SelectBox
                dataArr={statusOption}
                onChangeOptionCb={() => {
                  if (!selectedData.length) {
                    const tempObj: alertModalStateType = {
                      ...alertModalState,
                      text: '선택된 신청건이 없습니다.',
                      type: 'warn',
                      visibleState: true,
                    };
                    setAlertModalState(tempObj);
                  }
                }}
              />
              <Button
                actionCb={() => {
                  if (selectedData.length) {
                    const selectedTableData = tableData.filter((item) =>
                      selectedData.includes(item.id)
                    );
                    const hasApprovedUsers = selectedTableData.find(
                      (item) => item.승인여부.title === '승인완료'
                    );
                    const hasRejectedUsers = selectedTableData.find(
                      (item) => item.승인여부.title === '승인거부'
                    );
                    if (hasApprovedUsers) {
                      const tempObj: alertModalStateType = {
                        ...alertModalState,
                        text: '이미 승인 완료된 회원입니다.',
                        type: 'warn',
                        visibleState: true,
                      };
                      setAlertModalState(tempObj);
                    } else if (hasRejectedUsers) {
                      const tempObj: alertModalStateType = {
                        ...alertModalState,
                        text: '이미 승인 거부된 회원입니다.',
                        type: 'warn',
                        visibleState: true,
                      };
                      setAlertModalState(tempObj);
                    } else {
                      setRejectionModalView(true);
                    }
                  } else {
                    const tempObj: alertModalStateType = {
                      ...alertModalState,
                      text: '선택된 신청건이 없습니다.',
                      type: 'warn',
                      visibleState: true,
                    };
                    setAlertModalState(tempObj);
                  }
                }}
                title='저장'
              />
            </div>
          </div>
          <Table />
          <Pagination />
        </section>
        <AlertModal />
        <ChangeInvestmentTypeModal />
        <RejectionModal />
      </>
    </BaseContext.Provider>
  );
}

export default App;

