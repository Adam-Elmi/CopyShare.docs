export function Introduction() {
    const features = [
        ['Versatile Copying:', 'Copy text, images, videos, and more with ease.'],
        ['Cross-Browser Compatibility:', 'Consistent performance across all modern browsers.'],
        ['Customizable & Secure:', 'Tailor functionality to your needs with built-in sanitization.'],
        ['User Feedback:', 'Receive notifications on copy success or failure.'],
    ];

    const reasons = [
        ['Simplify', 'Provide an easy way to add copy features to your projects.'],
        ['Ensure Consistency', 'Work smoothly across different browsers and devices.'],
        ['Improve Security', 'Automatically sanitize content to keep it safe.'],
        ['Save Time', 'Avoid writing custom copy code from scratch.'],
    ];

    return (
        <div id="Introduction" className="flex flex-col gap-8 p-5">
            <h1 className="text-violet-400 text-[2rem] font-bold">Introduction</h1>
            <p className="leading-10 text-[1.2rem]">
                This library simplifies copying text, images, and videos to the clipboard. It's lightweight, easy to use, and works across all modern browsers. With built-in security and feedback features, it’s designed to streamline your development process.
            </p>

            <table className="w-full text-left border-collapse">
                <thead>
                    <tr>
                        <th className="border-b-2 border-gray-300 p-2 text-pink-400">Feature</th>
                        <th className="border-b-2 border-gray-300 p-2 text-pink-400">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {features.map((feature, id) => (
                        <tr key={id} className="border-b">
                            <td className="p-2 font-bold">{feature[0]}</td>
                            <td className="p-2">{feature[1]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <table className="w-full text-left border-collapse">
                <thead>
                    <tr>
                        <th className="border-b-2 border-gray-300 p-2 text-pink-400">Reason</th>
                        <th className="border-b-2 border-gray-300 p-2 text-pink-400">Explanation</th>
                    </tr>
                </thead>
                <tbody>
                    {reasons.map((reason, id) => (
                        <tr key={id} className="border-b">
                            <td className="p-2 font-bold">{reason[0]}</td>
                            <td className="p-2">{reason[1]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
