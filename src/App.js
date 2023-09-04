import Button from "./Button";

export default function App() {
    return (
        <div>
            <div><Button success primary rounded outline >Click me!</Button></div>
            <div><Button danger outline>Buy now!</Button></div>
            <div><Button primary warning>See deal!</Button></div>
            <div><Button secondary rounded outline>Hide ads!</Button></div>
            <div><Button primary rounded>Something</Button></div>
        </div>
    )
}
