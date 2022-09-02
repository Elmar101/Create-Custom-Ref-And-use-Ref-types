import { useEffect, useRef } from "react";
import "./styles.css";
type ICustomRefType = HTMLInputElement | null;
type IRefA = React.RefObject<HTMLInputElement>;

export default function App() {
  let customRef: ICustomRefType = null;
  const refA: IRefA = useRef<HTMLInputElement | null>(null);

  const customRefB = (element: HTMLInputElement | null) => {
    customRef = element;
  };
  console.log("A: ", refA);
  console.log("B: ", customRef);
  useEffect(() => {
    refA.current?.focus();
    setTimeout(() => {
      customRef?.focus();
    }, 2000);
    console.log("B: ", customRef);
  }, []);

  return (
    <div className="App">
      A: <input ref={refA} />
      <br />
      <br />
      B:
      <input ref={customRefB} />
      <br />
      <br />
    </div>
  );
}
