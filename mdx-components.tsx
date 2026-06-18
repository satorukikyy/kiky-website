import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="font-body font-bold text-[26px] text-c-text mt-10 mb-4 leading-snug">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-body font-bold text-[20px] text-c-text mt-8 mb-3 leading-snug">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-body font-semibold text-[17px] text-c-text mt-6 mb-2">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="font-body text-[15px] text-c-muted leading-[1.8] mb-5">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="mb-5 space-y-1 pl-4">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-5 space-y-1 pl-4 list-decimal">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="font-body text-[15px] text-c-muted leading-[1.75] before:content-['·'] before:text-c-purple before:mr-2">{children}</li>
    ),
    code: ({ children }) => (
      <code className="font-mono text-[13px] bg-c-surface text-c-purple px-1.5 py-0.5 rounded">{children}</code>
    ),
    pre: ({ children }) => (
      <pre className="font-mono text-[13px] bg-c-surface border border-c-border rounded p-4 overflow-x-auto mb-5 leading-[1.6]">{children}</pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-c-purple pl-4 my-5 text-c-subtle italic">{children}</blockquote>
    ),
    hr: () => <hr className="border-c-border my-8" />,
    a: ({ href, children }) => (
      <a href={href} className="text-c-purple hover:text-c-purple-hover transition-colors underline underline-offset-2" target={href?.startsWith('http') ? '_blank' : undefined} rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}>
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-c-text">{children}</strong>
    ),
    ...components,
  }
}
