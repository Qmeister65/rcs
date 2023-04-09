import React from 'react';
import '@/components/loader.scss';

const Loader: React.FC = () => {
  return (
    <div data-testid={'loader'}>
      <span>Loading</span>
      <span className="l-1"></span>
      <span className="l-2"></span>
      <span className="l-3"></span>
      <span className="l-4"></span>
      <span className="l-5"></span>
      <span className="l-6"></span>
    </div>
  );
};

export default Loader;
