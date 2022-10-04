import { useState, useMemo } from 'react'
import clx from 'classnames'
import { Typography, InjectHTML, Button } from 'src/blitz'
import { ChevronDown } from 'src/blitz/assets/react-icons'
import css from './Accordion.module.scss'
import { IAccordion } from './types'

const ITEMS_PER_VIEW = 5

const Accordion = (props: IAccordion) => {
  const {
    list = [],
    titleClassName,
    descriptionClassName,
    borderUnderDescription = true,
    accordionClickHandler,
    isSingleItemOpen = false,
    shouldTruncate = false,
    maxCap = 25,
    showMoreText = 'Show More',
    showLessText = 'Show Less',
    ...args
  } = props
  const [currentRenderedItems, setCurrentRenderedItems] =
    useState(ITEMS_PER_VIEW)
  const [openItems, setOpenItems] = useState(new Array<boolean>())

  const filteredList = useMemo(() => {
    return shouldTruncate ? list.slice(0, currentRenderedItems) : list
  }, [currentRenderedItems, shouldTruncate, maxCap, list])

  function toggleItem(itemIndex: number) {
    if (isSingleItemOpen) {
      const items: boolean[] = []
      items[itemIndex] = !openItems[itemIndex]
      setOpenItems([...items])
    } else {
      openItems[itemIndex] = !openItems[itemIndex]
      setOpenItems([...openItems])
    }
  }

  const onShowMoreClick = () => {
    setCurrentRenderedItems(currentRenderedItems + ITEMS_PER_VIEW)
  }

  const onShowLessClick = () => {
    setCurrentRenderedItems(ITEMS_PER_VIEW)
  }

  return (
    <div {...args}>
      {filteredList?.map((item, index) => (
        <AccordionItem
          borderUnderDescription={borderUnderDescription}
          key={`accordion-${item.title}-${index}`}
          {...item}
          titleClassName={titleClassName}
          isOpen={openItems[index]}
          toggleAccordionHandler={() => toggleItem(index)}
          accordionClickHandler={accordionClickHandler}
          descriptionClassName={descriptionClassName}
        />
      ))}
      {shouldTruncate && list?.length > ITEMS_PER_VIEW && (
        <div className={css.showMoreButtonWrapper}>
          <Button
            type="button"
            text={
              filteredList?.length >= maxCap ||
              filteredList?.length === list?.length
                ? showLessText
                : showMoreText
            }
            variant="tertiary"
            onClick={
              filteredList?.length >= maxCap ||
              filteredList?.length === list?.length
                ? onShowLessClick
                : onShowMoreClick
            }
            className={css.showMoreButton}
          />
        </div>
      )}
    </div>
  )
}

const AccordionItem = ({
  title,
  description,
  titleClassName,
  descriptionClassName,
  accordionClickHandler,
  borderUnderDescription,
  isOpen,
  toggleAccordionHandler,
}: any): JSX.Element => {
  const toggleDescription = (title: string) => {
    if (accordionClickHandler) accordionClickHandler(!isOpen, title)
    toggleAccordionHandler()
  }

  return (
    <div>
      <div
        role="button"
        onClick={() => toggleDescription(title)}
        className={clx(css.rowTitle, titleClassName, {
          [css.borderUnderTitle]: isOpen && borderUnderDescription,
        })}
      >
        <Typography testId="test-title" tagType="h3" styleType="h6">
          {title}
        </Typography>
        <div className={css.chevronContainer}>
          <ChevronDown
            width={16}
            height={16}
            className={clx(css.icon, { [css.spinIcon]: isOpen })}
          />
        </div>
      </div>
      <div
        className={clx(
          css.rowDescription,
          descriptionClassName,
          {
            [css.showDescription]: isOpen,
          },
          {
            [css.borderUnderDescription]: isOpen && borderUnderDescription,
          },
        )}
      >
        <InjectHTML
          testId="test-description"
          styleType="p2"
          value={description}
        />
      </div>
    </div>
  )
}

export default Accordion
