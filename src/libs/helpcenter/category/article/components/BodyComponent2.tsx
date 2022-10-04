import clx from 'classnames'
import { InjectHTML, Button } from 'src/blitz'
import { ListWrapper } from './helper'
import { makeStyles } from '@material-ui/core'

const BodyComponent2 = ({ data }: any) => {
  const styles = useStyles()
  if (!data || Object.keys(data || {}).length == 0) {
    return null
  }
  const { id, title, backgroundColor, sections } = data || {}

  return (
    <div
      className={clx(styles.root, {
        [styles.cardPadding]:
          backgroundColor?.targetItem?.backgroundColorHexCode?.value,
      })}
      style={{
        backgroundColor:
          backgroundColor?.targetItem?.backgroundColorHexCode?.value,
      }}
      id={id?.value}
    >
      {title?.value && (
        <InjectHTML
          tagType="h2"
          styleType="h4"
          className={styles.title}
          value={title?.value}
        />
      )}
      {sections?.list?.map((section: any, index: number) => {
        return (
          <div key={`section=${index}`} className={styles.sectionContainer}>
            {section?.title?.value && (
              <InjectHTML
                tagType="h3"
                className={styles.sectionTitle}
                styleType="h5"
                value={section?.title?.value}
              />
            )}
            {section?.description?.value && (
              <InjectHTML
                tagType="p"
                styleType="p1"
                value={section?.description?.value}
              />
            )}
            <ListWrapper type={section?.listType?.value}>
              {section?.lists?.list?.map((list: any, index: number) => {
                return (
                  <li
                    className={styles.answerList}
                    key={list?.text?.value + 'key' + index}
                  >
                    <InjectHTML
                      tagType="p"
                      data-testid="answer"
                      styleType="p1"
                      value={list?.text?.value as string}
                    />
                  </li>
                )
              })}
            </ListWrapper>
            {section?.buttonText?.value && (
              <Button
                type="link"
                text={section?.buttonText?.value}
                className={styles.button}
                href={section?.buttonURL?.url}
                variant={
                  section?.buttonVariant?.targetItem?.buttonType?.value ||
                  'tertiary'
                }
              />
            )}
            {section?.legalText?.value && (
              <InjectHTML
                data-testid="legalText"
                tagType="p"
                styleType="p3"
                value={section?.legalText?.value as string}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    marginBottom: 80,
    borderRadius: 32,
    [breakpoints.down('sm')]: {
      marginBottom: 32,
    },
  },
  cardPadding: {
    padding: '32px',
    [breakpoints.down('xs')]: {
      padding: '32px 16px',
    },
  },
  title: {
    marginBottom: 32,
  },
  sectionContainer: {
    marginBottom: 32,
    '& ul, ol': {
      padding: 0,
      paddingLeft: 16,
    },
    '&:last-child': {
      marginBottom: 0,
    },
  },
  sectionTitle: {
    marginBottom: 16,
  },
  answerList: {
    '& p': {
      marginBottom: 8,
      marginTop: 0,
    },
  },
  button: {
    margin: '32px 0px',
    display: 'flex',
    width: 'max-content',
    fontSize: 18,
    [breakpoints.down('xs')]: {
      margin: '16px 0px',
      width: '100%',
      display: 'block',
    },
  },
}))

export default BodyComponent2
