import React from 'react';
import FormulaireVMZ from './FormulaireVMZ';

const FormulaireVMZLanding = () => {
  return (
    <section
      className='min-vh-100 d-flex flex-column bg-container-2'
      style={{
        backgroundImage: 'url(./assets/images/bg-4.jpg)',
      }}
    >
      <div className='flex-fill d-flex flex-column align-items-center justify-content-center fillter'>
        <div style={{ width: 100 }}>
          <img
            className='h-100 w-100 d-block'
            src='./assets/images/logo-2.png'
            alt='Logo'
          />
        </div>
        <FormulaireVMZ />
      </div>
    </section>
  );
};

export default FormulaireVMZLanding;
