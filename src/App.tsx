//import { FC } from "react";
import "./App.css";

type AppProps = {
  title: string;
};

//const App: FC = () => {

//const App: FC<AppProps> = ({ title }) => {
const App = ({ title }: AppProps) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};

export default App;
