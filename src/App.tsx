import { useState } from 'react';

import IpBasedPage from './components/IpBasedPage';
import MockDataPage from './components/MockDataPage';
import PageSwitch from './components/PageSwitch';

const App = () => {
  const [isIpBased, setIsIpBased] = useState(false);

  const handleSwitch = () => {
    setIsIpBased((prev) => !prev);
  };

  return (
    <>
      <header>
        <PageSwitch isChecked={isIpBased} handleSwitch={handleSwitch} />
      </header>
      {isIpBased ? <IpBasedPage /> : <MockDataPage />}
    </>
  );
};

export default App;
