import React from 'react';


function Header ({dashState, setState}) {
    
  return (
      <div className="header">
          <h5 className={`nav_btn ${dashState === 'potd' ? 'active' : ''}`} onClick={() => setState('potd')}>POTD</h5 >
          <h5 className={`nav_btn ${dashState === 'favs' ? 'active' : ''}`} onClick={() => setState('favs')}>FAVORITES</h5 >
      </div>
  );
}

export default Header;
