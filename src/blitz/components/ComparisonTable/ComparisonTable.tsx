import React, { useMemo } from 'react'
import clx from 'classnames'
import { Tooltip, InjectHTML, Typography } from 'src/blitz'
import {
  CheckMarkRed,
  CloseGray,
  CheckMarkBlack,
  InfoIcon,
} from 'src/blitz/assets/react-icons'
import { IComparisonTableProps } from './types'
import css from './ComparisonTable.module.scss'
import colors from 'src/styles/theme/colors'

const ComparisonTable: React.FunctionComponent<IComparisonTableProps> = (
  props: IComparisonTableProps,
) => {
  const {
    items,
    addBorderToHeader,
    headerNameTitle = '',
    toolTipIcon = <InfoIcon />,
    dropShadowForTooltip,
    hideBorderForTooltip,
    showBorderRadiusForTooltip,
  } = props
  const styleModifier = Object.assign(
    {
      header: '',
      textAlignCenter: true,
      hidePreferredRowValue: false,
      valueTextCSS: '',
      textStyleType: 'p1',
      rowHeaderLabel: '',
      backgroundEvenRow: true,
      roundedBorders: false,
      rowClassName: '',
      rowValueClassName: '',
      tableHeaderClassName: '',
      backgroundColor: colors.main.lightBorderGrey,
      headerClassName: '',
      primaryCellClassName: '',
    },
    props.styleModifier,
  )
  const tableRows = useMemo(() => {
    return (
      items?.[0]?.properties?.map(({ name, isPrimary, toolTip }: any) => ({
        name,
        isPrimary,
        toolTip,
      })) || []
    )
  }, [items])

  const totalItems = items?.length || 0

  const renderPropertyValue = (
    item: any,
    rowColumn: number,
    isPrimary: boolean,
  ) => {
    if (item?.iconSource) {
      return <InjectHTML value={item?.iconSource} color={'default'} />
    }
    const textValue = item?.textValue
    if (textValue) {
      return (
        <InjectHTML
          testId="test-textValue"
          styleType={styleModifier?.textStyleType}
          color={isPrimary ? 'primary' : 'default'}
          className={clx(styleModifier.valueTextCSS, {
            [css.textAlignCenter]: !(styleModifier.textAlignCenter === false),
            [styleModifier.primaryCellClassName]: isPrimary,
          })}
          value={textValue}
        />
      )
    }
    if (item?.value) {
      if (rowColumn === 0 || styleModifier?.showRedCheckMarks) {
        return <CheckMarkRed width={25} height={20} />
      }
      return <CheckMarkBlack width={25} height={20} />
    }
    return <CloseGray width={20} height={20} />
  }

  return (
    <div className={css.tableWrapper}>
      <div
        className={clx(
          css.table,
          { [css.oneColumnLayout]: items?.length === 1 },
          { [css.twoColumnsLayout]: items?.length === 2 },
          { [css.threeColumnsLayout]: items?.length === 3 },
        )}
      >
        <div
          className={clx(
            css.tableHeader,
            {
              [css.headerBorder]: addBorderToHeader,
            },
            styleModifier?.tableHeaderClassName,
          )}
        >
          <div
            className={clx(css.tableHeaderDif, css.firstColumn, 'first-column')}
          >
            {headerNameTitle && (
              <Typography
                tagType="h3"
                styleType="h6"
                color="primary"
                className={clx(css.headerNameTitle)}
              >
                {headerNameTitle}
              </Typography>
            )}
          </div>
          {items?.map(
            (
              {
                logo,
                alt = 'table header',
                headerDescription = '',
                headerDescriptionLink = '',
                header,
              }: any,
              index: number,
            ) => {
              return (
                <div
                  key={`competition-table-header-${index}`}
                  style={{ maxWidth: `${100 / totalItems}%` }}
                  className={clx(
                    css.tableHeaderDif,
                    css.valuesColumn,
                    styleModifier.header,
                  )}
                >
                  <div className={css.center}>
                    {logo && (
                      <img
                        data-testid="test-logo"
                        className={css.headerLogo}
                        src={logo}
                        alt={alt}
                      />
                    )}
                    {header && (
                      <Typography
                        tagType="h3"
                        styleType="h5"
                        color="primary"
                        className={clx(
                          css.headerName,
                          styleModifier.headerClassName,
                        )}
                      >
                        {header}
                      </Typography>
                    )}
                    {headerDescription && headerDescriptionLink && (
                      <a
                        data-testid="test-headerDescription"
                        href={headerDescriptionLink}
                        className={clx(
                          css.headerDesc,
                          styleModifier.rowHeaderLabel,
                        )}
                      >
                        {headerDescription}
                      </a>
                    )}
                  </div>
                </div>
              )
            },
          )}
        </div>
        <div>
          {tableRows?.map((row: any, index: number) => {
            return (
              <div
                key={`competition-table-row-${index}`}
                className={clx(
                  css.tableRow,
                  {
                    [css.backgroundOddRow]:
                      styleModifier.backgroundEvenRow === true ||
                      styleModifier.backgroundEvenRow === undefined,
                  },
                  {
                    [css.backgroundEvenRow]:
                      styleModifier.backgroundEvenRow === false,
                  },
                  {
                    [css.roundedBorders]: styleModifier.roundedBorders === true,
                  },
                  styleModifier?.rowClassName,
                )}
                style={{
                  backgroundColor: styleModifier.backgroundColor,
                }}
              >
                <Typography className={css.firstColumn} styleType="h6">
                  <span>
                    <InjectHTML
                      testId="test-name"
                      className={clx(
                        css.rowLabel,
                        styleModifier.rowHeaderLabel,
                        css.mobileToolTipStyle,
                      )}
                      value={row?.name}
                    />
                    {row?.toolTip && (
                      <Tooltip
                        tooltipIcon={toolTipIcon}
                        tooltipText={row?.toolTip}
                        dropShadow={dropShadowForTooltip}
                        hideBorder={hideBorderForTooltip}
                        includeBorder={showBorderRadiusForTooltip}
                      />
                    )}
                  </span>
                </Typography>
                {items?.map((_: any, rowColumn: number) => {
                  return (
                    <div
                      style={{ maxWidth: `${100 / totalItems}%` }}
                      className={clx(
                        css.rowValue,
                        css.valuesColumn,
                        {
                          [css.preferredRowValue]:
                            rowColumn === 0 &&
                            !styleModifier.hidePreferredRowValue,
                        },
                        styleModifier.rowValueClassName,
                      )}
                      key={`competition-table-row-${index}-column-${rowColumn}`}
                    >
                      {renderPropertyValue(
                        items?.[rowColumn]?.properties?.[index],
                        rowColumn,
                        !!row?.isPrimary,
                      )}
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ComparisonTable
