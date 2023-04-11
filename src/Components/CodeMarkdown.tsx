import { ReactChild, ReactChildren, ReactNode } from "react";
import {PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../styles/CodeMarkdown.sass"

interface CodeMarkdownProps {
  children: any ;
  language: any;
}
export const CodeMarkdown: React.FC<CodeMarkdownProps> = ({ children, language }) => {
  return (
    <div className="code_container">
      <SyntaxHighlighter language={language} style={materialDark}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
};
