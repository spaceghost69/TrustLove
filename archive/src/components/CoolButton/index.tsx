import React from 'react';

import "./index.css";

/*

primary'
'secondary'
'success'
'danger'
'warning'
'info'
'light'
'dark'

*/
interface CoolButtonProps {
  children: any;
  variant: string;
  onClick: any;
}

const CoolButton: React.FC<CoolButtonProps> = ({ children, variant, onClick }) => {
  
  return(
    <button
        onClick={(event) => onClick(event)}
        className={variant}
    >{children}</button>
  )
}

export default CoolButton;