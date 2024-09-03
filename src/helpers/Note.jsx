

const Note = ({correct, incorrect, correctMessage, incorrectMessage}) => {
    return (
    <div className="w-full mx-auto">
    <table className="min-w-full divide-y divide-gray-200 bg-white shadow-md rounded-lg">
        <thead className="bg-gray-100">
        <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Usage</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
        </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
        <tr>
            <td className="px-6 py-4 text-sm font-medium text-green-600"><i className="fas fa-check"></i></td>
            <td className="px-6 py-4 text-sm text-gray-500">{correct ? correct : "Correct"}</td>
            <td className="px-6 py-4 text-sm text-gray-900">{correctMessage ? correctMessage : 'This works'}</td>
        </tr>
        <tr>
            <td className="px-6 py-4 text-sm font-medium text-red-600"><i className="fas fa-times"></i></td>
            <td className="px-6 py-4 text-sm text-gray-500">{incorrect ? incorrect : 'Incorrect'}</td>
            <td className="px-6 py-4 text-sm text-gray-900">{incorrectMessage ? incorrectMessage : 'This does not work'}</td>
        </tr>
        </tbody>
        </table>
    </div>
    ) ;
};

export default Note;
