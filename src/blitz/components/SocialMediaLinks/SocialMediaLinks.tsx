import React from 'react'
import css from './SocialMediaLinks.module.scss'
import { ISocialMediaLinks } from './types'
const SocialMediaLinks: React.FC<ISocialMediaLinks> = (props) => {
  const { socialMediaLinks } = props

  return (
    socialMediaLinks && (
      <ul className={css.socialMediaLinks}>
        {socialMediaLinks?.map(({ icon, href, title }, index) => {
          return (
            <li key={`social-media-${index}`}>
              <a data-testid="test-socialMediaLinks" href={href} title={title}>
                {icon}
              </a>
            </li>
          )
        })}
      </ul>
    )
  )
}

export default SocialMediaLinks
