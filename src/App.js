import Accordion from "./components/Accordion";

export default function App() {
    const items = [
        {
            label: 'What is React?',
            content: 'React is a front end javascript framework'
        },
        {
            label: 'Why use React?',
            content: 'React is a favourite JS library among engineers'
        },
        {
            label: 'How do you use React?',
            content: 'You use React by creating components'
        }
    ]
    return <Accordion items={items} />;
}
