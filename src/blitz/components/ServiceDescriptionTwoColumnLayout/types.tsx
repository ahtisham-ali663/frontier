export interface ServiceDescriptionTwoColumnLayoutProps {
  image: {
    src: string
  }
  title: {
    value: string
  }
  subtitle: {
    value: string | JSX.Element
  }
  className?: string
}
