import {Header, Top} from "./components/index.js";
import Home from "./Home.jsx";

export default function App() {
    return (
        <div className="relative h-screen">
            <Top/>
            <div className="absolute top-0 right-0 bg-transparent w-full">
                <Header/>
                <Home/>
            </div>
        </div>
    );
}