import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useRouter } from 'next/router'
import colors from 'src/styles/theme/colors'
import { Typography } from 'src/blitz'

type CityLettersData = {
  isDataPresent: boolean
  char: string
}

type AllCitiesData = {
  char: string
  list: City[]
}

type StateData = {
  name: {
    value: string
  }
  code: {
    value: string
  }
  cityList: AllCitiesData[]
}

type City = {
  name: {
    value: string
  }
  link?: {
    value: string
  }
  url?: {
    value: string
  }
}

const FilterCities = ({ data }: any) => {
  const router = useRouter()
  const { state, city } = router?.query || {}
  const { statesList } = data
  /* eslint-disable @typescript-eslint/indent */
  const [selectedFirstCityLetter, setSelectedFirstCityLetter] =
    useState<string>((city || state || 'A')[0].toUpperCase())
  const [currentStateData, setCurrentStateData] = useState<
    Array<CityLettersData>
  >([])
  /* eslint-disable @typescript-eslint/indent */
  const [selectedLetterCities, setSelectedLetterCities] = useState<Array<City>>(
    [],
  )
  const currenStateInURL = router?.query?.state || ''

  useEffect(() => {
    if (currenStateInURL?.length) {
      renderCities(`${currenStateInURL}`.toLowerCase())
    }
  }, [currenStateInURL, selectedFirstCityLetter])

  const renderCities = (state: string) => {
    const stateData: StateData = statesList.find(
      (data: StateData) =>
        data?.name?.value?.toLowerCase() === state?.toLowerCase(),
    )
    if (stateData) {
      const existingCityData: CityLettersData[] = []
      const selectedCityList =
        stateData['cityList'].find(
          (city: AllCitiesData) =>
            city?.char?.toLowerCase() === selectedFirstCityLetter.toLowerCase(),
        )?.list || []
      stateData['cityList'].map((state: AllCitiesData) => {
        existingCityData.push({
          char: state?.char || '',
          isDataPresent: state?.list?.length > 0 || false,
        })
      })
      setCurrentStateData(existingCityData)
      if (selectedCityList.length) {
        setSelectedLetterCities(selectedCityList)
      }
    } else {
      router.push('/404')
    }
  }

  const onStateLetterClick = (letter: string) => {
    setSelectedFirstCityLetter(letter)
  }

  const classes = useStyles()
  return (
    <React.Fragment>
      <div className={`${classes.root}`} data-testid="citiesContainer">
        <div className={classes.container}>
          <div className={classes.mainContainer}>
            <Typography tagType="h2" styleType="h2" className={classes.title}>
              {data?.title?.value}
            </Typography>
            <Typography tagType="p" styleType="h5" className={classes.subtitle}>
              {data?.description?.value}
            </Typography>
            <div className={classes.citiesContainer}>
              <div className={classes.leftFilterSection}>
                <div>
                  {
                    <ul
                      id="stateLettersUL"
                      className={classes.stateLettersSectionUL}
                    >
                      {currentStateData.map((cityData: CityLettersData) => {
                        if (cityData?.char === selectedFirstCityLetter) {
                          return (
                            <li key={cityData?.char}>
                              <button
                                data-testid="cityLetterbutton"
                                id={`button-${cityData?.char}`}
                                className={`${classes.activeLetter} ${classes.stateLettersButton}`}
                                onClick={() =>
                                  onStateLetterClick(cityData?.char)
                                }
                              >
                                <Typography tagType="span" styleType="p1">
                                  {cityData?.char}
                                </Typography>
                              </button>
                            </li>
                          )
                        } else {
                          if (cityData?.isDataPresent) {
                            return (
                              <li key={cityData?.char}>
                                <button
                                  data-testid={`button-${cityData?.char}`}
                                  id={`button-${cityData?.char}`}
                                  className={`${classes.stateLettersButton}`}
                                  onClick={() =>
                                    onStateLetterClick(cityData?.char)
                                  }
                                >
                                  <Typography
                                    tagType="span"
                                    styleType="p1"
                                    fontType="regularFont"
                                  >
                                    {cityData?.char}
                                  </Typography>
                                </button>
                              </li>
                            )
                          } else {
                            return (
                              <li key={cityData?.char}>
                                <button
                                  disabled={true}
                                  className={`${classes.stateLettersButton} ${classes.enaciveLetter}`}
                                >
                                  {cityData?.char}
                                </button>
                              </li>
                            )
                          }
                        }
                      })}
                    </ul>
                  }
                </div>
              </div>
              <hr className={classes.horizontalDivider} />
              <div className={classes.rightFilterSection}>
                {
                  <ul className={classes.cityNameWrapperUL}>
                    {selectedLetterCities.length ? (
                      <>
                        {selectedLetterCities.map((cities: City) => {
                          if (
                            cities?.link?.value ||
                            cities?.link?.value === 'true'
                          ) {
                            return (
                              <li
                                data-testid="cityname"
                                key={cities?.name?.value}
                                className={`${classes.cityNameWrapper} activeCityName`}
                              >
                                <a
                                  href={`/local/${currenStateInURL}/${cities?.url?.value}`}
                                  className={classes.cityRedirectLink}
                                >
                                  <Typography
                                    className={classes.cityName}
                                    tagType="p"
                                    styleType="p1"
                                    fontType="mediumFont"
                                  >
                                    {cities?.name?.value}
                                  </Typography>
                                </a>
                              </li>
                            )
                          }
                          return (
                            <li
                              className={classes.cityNameWrapper}
                              data-testid="cityname"
                              key={cities?.name?.value}
                            >
                              <Typography
                                className={classes.cityName}
                                tagType="p"
                                styleType="p1"
                              >
                                {cities?.name?.value}
                              </Typography>
                            </li>
                          )
                        })}
                      </>
                    ) : (
                      ''
                    )}
                  </ul>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: colors.main.brightRed,
    padding: '110px 0px',
    [theme.breakpoints.down('xs')]: {
      padding: '2rem 0px',
      backgroundColor: colors.main.white,
    },
  },
  container: {
    maxWidth: '1160px',
    margin: 'auto',
    [theme.breakpoints.down('md')]: {
      padding: '0px 16px',
    },
  },
  mainContainer: {
    padding: '50px 100px',
    backgroundColor: colors.main.white,
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      padding: '20px 0px',
    },
  },
  stateLettersSectionUL: {
    display: 'flex',
    listStyle: 'none',
    flexWrap: 'wrap',
    padding: '0px',
    marginLeft: '-8px',
  },
  stateLettersButton: {
    border: 'none',
    background: 'none',
    padding: '5px',
    fontSize: '18px',
    minWidth: '33px',
    lineHeight: '26px',
    color: `${colors.main.dark}`,
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: `${colors.main.lightGray}`,
    },
  },
  enaciveLetter: {
    pointerEvents: 'none',
    color: `${colors.main.gray}`,
    fontWeight: 'normal',
  },
  activeLetter: {
    color: `${colors.main.dark}`,
    fontWeight: 'bolder',
    '&::after': {
      content: '""',
      background: colors.main.brightRed,
      height: '8px',
      width: '15px',
      display: 'block',
      margin: 'auto',
    },
  },
  cityRedirectLink: {
    textDecoration: 'underline',
    textUnderlineOffset: '1px',
    textDecorationThickness: '1px',
    fontSize: '18px',
    lineHeight: '1.625rem',
    display: 'block',
    fontWeight: 700,
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
  },
  cityNameWrapperUL: {
    columnCount: 4,
    listStyle: 'none',
    flexWrap: 'wrap',
    width: '100%',
    padding: '0px',
    paddingTop: '60px',
    margin: '0px',
    [theme.breakpoints.down('md')]: {
      columnCount: 2,
    },
  },
  filterTitle: {
    marginLeft: 10,
  },
  letterTitle: {
    color: `${colors.main.lightRed}`,
    marginLeft: 10,
    fontWeight: 600,
  },
  leftFilterSection: {},
  rightFilterSection: {
    marginLeft: '-8px',
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
    },
  },
  title: {
    marginBottom: 16,
  },
  subtitle: {},
  cityNameWrapper: {
    breakInside: 'avoid',
    padding: '6px 0 6px 10px',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    [theme.breakpoints.down('md')]: {
      padding: '6px 0 6px',
      height: 50,
      alignItems: 'start',
    },
    '&.activeCityName': {
      '& a': {
        width: '100%',
        display: 'contents',
        '& p': {
          textDecoration: 'underline',
        },
        '& :hover': {
          color: colors.main.brightRed,
        },
      },
    },
  },
  stateNameHeading: {
    textTransform: 'capitalize',
  },
  citiesContainer: {
    width: '100%',
  },
  cityName: {
    margin: '6px 0px',
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
  },
  horizontalDivider: {
    content: '""',
    display: 'block',
    position: 'absolute',
    right: 0,
    width: '100%',
    background: colors.main.dark,
    border: colors.main.dark,
    height: '4px',
  },
}))

export default FilterCities
