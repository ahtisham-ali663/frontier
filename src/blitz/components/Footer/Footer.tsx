import React from 'react'
import {
  LinksAccordion,
  Typography,
  InjectHTML,
  SocialMediaLinks,
} from 'src/blitz'
import css from './Footer.module.scss'
import { IFooter } from './types'

const Footer: React.FC<IFooter> = (props) => {
  const {
    links,
    legalText,
    copyRights,
    bottomLinks,
    socialMediaLinks,
    onClickCallback,
  } = props

  return (
    <footer id="footer" className={css.footer}>
      <div className={css.footerWrapper}>
        <div className={css.footerLinksContainer}>
          {links?.map(({ title, children }, index) => {
            return (
              <div
                key={`footer-column-${index}`}
                className={css.footerLinksColumn}
              >
                <Typography
                  testId="test-mainlink-category"
                  tagType="h6"
                  styleType="h6"
                >
                  {title}
                </Typography>
                <ul className={css.footerSubListContainer}>
                  {children?.map(({ title, href }) => {
                    return (
                      <li key={`footer-column-${index}-${title}`}>
                        <a
                          data-testid={`test-mainlink-item-${index}`}
                          href={href}
                          className={css.footerSubLink}
                          onClick={() => onClickCallback?.(title)}
                        >
                          <Typography tagType="span" styleType="p3">
                            {title}
                          </Typography>
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
        {links && (
          <div className={css.linksAccordion}>
            <LinksAccordion list={links} />
          </div>
        )}
        <div>
          {legalText && (
            <InjectHTML
              testId="test-legalText"
              styleType="legal"
              className={css.legalText}
              value={legalText}
            />
          )}
        </div>
        <div>
          {copyRights && (
            <Typography testId="test-copyRights" className={css.copyRights}>
              {copyRights}
            </Typography>
          )}
        </div>
        <div className={css.bottomWrapper}>
          {bottomLinks && (
            <ul className={css.footerBottomLinks}>
              {bottomLinks?.map(({ title, href }) => {
                return (
                  <li
                    key={`footer-bottom-link-${title}`}
                    className={css.footerBottomLinkItem}
                  >
                    <a
                      data-testid="test-bottomLinks"
                      href={href}
                      className={css.footerSubLink}
                      onClick={() => onClickCallback?.(title)}
                    >
                      <InjectHTML
                        tagType="span"
                        styleType="p4"
                        className={css.footerBottomLinkText}
                        value={title}
                      />
                    </a>
                  </li>
                )
              })}
            </ul>
          )}
          <SocialMediaLinks socialMediaLinks={socialMediaLinks} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
