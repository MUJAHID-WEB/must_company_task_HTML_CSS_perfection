import { Dialog, Transition } from '@headlessui/react';
import { FC, Fragment, useContext, useRef } from 'react';
import Dot from '../Dot.tsx';
import Button from '../Button.tsx';
import SelectBox from '../SelectBox.tsx';
import { BaseContext } from '../../App.tsx';
import React from 'react';

const ChangeInvestmentTypeModal: FC = () => {
  const {
    investmentModalView,
    setInvestmentModalView,
    investmentDocs,
    setInvestmentDocs,
    setAlertModalState,
  } = useContext(BaseContext);
  const closeModal = () => {
    setInvestmentModalView(false);
  };
  const fileRef = useRef<HTMLInputElement>(null);

  return (
    <Transition appear show={investmentModalView} as={Fragment}>
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
                  <h4 className=''>투자유형 변경</h4>

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
                        김길동
                      </p>
                    </div>
                    <div className='w-full flex flex-row justify-start items-start text-[#0B101A] '>
                      <div className='w-[21.27%] flex justify-left text-base leading-none font-medium p-4 bg-[#EEF0F4] '>
                        <p className=''>투자유형</p>
                        <span className='-mt-1 ml-1'>
                          <Dot />
                        </span>
                      </div>
                      <div className='w-[78.72%] flex flex-row flex-wrap px-2 py-1.5 bg-white '>
                        <SelectBox
                          className='!w-[47.64%]'
                          bodyClassName='!py-[7px]'
                          dataArr={[
                            { title: '일반개인', value: '일반개인' },
                            { title: '소득적격', value: '소득적격' },
                            { title: '개인전문', value: '개인전문' },
                            { title: '법인', value: '법인' },
                            { title: '여신금융', value: '여신금융' },
                            { title: 'P2P온투', value: 'P2P온투' },
                          ]}
                          onChangeOptionCb={() => {}}
                        />
                      </div>
                    </div>
                    <div className='w-full flex flex-row justify-start items-start text-[#0B101A] '>
                      <div className='w-[21.27%] flex justify-left text-base leading-none font-medium p-4 bg-[#EEF0F4] '>
                        <p className=''>서류첨부</p>
                        <span className='-mt-1 ml-1'>
                          <Dot />
                        </span>
                      </div>
                      <div className='w-[78.72%] flex flex-row flex-wrap px-2 py-1 bg-white '>
                        <button
                          onClick={() => {
                            fileRef.current?.click();
                          }}
                          className='py-2.5 px-3 text-sm leading-4 relative bg-[#EBEEF3] border border-[#D7D8DA] rounded-lg mr-2 '
                        >
                          파일 선택
                        </button>
                        {investmentDocs?.map((file, id) => (
                          <div
                            className='flex gap-1 items-center'
                            key={file?.name + (Math.random() * 10).toString()}
                          >
                            <p className='text-[#5A616A]'>{file?.name}</p>
                            <button
                              onClick={() => {
                                const tempArr = [...investmentDocs];
                                tempArr.splice(id, 1);
                                setInvestmentDocs(tempArr);
                              }}
                            >
                              <i className='fa-solid fa-circle-xmark text-[#DDE0E5] '></i>
                            </button>
                          </div>
                        ))}
                        <input
                          ref={fileRef}
                          type='file'
                          name='image-uploader'
                          id='image-uploader'
                          multiple
                          className='opacity-0 w-0 h-0 '
                          onChange={(e) => {
                            const files = e.target.files
                              ? Object.values(e.target.files)
                              : [];

                            const largeFile = files.find(
                              (file) => file.size > 10000000
                            );

                            const invalidFormat = files.find(
                              (file) =>
                                ![
                                  'image/jpeg',
                                  'image/jpg',
                                  'image/gif',
                                  'image/png',
                                  'application/pdf',
                                ].includes(file.type)
                            );

                            if (invalidFormat) {
                              setAlertModalState({
                                visibleState: true,
                                text: 'jpg, jpeg, gif, png, pdf 파일만 등록 가능합니다.',
                              });
                            } else if (largeFile) {
                              setAlertModalState({
                                text: '최대 100MB까지 등록 가능합니다.',
                                visibleState: true,
                              });
                            } else {
                              let count = 0;
                              let currentLength = investmentDocs.length;
                              if (currentLength >= 10) {
                                console.log(
                                  'File Limit Exceed!',
                                  investmentDocs
                                );

                                setAlertModalState({
                                  text: '최대 10개까지 등록 가능합니다.',
                                  visibleState: true,
                                });
                              } else {
                                const tempArr = [...investmentDocs];
                                while (currentLength <= 10 && files[count]) {
                                  tempArr.push(files[count]);
                                  currentLength++;
                                  count++;
                                }
                                setInvestmentDocs(tempArr);
                              }
                            }
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex w-full py-6 justify-center gap-3 '>
                  <Button
                    title='확인'
                    actionCb={() => {
                      closeModal();
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

export default ChangeInvestmentTypeModal;

