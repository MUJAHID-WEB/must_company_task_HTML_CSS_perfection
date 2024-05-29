import { Tab } from '@headlessui/react';
import { categories } from '../utils/statics.ts';
import React from 'react';

const Tabs = () => {
  return (
    <>
      <Tab.Group>
        <Tab.List className='flex w-full'>
          {categories.map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                `w-[130px] first:rounded-l-lg last:rounded-r-lg py-2.5 text-sm leading-5
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
        <Tab.Panels className='mt-2'>
          <Tab.Panel className='rounded-xl bg-white p-3ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'>
            <ul>
              <li className='relative rounded-md p-3 hover:bg-gray-100'>
                <a
                  href='#'
                  className='absolute inset-0 rounded-md ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                />
              </li>
            </ul>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
};

export default Tabs;

