import Script from 'next/script'
const AtScript = () => {
  return <Script strategy="beforeInteractive" src="/js/at.js" />
}

export default AtScript
