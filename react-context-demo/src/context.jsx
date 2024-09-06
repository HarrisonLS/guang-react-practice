import { createContext, useContext } from 'react';

const countContext = createContext(111);

function Aaa() {
  return <div>
    {/* 用 Provider 修改其中的值 */}
      <countContext.Provider value={222}>
        <Bbb></Bbb>
      </countContext.Provider>
  </div>
} 

function Bbb() {
  return <div><Ccc></Ccc></div>
}

function Ccc() {
  const count = useContext(countContext);
  return <h2>context 的值为：{count}</h2>
}

export default Aaa;
