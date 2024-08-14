import { useRef, useEffect, forwardRef } from "react";

const ForwardRefMyInput = forwardRef<HTMLInputElement>((props, ref) => {
  return <input {...props} ref={ref} type="text" />
})

export default function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="App">
      <ForwardRefMyInput ref={inputRef} />
    </div>
  );
}
