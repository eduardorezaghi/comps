import Table from "../components/Table";

export default function TablePage() {
    const data = [
        { name: "Orange 🍊", color: "bg-orange-500", score: crypto.getRandomValues(new Uint32Array(1))[0] },
        { name: "Apple 🍎", color: "bg-red-500", score: crypto.getRandomValues(new Uint32Array(1))[0] },
        { name: "Banana 🍌", color: "bg-yellow-500", score: crypto.getRandomValues(new Uint32Array(1))[0] },
        { name: "Grape 🍇", color: "bg-purple-500", score: crypto.getRandomValues(new Uint32Array(1))[0] },
        { name: "Kiwi 🥝", color: "bg-green-500", score: crypto.getRandomValues(new Uint32Array(1))[0] },
        { name: "Watermelon 🍉", color: "bg-pink-500", score: crypto.getRandomValues(new Uint32Array(1))[0] },
        { name: "Cherry 🍒", color: "bg-red-500", score: crypto.getRandomValues(new Uint32Array(1))[0] },
        { name: "Strawberry 🍓", color: "bg-red-500", score: crypto.getRandomValues(new Uint32Array(1))[0] },
        { name: "Peach 🍑", color: "bg-orange-500", score: crypto.getRandomValues(new Uint32Array(1))[0] },
        { name: "Tomato 🍅", color: "bg-red-500", score: crypto.getRandomValues(new Uint32Array(1))[0] },
        { name: "Pear 🍐", color: "bg-yellow-500", score: crypto.getRandomValues(new Uint32Array(1))[0] },
        { name: "Mango 🥭", color: "bg-yellow-500", score: crypto.getRandomValues(new Uint32Array(1))[0] },
        { name: "Pineapple 🍍", color: "bg-yellow-500", score: crypto.getRandomValues(new Uint32Array(1))[0] },
        { name: "Coconut 🥥", color: "bg-yellow-500", score: crypto.getRandomValues(new Uint32Array(1))[0] },
        { name: "Avocado 🥑", color: "bg-green-500", score: crypto.getRandomValues(new Uint32Array(1))[0] },
        { name: "Eggplant 🍆", color: "bg-purple-500", score: crypto.getRandomValues(new Uint32Array(1))[0] },
        { name: "Potato 🥔", color: "bg-yellow-500", score: crypto.getRandomValues(new Uint32Array(1))[0] },
        { name: "Carrot 🥕", color: "bg-orange-500", score: crypto.getRandomValues(new Uint32Array(1))[0] },
        { name: "Corn 🌽", color: "bg-yellow-500", score: crypto.getRandomValues(new Uint32Array(1))[0] },
        { name: "Hot Pepper 🌶", color: "bg-red-500", score: crypto.getRandomValues(new Uint32Array(1))[0] },
    ];

    return <div>
        <Table data={data} />
    </div>
}