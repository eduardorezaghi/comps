import Button from "../components/Button";
import { GoBell, GoArchive, GoDatabase } from "react-icons/go";

export default function ButtonPage() {
    const handleClick = () => console.error('Hello world!');

    return (
        <div>
            <div><Button success primary rounded outline onClick={handleClick} className="mb-5"><GoBell/>Click me!</Button></div>
            <div><Button danger outline onMouseEnter={handleClick} className="mb-5"><GoArchive/>Buy now!</Button></div>
            <div><Button primary warning><GoDatabase/>See deal!</Button></div>
            <div><Button secondary rounded outline>Hide ads!</Button></div>
            <div><Button primary rounded>Something</Button></div>
        </div>
    )
}
