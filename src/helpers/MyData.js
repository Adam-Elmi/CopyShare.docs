const sections = [
    {
        header: "Getting started",
        contents: [
            "Quick Start",
            "Introduction",
        ],
        icon: 'fa-solid fa-house',
        path:'getting-started',
        class: 'getting-started',
    },
    {
        header: "Installation",
        contents: [
            "How to install",
        ],
        icon: 'fa-solid fa-bolt',
        path: 'installation',
        class: 'installation',

    },
    {
        header: "API Reference",
        contents: [
            "CopyText",
            "CopyImage",
            "CopyVideoUrl",
            "CopyLink",
            "CopyCode",
            "GetHistory",
            "CopyClear",
        ],
        icon: 'fa-solid fa-code',
        path: 'api-references',
        class: 'api',
    },
    {
        header: "Help",
        contents: [
            "FAQ",
            "Support",
        ],
        icon: 'fa-solid fa-circle-question',
        path: 'help',
        class: 'help',
    },
];

const advantages = [
    {
        header: 'Easy to Use',
        description: 'Simple functions for copying data.',
        icon: 'fa-solid fa-cubes'
    },
    {
        header: 'Feedback Included',
        description: 'Provides clear messages on success or failure.',
        icon: 'fa-regular fa-comment-dots'
    },
    {
        header: 'Browser Support',
        description: 'Works well with older and current web browsers.',
        icon: 'fa-regular fa-window-restore'
    },
    {
        header: 'Data Sanitizing',
        description: 'Ensures copied data is clean and safe.',
        icon: 'fa-solid fa-shield-halved'
    },
];


const references = [
    { url: '/api-references', refName: 'copyText', id: 'CopyText' },
    { url: '/api-references', refName: 'copyImage', id: 'CopyImage' },
    { url: '/api-references', refName: 'copyVideoUrl', id: 'CopyVideoUrl' },
    { url: '/api-references', refName: 'copyLink', id: 'CopyLink' },
    { url: '/api-references', refName: 'copyCode', id: 'CopyCode' },
    { url: '/api-references', refName: 'GetHistory', id: 'GetHistory' },
    { url: '/api-references', refName: 'copyClear', id: 'CopyClear' },
    { url: '/help', refName: 'FAQ', id: 'FAQ' },
    { url: '/help', refName: 'Support', id: 'Support' },
    { url: '/getting-started', refName: 'Quick-start', id: 'Quick Start' },
    { url: '/getting-started', refName: 'Introduction', id: 'Introduction' },
    { url: '/installation', refName: 'Installation', id: 'How to install' },
];


