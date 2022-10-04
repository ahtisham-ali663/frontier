import React, { useState, useMemo, useEffect } from 'react'
import clx from 'classnames'
import { Typography, Button } from 'src/blitz'
import { IArticleCardProps } from './index'
import {
  getBackgroundColor,
  getFontColor,
} from 'src/blitz/theme/colors/colors.helper'
import { RightArrowIcon, Magnify } from 'src/blitz/assets/react-icons'
import css from './ArticleCard.module.scss'

const ITEMS_PER_VIEW = 6

const ArticleCard: React.FunctionComponent<IArticleCardProps> = (props) => {
  const {
    cards,
    title,
    subtext,
    backgroundColor,
    titleFontColor = 'initial',
    shouldTruncate = false,
    showLessText = 'Show Less',
    showMoreText = 'Show More',
    maxCap = 30,
    cardsPerRow = 3,
    itemsPerView = ITEMS_PER_VIEW,
  } = props
  const [currentRenderedItems, setCurrentRenderedItems] = useState(itemsPerView)

  const filteredList = useMemo(() => {
    return shouldTruncate ? cards.slice(0, currentRenderedItems) : cards
  }, [currentRenderedItems, shouldTruncate, maxCap, cards])

  const onShowMoreClick = () => {
    setCurrentRenderedItems(currentRenderedItems + itemsPerView)
  }

  const onShowLessClick = () => {
    setCurrentRenderedItems(itemsPerView)
  }

  useEffect(() => {
    setCurrentRenderedItems(itemsPerView)
  }, [itemsPerView])

  return (
    <div className={clx(getBackgroundColor(backgroundColor))}>
      <div className={css.wrappers}>
        {title && (
          <Typography tagType="h2" styleType="h4" testId="test-title">
            <span className={clx(getFontColor(titleFontColor))}>{title}</span>
          </Typography>
        )}
        {subtext && (
          <Typography tagType="p" styleType="p1" testId="sub-text">
            <span className={clx(getFontColor(titleFontColor))}>{subtext}</span>
          </Typography>
        )}
        <div className={css.flexWrapper}>
          {filteredList?.map((card: any, index: number) => (
            <div
              key={`${card?.title}-${index}`}
              className={clx(css.supportArticle, 'supportArticle', {
                [css.searchBackground]: card?.type === 'search',
                [css.twoCardsPerRow]: cardsPerRow === 2,
              })}
            >
              <a href={card?.href} className={css.articleContent}>
                {card?.title ? (
                  <Typography
                    tagType="h6"
                    styleType="h6"
                    testId="test-article-category"
                    className={clx(css.articleCategory, {
                      [css.searchArticleTitle]: card?.type === 'search',
                    })}
                  >
                    {card?.title}
                  </Typography>
                ) : (
                  <Magnify className={css.cardIcon} />
                )}

                <Typography
                  tagType="h3"
                  styleType="h5"
                  testId="test-article-title"
                  className={clx(css.articleTitle, {
                    [css.searchArticleTitle]: card?.type === 'search',
                  })}
                >
                  {card?.subtitle}
                </Typography>
                <i
                  className={clx(css.iconWrapper, {
                    [css.searchIconWrapper]: card?.type === 'search',
                  })}
                >
                  <RightArrowIcon />
                </i>
              </a>
            </div>
          ))}
        </div>
        {shouldTruncate && cards?.length > itemsPerView && (
          <div className={css.showMoreButtonWrapper}>
            <Button
              type="button"
              text={
                filteredList?.length >= maxCap ||
                filteredList?.length === cards?.length
                  ? showLessText
                  : showMoreText
              }
              variant="tertiary"
              onClick={
                filteredList?.length >= maxCap ||
                filteredList?.length === cards?.length
                  ? onShowLessClick
                  : onShowMoreClick
              }
              className={css.showMoreButton}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default ArticleCard
