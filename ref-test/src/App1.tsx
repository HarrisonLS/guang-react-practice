import React, { forwardRef, useImperativeHandle, useRef } from 'react';
interface RefType {
    focusInput: Function
}


// 自定义 Input 组件
const CustomInput = forwardRef((props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    // 使用 useImperativeHandle 来告诉 React 如何在 ref 中使用 inputRef
    useImperativeHandle(ref, () => ({
        focusInput() {
            inputRef.current?.focus();
        },
    }));

    // ...其他逻辑

    return <input ref={inputRef} {...props} />;
});

// 父组件
const App = () => {
    const inputRef = useRef<RefType>(null);

    const handleFocus = () => {
        if (inputRef.current) {
            inputRef.current.focusInput();
        }
    };

    return (
        <>
            <CustomInput ref={inputRef} />
            <button onClick={handleFocus}>Focus Input</button>
        </>
    );
};

export default App;