const copyText_docs = 
    {
        method: 'copyText',
        syntax: 'copyText(text);',
        description: "The copyText method allows developers to copy a specified text to the clipboard with a single function call. This method is designed to be simple and efficient, making it easy to copy non-sensitive text data like code snippets, URLs, or any other plain text content.",
        example1: `copyText("Your text here");`,
        Parameter: 'The text that you want to copy to the clipboard. The text is automatically sanitized to prevent the injection of any harmful or unintended characters.',
        example2: `copyText("Hello, world!");`,
        ex_descrip: 'In this example, the string "Hello, world!" will be copied to the clipboard, allowing users to paste it wherever needed.',
        practical_example: `
        const textArea = document.getElementById("text-input");
        const btn = document.getElementById("btn");

        btn.addEventListener('click', () => {
            copyText(textArea.value.trim());
        });
        `,
        ex_descrip_2: [
            "The user enters text into an input field.", 
            "When the button is clicked, the text from the input field is copied to the clipboard using the copyText method."
        ]
    };

    const copyImage_docs = {
        method: 'copyImage',
        syntax: 'copyImage(imageUrl);',
        description: "The copyImage method allows developers to copy an image to the clipboard using its URL. This method supports image URLs and ensures that the image is copied as an image format.",
        example1: `copyImage("https://example.com/image.jpg");`,
        Parameter: 'The URL of the image that you want to copy to the clipboard.',
        example2: `copyImage("https://example.com/sample.png");`,
        ex_descrip: 'In this example, the image located at "https://example.com/sample.png" will be copied to the clipboard.',
        practical_example: `
        const imageUrl = "https://example.com/sample.png";
        const btn = document.getElementById("copy-image-btn");
    
        btn.addEventListener('click', () => {
            copyImage(imageUrl);
        });
        `,
        ex_descrip_2: [
            "When the button is clicked, the image from the specified URL is copied to the clipboard.",
            "Users can then paste the copied image into other applications."
        ]
    };
    
    const copyVideoUrl_docs = {
        method: 'copyVideoUrl',
        syntax: 'copyVideoUrl(videoUrl);',
        description: "The copyVideoUrl method allows developers to copy a video URL to the clipboard. This method is ideal for sharing video links quickly.",
        example1: `copyVideoUrl("https://example.com/video.mp4");`,
        Parameter: 'The URL of the video that you want to copy to the clipboard.',
        example2: `copyVideoUrl("https://example.com/sample-video.mp4");`,
        ex_descrip: 'In this example, the video URL "https://example.com/sample-video.mp4" will be copied to the clipboard.',
        practical_example: `
        const videoUrl = "https://example.com/sample-video.mp4";
        const btn = document.getElementById("copy-video-btn");
    
        btn.addEventListener('click', () => {
            copyVideoUrl(videoUrl);
        });
        `,
        ex_descrip_2: [
            "When the button is clicked, the video URL is copied to the clipboard.",
            "Users can paste the URL into other applications or share it as needed."
        ]
    };
    
    const copyCode_docs = {
        method: 'copyCode',
        syntax: 'copyCode(codeSnippet);',
        description: "The copyCode method allows developers to copy a specified code snippet to the clipboard. This method is useful for copying code examples or snippets for quick sharing.",
        example1: `copyCode("const x = 10;");`,
        Parameter: 'The code snippet that you want to copy to the clipboard. The code is copied in plain text format.',
        example2: `copyCode("function hello() { console.log('Hello, world!'); }");`,
        ex_descrip: 'In this example, the code snippet for a simple function will be copied to the clipboard.',
        practical_example: `
        const codeSnippet = "function hello() { console.log('Hello, world!'); }";
        const btn = document.getElementById("copy-code-btn");
    
        btn.addEventListener('click', () => {
            copyCode(codeSnippet);
        });
        `,
        ex_descrip_2: [
            "When the button is clicked, the code snippet is copied to the clipboard.",
            "Users can paste the code into a code editor or other applications."
        ]
    };
    
    const copyLink_docs = {
        method: 'copyLink',
        syntax: 'copyLink(linkUrl);',
        description: "The copyLink method allows developers to copy a URL link to the clipboard. This method is useful for sharing web links quickly.",
        example1: `copyLink("https://example.com");`,
        Parameter: 'The URL link that you want to copy to the clipboard.',
        example2: `copyLink("https://example.com/page");`,
        ex_descrip: 'In this example, the URL "https://example.com/page" will be copied to the clipboard.',
        practical_example: `
        const linkElement = document.getElementById('link-input');
        const btn = document.getElementById("copy-link-btn");
    
        btn.addEventListener('click', () => {
            copyLink(linkElement.value.trim());
        });
        `,
        ex_descrip_2: [
            "When the button is clicked, the link URL is copied to the clipboard.",
            "Users can paste the link into emails, messages, or other applications."
        ]
    };
    
    const getHistory_docs = {
        method: 'getHistory',
        syntax: `// method indicates a copy method such copyText
    method().then(() => getHistory());
        `,
        description: "The getHistory method allows developers to retrieve and copy the history of previously copied items to the clipboard. It cannot be used standalone and must be used in conjunction with other copy methods like copyText.",
        example1: `copyText('Hello World').then(() => getHistory());`,
        Parameter: 'This method does not take any parameters. It copies the history of previously copied items to the clipboard.',
        example2: `copyText(textValue).then(() => getHistory());`,
        ex_descrip: 'In this example, after copying the text value, the history of previously copied items is copied to the clipboard.',
        practical_example: `
        const text = document.getElementById("text");
        const copyBtn = document.getElementById("copy-btn");
    
        copyBtn.addEventListener("click", () => {
            copyText(text.value).then(() => getHistory());
        });
        `,
        ex_descrip_2: [
            "When the button is clicked, the history of copied items is copied to the clipboard after the text is copied.",
        ]
    };
    
    const copyClear_docs = {
        method: 'copyClear',
        syntax: 'copyClear();',
        description: "The copyClear method clears all items from the copy history, resetting the history array to an empty state. This is useful for managing or starting a fresh history of copied items.",
        example1: `copyClear();`,
        Parameter: 'This method does not take any parameters. It clears the entire history of copied items.',
        example2: `copyClear();`,
        ex_descrip: 'In this example, the copyClear method is called to clear the history of previously copied items, which results in an empty history array.',
        practical_example: `
        const clearBtn = document.getElementById("clear-btn");
    
        clearBtn.addEventListener("click", () => {
            copyClear();
            console.log("Copy history cleared:", getHistory());
        });
        `,
        ex_descrip_2: [
            "When the clear button is clicked, the history of copied items is cleared, resulting in an empty history array.",
            "This helps reset the copy history."
        ]
    };
    

export {sections, advantages, references, copyText_docs, copyImage_docs, copyVideoUrl_docs, copyLink_docs, copyCode_docs, getHistory_docs, copyClear_docs};
