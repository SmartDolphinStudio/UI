import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

/** Monochrome (dark) Markdown renderer for chart README documents */
export default function Markdown({
  content,
  basePath = '',
}: {
  content: string
  basePath?: string
}) {
  return (
    <div className="markdown-body text-sm leading-relaxed text-neutral-300">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          img: ({ src, alt }) => {
            const resolved =
              src && !src.startsWith('http') && !src.startsWith('/') && basePath
                ? `${basePath}/${src}`
                : src
            return (
              <img
                src={resolved}
                alt={alt ?? ''}
                className="my-4 w-full rounded-lg border border-neutral-800"
              />
            )
          },
          h1: ({ children }) => (
            <h1 className="mb-3 border-b border-neutral-800 pb-2 text-xl font-bold tracking-tight text-neutral-100">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="mb-2 mt-6 text-base font-semibold text-neutral-100">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mb-2 mt-4 text-sm font-semibold text-neutral-100">
              {children}
            </h3>
          ),
          p: ({ children }) => <p className="mb-3 text-neutral-400">{children}</p>,
          blockquote: ({ children }) => (
            <blockquote className="mb-3 border-l-2 border-neutral-100 pl-3 italic text-neutral-400">
              {children}
            </blockquote>
          ),
          ul: ({ children }) => (
            <ul className="mb-3 list-disc space-y-1 pl-5 text-neutral-400">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-3 list-decimal space-y-1 pl-5 text-neutral-400">
              {children}
            </ol>
          ),
          li: ({ children }) => <li>{children}</li>,
          a: ({ children, href }) => (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-neutral-100 underline underline-offset-2 hover:bg-neutral-100 hover:text-black"
            >
              {children}
            </a>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-neutral-100">{children}</strong>
          ),
          code: ({ children, className }) => {
            const isBlock = className?.includes('language-')
            if (isBlock) {
              return (
                <pre className="mb-3 overflow-x-auto rounded-md bg-black p-3 text-[12.5px] leading-relaxed text-neutral-100">
                  <code className={className}>{children}</code>
                </pre>
              )
            }
            return (
              <code className="rounded bg-neutral-800 px-1.5 py-0.5 font-mono text-[12.5px] text-neutral-100">
                {children}
              </code>
            )
          },
          pre: ({ children }) => <>{children}</>,
          table: ({ children }) => (
            <div className="mb-3 overflow-x-auto">
              <table className="w-full border-collapse text-[13px]">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="border-b border-neutral-700 bg-neutral-900 text-left">
              {children}
            </thead>
          ),
          th: ({ children }) => (
            <th className="px-3 py-2 font-semibold text-neutral-100">{children}</th>
          ),
          td: ({ children }) => (
            <td className="border-b border-neutral-800 px-3 py-2 align-top text-neutral-400">
              {children}
            </td>
          ),
          hr: () => <hr className="my-4 border-neutral-800" />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
