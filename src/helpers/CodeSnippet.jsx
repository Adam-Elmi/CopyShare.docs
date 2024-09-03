// CodeSnippet.js
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeSnippet = ({ codeString , language }) => {
    return (
        <SyntaxHighlighter language= {language ? language : "javascript"} style={vscDarkPlus} codeTagProps={{
            style: { lineHeight: 2, fontSize: '1rem' } // Add line-height here
        }}>
        {codeString}
        </SyntaxHighlighter>
    );
};

export default CodeSnippet;
