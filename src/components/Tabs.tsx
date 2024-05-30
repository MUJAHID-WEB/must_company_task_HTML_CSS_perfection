import { Tab } from '@headlessui/react';
import { categories } from '../utils/statics.ts';
import React from 'react';

const Tabs = () => {
  return (
    <>
      <Tab.Group>
        <Tab.List className='flex flex-wrap justify-center w-full'>
          {categories.map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                `w-[130px] xl:first:rounded-l-lg xl:last:rounded-r-lg py-2.5 mb-2 text-sm leading-5
                  ${
                    selected
                      ? 'text-white bg-[#2A3958] font-medium'
                      : 'bg-[#EBEEF3] text-[#B1B4BB] font-normal'
                  }`
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
   
      </Tab.Group>
    </>
  );
};

export default Tabs;

