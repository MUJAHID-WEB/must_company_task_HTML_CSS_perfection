type contextStates = {
  dataLimit: number;
  currentPage: number;
  pageLimit: number;
  sortingAttribute: string;
  selectedData: string[];
  rejectionModalView: boolean;
  alertModalState: alertModalStateType;
  investmentModalView: boolean;
  investmentDocs: File[];
  visibleArr: tableDataType[];
};

export type alertModalStateType = {
  visibleState: boolean;
  text: string;
  type?: string;
  cancellable?: boolean;
  cancelAction?: (e?: any) => void;
  approveAction?: (e?: any) => void;
};

export type buttonProps = {
  isLarge?: true;
  actionCb: () => void;
  title: string;
  variant?: 'outlined';
};

export interface contextType extends contextStates {
  setDataLimit: (e: number) => void;
  setCurrentPage: (e: contextType['currentPage']) => void;
  setSortingAttribute: (e: contextType['sortingAttribute']) => void;
  setSelectedData: (e: contextType['selectedData']) => void;
  setAlertModalState: (e: alertModalStateType) => void;
  setRejectionModalView: (e: contextType['rejectionModalView']) => void;
  setInvestmentModalView: (e: contextType['investmentModalView']) => void;
  setInvestmentDocs: (e: contextType['investmentDocs']) => void;
}

export type tableDataType = {
  [key: string]: { title: string; size: string } | any;
};

export type selectOptionType = { title: string; value: string | number };

export type selectComponentProps = {
  dataArr: selectOptionType[];
  onChangeOptionCb: (e: selectOptionType) => void;
  className?: string;
  bodyClassName?: string;
};

