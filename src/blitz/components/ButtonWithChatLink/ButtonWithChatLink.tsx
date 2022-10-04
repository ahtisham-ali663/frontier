import { Typography, Button, InjectHTML } from 'src/blitz'
import clx from 'classnames'
import { IButtonWithChatLinkProps } from './index'
import css from './ButtonWithChatLink.module.scss'
import { useChatState } from 'src/hooks'
const ButtonWithChatLink = (props: IButtonWithChatLinkProps) => {
  const {
    hoverVariant = 'primary',
    buttonName = 'VIEW INTERNET PLANS',
    buttonLink = 'https://internet.frontier.com/youtubetv/',
    labelName = '',
    labelLinkText = '',
    bgType = 'white',
    labelNameColor = 'black',
    labelLinkTextColor = 'red',
    labelFontType = 'regularFont',
    labelStyleType = 'p1',
    labelTagType = 'div',
    chatClassName = '',
    buttonTarget = '_self',
    btnClassName = '',
  } = props
  const { setChatState } = useChatState()
  return (
    <div
      className={clx(css.root, {
        [css.white]: bgType === 'white',
        [css.dark]: bgType === 'cark',
        [css.lightGray]: bgType === 'light-gray',
      })}
    >
      <Button
        type="link"
        target={buttonTarget}
        hoverVariant={hoverVariant}
        text={buttonName}
        href={buttonLink}
        className={clx(btnClassName)}
      />

      {labelName && (
        <div className={clx(chatClassName, css.customChatContainer)}>
          <InjectHTML
            tagType={labelTagType}
            styleType={labelStyleType}
            fontType={labelFontType}
            color="tertiary"
            testId="test-label-name"
            value={labelName}
            className={clx({
              [css.blackFont]: labelNameColor === 'black',
              [css.whiteFont]: labelNameColor === 'white',
            })}
          />
          <button
            className={css.chatNowButton}
            onClick={() => setChatState(true)}
          >
            <Typography
              className={clx(css.chatNowButtonText, {
                [css.redFont]: labelLinkTextColor === 'red',
                [css.whiteFont]: labelLinkTextColor === 'white',
              })}
              fontType="boldFont"
              testId="test-label-link-name"
            >
              {labelLinkText}
            </Typography>
          </button>
        </div>
      )}
    </div>
  )
}

export default ButtonWithChatLink
