declare module '*.vue' {
  const Component: any
  export default Component
}

declare module 'nprogress' {
  function start(): void
  function done(): void
}