import React from 'react';
import { ClipLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className='full-page-loader'>
      <ClipLoader sizeUnit={'px'} size={150} color={'#3454D1'} loading={true} />
    </div>
  );
};

export default Loader;
