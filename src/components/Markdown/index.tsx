import ReactMarkdown from 'react-markdown';

import type { MarkdownType } from '../../types/Markdown';

function Markdown({ markdown } : MarkdownType) {
    return <ReactMarkdown children={markdown} />;
}

export default Markdown;