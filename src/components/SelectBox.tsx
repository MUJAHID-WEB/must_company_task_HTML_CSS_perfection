import { FC, Fragment, useState } from 'react';
import { selectComponentProps, selectOptionType } from '../utils/types';
import { Listbox, Transition } from '@headlessui/react';
import React from 'react';

const SelectBox: FC<selectComponentProps> = ({
  dataArr,
  onChangeOptionCb,
  className = '',
  bodyClassName = '',
}) => {
  const [selected, setSelected] = useState<selectOptionType>(dataArr[0]);
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <div className={`relative w-[150px] ${className} `}>
          <Listbox.Button
            className={`w-full flex justify-between items-center py-2.5 cursor-pointer rounded-lg bg-white px-3 text-left border sm:text-sm ${bodyClassName} `}
          >
            <span className='block truncate'>{selected.title}</span>
            <i
              className={`fa-solid ${open ? 'fa-angle-up' : 'fa-angle-down'} `}
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg'>
              {dataArr.map((option, optionIdx) => (
                <Listbox.Option
                  key={optionIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'text-white bg-[#2A3958]/60' : 'text-[#B1B4BB]'
                    } ${
                      selected.value === option.value
                        ? '!bg-[#2A3958] text-white'
                        : ''
                    } `
                  }
                  value={option}
                  onClick={() => {
                    onChangeOptionCb?.(option);
                  }}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {option.title}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  );
};

export default SelectBox;

