import { FC } from 'react';
import { buttonProps } from '../utils/types';
import React from 'react';

const Button: FC<buttonProps> = ({ title, actionCb, isLarge, variant }) => {
  return (
    <button
      className={`px-4 rounded-[10px] border border-[#2A3958] ${
        isLarge ? 'py-[12.5px] w-[170px]' : 'py-2 w-[100px]'
      } ${
        variant === 'outlined'
          ? 'bg-transparent bg-[#2A3958]'
          : 'bg-[#2A3958] text-white'
      } `}
      onClick={actionCb}
      type='button'
    >
      {title}
    </button>
  );
};

export default Button;

