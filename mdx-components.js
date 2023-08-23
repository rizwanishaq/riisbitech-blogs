// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components) {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-4 text-4xl font-extrabold dark:text-white">
        {children}
      </h2>
    ),
    a: ({ children }) => <a style={{ color: "blue" }}>{children}</a>,
    code: ({ children }) => (
      <code className="sourceCode javascript">{children}</code>
    ),
    ...components,
  };
}
