import React, { useState, useRef, useEffect } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import useOnClickOutside from '../../hooks/useOnClickOutside/useOnClickOutside';
import {
  setSidebarOpen,
  setAssetsSelected,
  setTransactionSelected,
  setConfigSelected,
  setCatalogSelected,
} from '@/store/services/slice/appSlice';
import { useDispatch } from 'react-redux';
import SelectOptions from '../../constants/selectOptions';
import './sidebar.css';
import SelectOption from '../Select/SelectOption/SelectOption';
import Select from '../Select';

const Sidebar: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleOutsideOpen = () => {
    setIsOpen(false);
  };
  const sidebarRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(sidebarRef, handleOutsideOpen);

  const handleStyles = isOpen ? 'open' : 'close';
  const handleAssets = (value: Assets): void => {
    dispatch(setAssetsSelected(value));
  };
  const handleTransactions = (value: Transactions): void => {
    dispatch(setTransactionSelected(value));
  };
  const handleConfigs = (value: ConfigPoints): void => {
    dispatch(setConfigSelected(value));
  };
  const handleCatalogs = (value: CatalogPoints): void => {
    dispatch(setCatalogSelected(value));
  };

  const Assets = SelectOptions.get('Assets');
  const Transactions = SelectOptions.get('Transactions');
  const Configs = SelectOptions.get('ConfigPoints');
  const Catalogs = SelectOptions.get('CatalogPoints');
  useEffect(() => {
    dispatch(setSidebarOpen(isOpen));
  }, [isOpen]);
  return (
    <div className={handleStyles} ref={sidebarRef} onClick={handleOpen}>
      Sidebar
      <div>
        <Select
          defaultValue={'All Assets'}
          staticPlaceholder={'Assets'}
          selectHandler={handleAssets}
          placeholder="Assets"
        >
          {(Assets as string[]).map((Assets) => (
            <CustomLink to={`/Assets/${Assets == 'All Assets' ? 'all' : Assets}`} key={Assets}>
              <SelectOption value={Assets}>{Assets}</SelectOption>
            </CustomLink>
          ))}
        </Select>
      </div>
      <div>
        <Select
          defaultValue={'Due'}
          staticPlaceholder={'Transactions'}
          selectHandler={handleTransactions}
          placeholder="Transactions"
          className=""
          optionsStyle=""
        >
          {(Transactions as string[]).map((Transactions) => (
            <CustomLink to={`/Transactions/${Transactions}`} key={Transactions}>
              <SelectOption value={Transactions}>{Transactions}</SelectOption>
            </CustomLink>
          ))}
        </Select>
      </div>
      <div>
        <Select
          defaultValue={'Locations'}
          staticPlaceholder={'Catalogs'}
          selectHandler={handleCatalogs}
          placeholder="Catalogs"
          className=""
          optionsStyle=""
        >
          {(Catalogs as string[]).map((Catalogs) => (
            <CustomLink to={`/create/Catalogs/${Catalogs}`} key={Catalogs}>
              <SelectOption value={Catalogs}>{Catalogs}</SelectOption>
            </CustomLink>
          ))}
        </Select>
      </div>
      <div>
        <Select
          defaultValue={'Locations'}
          staticPlaceholder={'Configs'}
          selectHandler={handleConfigs}
          placeholder="Configs"
          className=""
          optionsStyle=""
        >
          {(Configs as string[]).map((Configs) => (
            <CustomLink to={`/Configs/${Configs}`} key={Configs}>
              <SelectOption value={Configs}>{Configs}</SelectOption>
            </CustomLink>
          ))}
        </Select>
      </div>
    </div>
  );
};

const CustomLink: React.FC<{
  to: string;
  children: JSX.Element;
  className?: string;
}> = ({ to, children, className }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <Link className={`${className ? className : 'duration-300 w-28 h-full'} `} to={to}>
      <div
        className={`grid place-content-center px-4 h-full duration-300 cursor-pointer  ${
          isActive ? 'bg-lightOrange duration-300 font-bold hover:tracking-normal' : ''
        }`}
      >
        {children}
      </div>
    </Link>
  );
};

export default Sidebar;
