export default function Table({ data }) {

    const renderedRows = data.map((item) => {
        return <tr key={item.name}>
            <td className="border px-4 py-2">{item.name}</td>
            <td className="border px-4 py-2">
                <div className={`w-6 h-6 rounded-full ${item.color}`}></div>
            </td>
            <td className="border px-4 py-2">{item.score}</td>
        </tr>
    });

    return <div>
        <table className="table-auto w-full">
            <thead>
                <tr>
                    <th className="px-6 py-2">Name</th>
                    <th className="px-4 py-2">Color</th>
                    <th className="px-4 py-2">Score</th>
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    </div>
}