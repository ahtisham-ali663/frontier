import {
  Facebook,
  LinkedIn,
  Twitter,
  Youtube,
  LinkIcon,
  SocialMailIcon,
} from 'src/blitz/assets/react-icons'

export const formatData = (
  {
    field,
    footer_copy_rights,
    footer_rights_reserved,
    social_media_links,
    sub_footer_links,
    legal_notice,
  }: any,
  legalDescription: any,
) => {
  const bottomLinks = sub_footer_links?.links?.map(({ name, path }: any) => ({
    title: name,
    href: path?.url,
  }))
  const socialMediaLinks = social_media_links?.social_media_links?.map(
    ({ name, path }: any) => {
      return {
        icon: getIcon(name),
        title: name,
        href: path?.url,
      }
    },
  )
  const links = field?.main_links?.map(({ title, items }: any) => {
    return {
      title,
      children: items?.map(({ name, path }: any) => ({
        title: name?.value,
        href: path?.url,
      })),
    }
  })
  const finalData: any = {}
  const legal = legalDescription?.value || legal_notice?.value || ''
  finalData['legalText'] = legal
  if (footer_copy_rights) {
    finalData['copyRights'] = `${footer_copy_rights?.value || ''}${
      footer_rights_reserved?.value || ''
    }`
  }
  finalData['socialMediaLinks'] = socialMediaLinks
  finalData['bottomLinks'] = bottomLinks
  finalData['links'] = links
  return finalData
}

export const getIcon = (name: string) => {
  switch (name) {
    case 'Twitter':
      return <Twitter />
    case 'Facebook':
      return <Facebook />
    case 'LinkedIn':
      return <LinkedIn />
    case 'YouTube':
      return <Youtube />
    case 'ExternalLink':
      return <LinkIcon />
    case 'Mail':
      return <SocialMailIcon />
  }
}
