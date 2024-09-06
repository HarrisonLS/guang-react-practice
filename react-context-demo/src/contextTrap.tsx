import { createContext, FC, PropsWithChildren, useContext, useState } from "react";

interface ContextType {
    aaa: number;
    bbb: number;
    setAaa: (aaa: number) => void;
    setBbb: (bbb: number) => void;
}

const context = createContext<ContextType>({
    aaa: 0,
    bbb: 0,
    setAaa: () => { },
    setBbb: () => { }
});

const Provider: FC<PropsWithChildren> = ({ children }) => {
    const [aaa, setAaa] = useState(0);
    const [bbb, setBbb] = useState(0);

    return <context.Provider value={{ aaa, bbb, setAaa, setBbb }}>{children}</context.Provider>
}

const App = () => (
    <Provider>
        <Aaa />
        <Bbb />
    </Provider>
);

const Aaa = () => {
    const { aaa, setAaa } = useContext(context);
    console.log('aaa')
    return (
        <div>
            <p>aaa: {aaa}</p>
            <button onClick={() => setAaa(aaa + 1)}>add aaa</button>
        </div>
    );
};

const Bbb = () => {
    const { bbb, setBbb } = useContext(context);
    console.log('bbb')
    return (
        <div>
            <p>bbb: {bbb}</p>
            <button onClick={() => setBbb(bbb + 1)}>add bbb</button>
        </div>
    );
};

export default App;