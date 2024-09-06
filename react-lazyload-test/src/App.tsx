import React from 'react';
// import img1 from './img1.png';
// import img2 from './img2.png';
import LazyLoad from 'react-lazyload';
import MyLazyload from './MyLazyLoad';

// import() 包裹的模块会单独打包，然后 React.lazy 是用到这个组件的时候才去加载。
const LazySen = React.lazy(() => import('./Sen'));

export default function App() {
  return (
    <div>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <MyLazyload placeholder={<div>loading...</div>}>
        {/* <img src={img1} /> */}
        <LazySen />
      </MyLazyload>
      {/* <LazyLoad placeholder={<div>loading...</div>}>
        <img src={img2} />
      </LazyLoad> */}
    </div>
  );
};
