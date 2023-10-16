import Accordion from "../components/Accordion";

export default function AccordionPage() {
    const items = [
        {
            id: 1,
            label: 'What is React?',
            content: 'React is a front end javascript framework'
        },
        {
            id: 2,
            label: 'Why use React?',
            content: 'React is a favourite JS library among engineers'
        },
        {
            id: 3,
            label: 'How do you use React?',
            content: 'You use React by creating components'
        }
    ]
    return <Accordion items={items} />;
}
