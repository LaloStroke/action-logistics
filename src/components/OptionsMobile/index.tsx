import React from "react";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";

const OptionsMobile: React.FC<{
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ onClose }): JSX.Element => {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-slate-500 flex flex-col items-center">
      <button onClick={() => onClose(false)} className="w-12 self-end h-12">
        <p className="items-center justify-center flex">
          <GrClose />
        </p>
      </button>
      <div>
        <Link to="/Home">
          <h1>Assets</h1>
        </Link>
      </div>
      <div>
        <Link to="/Transactions">
          <h1>Transactions</h1>
        </Link>
      </div>
      <div>
        <Link to="/Catalogs">
          <h1>Catalogs</h1>
        </Link>
      </div>
      <div>
        <Link to="/Configs">
          <h1>Configs</h1>
        </Link>
      </div>
    </div>
  );
};

export default OptionsMobile;
