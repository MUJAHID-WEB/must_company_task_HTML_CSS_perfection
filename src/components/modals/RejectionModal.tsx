import { Dialog, Transition } from '@headlessui/react';
import { FC, Fragment, useContext, useState } from 'react';
import Dot from '../Dot.tsx';
import Button from '../Button.tsx';
import { BaseContext } from '../../App.tsx';
import React from 'react';

const RejectionModal: FC = () => {
  const [checkedValue, setCheckedValue] = useState<string[]>([]);
  const [noteText, setNoteText] = useState<string>('');

  const {
    setAlertModalState,
    setSelectedData,
    setRejectionModalView,
    rejectionModalView,
  } = useContext(BaseContext);

  const closeModal = () => {
    setRejectionModalView(false);
  };

  return (
    <Transition appear show={rejectionModalView} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-[800px] flex flex-col justify-start items-start transform rounded-xl shadow-[#1018281A]/10 bg-white text-left align-middle shadow-xl transition-all'>
                <div className='w-full flex justify-between items-center p-6 pb-5 '>
                  <h4 className=''>승인거부 사유 입력</h4>

                  <button type='button' onClick={closeModal}>
                    <i className='fa-solid fa-xmark'></i>
                  </button>
                </div>
                <div className='py-5 px-6 w-full border-y border-[#D7D8DA] '>
                  <div className='w-full border border-[#D7D8DA] mb-3 flex flex-col justify-start items-start '>
                    <div className='w-full flex flex-row justify-start items-start text-[#0B101A] '>
                      <p className='w-[21.27%] text-base leading-none font-medium p-4 bg-[#EEF0F4] border-b border-b-white '>
                        회원번호
                      </p>
                      <p className='text-sm leading-4 w-[78.72%] flex flex-row flex-wrap py-4 px-5 bg-white border-b border-b-[#D7D8DA] '>
                        abc111, abc111, abc111, abc111, abc111
                      </p>
                    </div>{' '}
                    <div className='w-full flex flex-row justify-start items-start text-[#0B101A] '>
                      <p className='w-[21.27%] text-base leading-none font-medium p-4 bg-[#EEF0F4] border-b border-b-white '>
                        회원명/법인명
                      </p>
                      <p className='text-sm leading-4 w-[78.72%] flex flex-row flex-wrap py-4 px-5 bg-white border-b border-b-[#D7D8DA] '>
                        김길동, ㈜가나다라투자
                      </p>
                    </div>
                    <div className='w-full flex flex-row justify-start relative items-start text-[#0B101A] '>
                      <div className='w-[21.27%] flex items-center absolute h-full inset-y-0 justify-left text-base leading-none font-medium p-4 bg-[#EEF0F4] '>
                        <p className=''>승인거부 사유</p>
                        <span className='-mt-1 ml-1'>
                          <Dot />
                        </span>
                      </div>
                      <div className='w-[78.72%] ml-auto gap-2 flex flex-col justify-start items-start flex-wrap px-5 py-4 bg-white'>
                        <label
                          htmlFor={'서류식별불가'}
                          className='relative flex flex-row justify-start items-center gap-2 group'
                        >
                          <input
                            type='checkbox'
                            onChange={(e) => {
                              const tempArr = [...checkedValue];
                              if (e.target.checked) {
                                setCheckedValue([...tempArr, e.target.value]);
                              } else {
                                setCheckedValue(
                                  tempArr.filter(
                                    (item) => item !== e.target.value
                                  )
                                );
                              }
                            }}
                            value='서류식별불가'
                            id='서류식별불가'
                            className='opacity-0 -z-10 absolute w-0 h-0 peer'
                          />
                          <span className='w-4 h-4 flex mx-auto rounded bg-white text-white shadow border border-[#D7D8DA] peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-disabled:bg-[#DDE0E5] peer-disabled:text-[#DDE0E5] text-[10px] '>
                            <i className='fa-solid m-auto fa-check'></i>
                          </span>
                          <p className='text-sm leading-4 font-normal text-[#0B101A]'>
                            서류 식별 불가
                          </p>
                        </label>
                        <label
                          htmlFor={'필수서류누락'}
                          className='relative flex flex-row justify-start items-center gap-2 group'
                        >
                          <input
                            type='checkbox'
                            onChange={(e) => {
                              const tempArr = [...checkedValue];
                              if (e.target.checked) {
                                setCheckedValue([...tempArr, e.target.value]);
                              } else {
                                setCheckedValue(
                                  tempArr.filter(
                                    (item) => item !== e.target.value
                                  )
                                );
                              }
                            }}
                            value='필수서류누락'
                            id='필수서류누락'
                            className='opacity-0 -z-10 absolute w-0 h-0 peer'
                          />
                          <span className='w-4 h-4 flex mx-auto rounded bg-white text-white shadow border border-[#D7D8DA] peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-disabled:bg-[#DDE0E5] peer-disabled:text-[#DDE0E5] text-[10px] '>
                            <i className='fa-solid m-auto fa-check'></i>
                          </span>
                          <p className='text-sm leading-4 font-normal text-[#0B101A]'>
                            필수 서류 누락
                          </p>
                        </label>
                        <label
                          htmlFor={'서류의내용이등록된회원정보와다름'}
                          className='relative flex flex-row justify-start items-center gap-2 group'
                        >
                          <input
                            type='checkbox'
                            onChange={(e) => {
                              const tempArr = [...checkedValue];
                              if (e.target.checked) {
                                setCheckedValue([...tempArr, e.target.value]);
                              } else {
                                setCheckedValue(
                                  tempArr.filter(
                                    (item) => item !== e.target.value
                                  )
                                );
                              }
                            }}
                            value='서류의내용이등록된회원정보와다름'
                            id='서류의내용이등록된회원정보와다름'
                            className='opacity-0 -z-10 absolute w-0 h-0 peer'
                          />
                          <span className='w-4 h-4 flex mx-auto rounded bg-white text-white shadow border border-[#D7D8DA] peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-disabled:bg-[#DDE0E5] peer-disabled:text-[#DDE0E5] text-[10px] '>
                            <i className='fa-solid m-auto fa-check'></i>
                          </span>
                          <p className='text-sm leading-4 font-normal text-[#0B101A]'>
                            서류의 내용이 등록된 회원정보와 다름
                          </p>
                        </label>
                        <label
                          htmlFor={'서류에'}
                          className='relative flex flex-row justify-start items-center gap-2 group'
                        >
                          <input
                            type='checkbox'
                            onChange={(e) => {
                              const tempArr = [...checkedValue];
                              if (e.target.checked) {
                                setCheckedValue([...tempArr, e.target.value]);
                              } else {
                                setCheckedValue(
                                  tempArr.filter(
                                    (item) => item !== e.target.value
                                  )
                                );
                              }
                            }}
                            value='서류에'
                            id='서류에'
                            className='opacity-0 -z-10 absolute w-0 h-0 peer'
                          />
                          <span className='w-4 h-4 flex mx-auto rounded bg-white text-white shadow border border-[#D7D8DA] peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-disabled:bg-[#DDE0E5] peer-disabled:text-[#DDE0E5] text-[10px] '>
                            <i className='fa-solid m-auto fa-check'></i>
                          </span>
                          <p className='text-sm leading-4 font-normal text-[#0B101A]'>
                            서류에 누락된 내용이 있음 (필수정보, 회사직인,
                            본인날인, 본인서명 등)
                          </p>
                        </label>
                        <label
                          htmlFor={'유효기간이'}
                          className='relative flex flex-row justify-start items-center gap-2 group'
                        >
                          <input
                            type='checkbox'
                            onChange={(e) => {
                              const tempArr = [...checkedValue];
                              if (e.target.checked) {
                                setCheckedValue([...tempArr, e.target.value]);
                              } else {
                                setCheckedValue(
                                  tempArr.filter(
                                    (item) => item !== e.target.value
                                  )
                                );
                              }
                            }}
                            value='유효기간이'
                            id='유효기간이'
                            className='opacity-0 -z-10 absolute w-0 h-0 peer'
                          />
                          <span className='w-4 h-4 flex mx-auto rounded bg-white text-white shadow border border-[#D7D8DA] peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-disabled:bg-[#DDE0E5] peer-disabled:text-[#DDE0E5] text-[10px] '>
                            <i className='fa-solid m-auto fa-check'></i>
                          </span>
                          <p className='text-sm leading-4 font-normal text-[#0B101A]'>
                            서류의 유효기간이 초과됨
                          </p>
                        </label>
                        <label
                          htmlFor={'직접입력'}
                          className='relative flex flex-row justify-start items-center gap-2 group'
                        >
                          <input
                            type='checkbox'
                            onChange={(e) => {
                              const tempArr = [...checkedValue];
                              if (e.target.checked) {
                                setCheckedValue([...tempArr, e.target.value]);
                              } else {
                                setCheckedValue(
                                  tempArr.filter(
                                    (item) => item !== e.target.value
                                  )
                                );
                              }
                            }}
                            value='직접입력'
                            id='직접입력'
                            className='opacity-0 -z-10 absolute w-0 h-0 peer'
                          />
                          <span className='w-4 h-4 flex mx-auto rounded bg-white text-white shadow border border-[#D7D8DA] peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-disabled:bg-[#DDE0E5] peer-disabled:text-[#DDE0E5] text-[10px] '>
                            <i className='fa-solid m-auto fa-check'></i>
                          </span>
                          <p className='text-sm leading-4 font-normal text-[#0B101A]'>
                            직접 입력
                          </p>
                        </label>{' '}
                        <textarea
                          rows={6}
                          value={noteText}
                          onChange={(e) => setNoteText(e.target.value)}
                          className='resize-none w-full p-3 rounded-lg border border-[#D7D8DA] disabled:bg-[#DDE0E5] disabled:text-[#B1B4BB] '
                          disabled={!checkedValue.includes('직접입력')}
                          placeholder='사유 입력'
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex w-full py-6 justify-center gap-3 '>
                  <Button
                    title='확인'
                    actionCb={() => {
                      if (
                        (checkedValue.includes('직접입력') && noteText) ||
                        checkedValue.length
                      ) {
                        setAlertModalState({
                          text: '선택된 2명의 승인상태를 변경하시겠습니까?',
                          cancellable: true,
                          cancelAction: () => {
                            setRejectionModalView(false);
                          },
                          approveAction: () => {
                            setSelectedData([]);
                            setRejectionModalView(false);
                            setTimeout(() => {
                              setAlertModalState({
                                type: 'success',
                                text: '저장되었습니다.',
                                visibleState: true,
                              });
                            }, 500);
                          },
                          visibleState: true,
                        });
                      } else {
                        setAlertModalState({
                          text: '필수입력항목을 입력해주세요.',
                          visibleState: true,
                        });
                      }
                    }}
                  />

                  <Button
                    variant='outlined'
                    title='취소'
                    actionCb={() => {
                      closeModal();
                    }}
                  />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default RejectionModal;

