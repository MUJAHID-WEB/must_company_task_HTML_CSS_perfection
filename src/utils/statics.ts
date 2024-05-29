import { selectOptionType } from './types';

export const categories: string[] = [
  '기본정보 관리',
  '투자유형 관리',
  '입출금내역 조회',
  '영업내역 조회',
  '투자내역 조회',
  '채권내역 조회',
  'SMS 관리',
  '상담내역 관리',
  '1:1문의내역 조회',
];

export const filterOptions: selectOptionType[] = [
  {
    value: '승인여부 전체',
    title: '승인여부 전체',
  },
  {
    value: '승인대기',
    title: '승인대기',
  },
  {
    value: '승인완료',
    title: '승인완료',
  },
  {
    value: '승인거부',
    title: '승인거부',
  },
];

export const sortOptions: selectOptionType[] = [
  {
    title: '신청일시순',
    value: '신청일시순',
  },
  {
    title: '승인일시순',
    value: '승인일시순',
  },
];

export const viewLimitOptions: { title: string; value: number }[] = [
  {
    title: '50개씩 보기',
    value: 50,
  },
  {
    title: '250개씩 보기',
    value: 250,
  },
  {
    title: '100개씩 보기',
    value: 100,
  },
];

export const statusOption: selectOptionType[] = [
  {
    title: '승인상태 변경',
    value: '',
  },
  {
    title: '신청일시순',
    value: '신청일시순',
  },
  {
    title: '승인일시순',
    value: '승인일시순',
  },
];

