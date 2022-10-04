import { makeStyles } from '@material-ui/styles'
import clx from 'classnames'
import { useState, useRef } from 'react'
import { Typography, InfoModal } from 'src/blitz'
import { COMPONENT_WRAPPER } from 'src/constants'
import { useAddressPredictor, useAppData, useDebounce } from 'src/hooks'
import colors from 'src/styles/theme/colors'
import {
  formSingleLineAddress,
  SingleLineAddress,
} from 'src/utils/addressHelpers'
import { Magnify } from 'src/blitz/assets/react-icons'
import { useDispatch, useSelector } from 'react-redux'
import { acpSlice } from 'src/redux/slicers'
import { checkForServiceability } from 'src/redux/slicers/acp'
import { Address, State } from 'src/redux/types'

const Hero = () => {
  const {
    title,
    subTitle,
    serviceabilityCheckLoaderTitle,
    serviceabilityCheckLoaderSubTitle,
    addressInputPlaceholder,
  } = useAppData('serviceCheckHeroData', true)
  const styles = useStyles()
  const inputRef: any = useRef(null)
  const [addressInput, setAddressInput] = useState('')
  const selectedAddress = useSelector(
    (state: State) => state?.acp?.selectedAddress,
  )
  const isServiceabilityLoading = useSelector(
    (state: State) => state?.acp?.isServiceabilityLoading,
  )
  const predictions = useAddressPredictor(useDebounce(addressInput, 300))
  const dispatch = useDispatch()

  const handleOnSubmit = (address?: Address) => {
    dispatch(checkForServiceability(address || selectedAddress))
  }

  const handleInputKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      handleOnSubmit()
    }
  }

  const showPredictions = predictions?.length > 0 && selectedAddress == null

  return (
    <div className={styles.root}>
      <InfoModal
        isOpen={isServiceabilityLoading}
        isClosable={false}
        isLoading={true}
        title={serviceabilityCheckLoaderTitle?.value}
        subTitle={serviceabilityCheckLoaderSubTitle?.value}
      />
      <div className={styles.innerWrapper}>
        <div className={styles.contentWrapper}>
          <Typography
            styleType="h1"
            tagType="h1"
            color="secondary"
            fontType="boldFont"
            className={styles.title}
          >
            {title?.value}
          </Typography>
          <Typography
            color="tertiary"
            fontType="boldFont"
            styleType="p1"
            className={styles.subtitle}
          >
            {subTitle?.value}
          </Typography>
          <div className={styles.inputWrapper}>
            <div className={styles.inputBoxWrapper}>
              <input
                value={addressInput}
                className={clx({
                  [styles.inputWithPredictions]: showPredictions,
                })}
                ref={inputRef}
                placeholder={
                  addressInputPlaceholder?.value || 'Enter your address'
                }
                onKeyDown={handleInputKeyDown}
                onChange={(e) => {
                  setAddressInput(e.target.value)
                  dispatch(acpSlice.actions.setSelectedAddress(undefined))
                  dispatch(acpSlice.actions.setCheckAvailablity(undefined))
                }}
              />
              <div
                className={clx({ [styles.predictiveLayover]: showPredictions })}
              >
                {showPredictions &&
                  predictions?.map((address: any) => {
                    return (
                      <div
                        key={`address-${address?.addressKey}`}
                        className={styles.addressRecord}
                        onClick={async () => {
                          dispatch(acpSlice.actions.setSelectedAddress(address))
                          await setAddressInput(
                            formSingleLineAddress(address?.address, true),
                          )
                          if (inputRef?.current) {
                            inputRef?.current?.focus()
                          }
                          handleOnSubmit(address)
                        }}
                      >
                        {formSingleLineAddress(
                          address?.address as SingleLineAddress,
                          true,
                        )}
                      </div>
                    )
                  })}
              </div>
            </div>
            <button onClick={() => handleOnSubmit()}>
              <Magnify />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles(({ breakpoints }: { breakpoints: any }) => ({
  root: {
    background: colors.main.dark,
  },
  innerWrapper: {
    ...COMPONENT_WRAPPER,
    padding: '10rem 1rem',
  },
  contentWrapper: {
    maxWidth: 850,
  },
  title: {
    marginBottom: 16,
    textTransform: 'none',
    [breakpoints.down('sm')]: {
      fontSize: '2.25rem',
      lineHeight: '2.75rem',
    },
  },
  subtitle: {
    [breakpoints.down('sm')]: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
  },
  inputBoxWrapper: {
    flex: 1,
    position: 'relative',
  },
  inputWrapper: {
    marginTop: 32,
    display: 'flex',
    position: 'relative',
    '& input': {
      width: '100%',
      height: 64,
      borderRadius: 32,
      padding: '0 24px',
      border: 0,
      paddingRight: 50,
      outline: 'none',
      fontFamily: 'PP Object Sans',
      fontSize: 18,
    },
    '& button': {
      background: 'transparent',
      border: 0,
      position: 'absolute',
      right: 24,
      height: 64,
      cursor: 'pointer',
      '& path': {
        fill: colors.main.brightRed,
        transition: '.3s all',
      },
      '&:hover': {
        '& path': {
          fill: colors.main.dark,
        },
      },
      '&:disabled': {
        '& path': {
          fill: colors.main.gray,
        },
      },
    },
  },
  predictiveLayover: {
    position: 'absolute',
    top: 60,
    background: colors.main.white,
    left: 0,
    width: '100%',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    border: '1px solid',
    borderColor: colors.main.gray,
    borderTop: 'none',
    '&:after': {
      content: "''",
      position: 'absolute',
      top: 0,
      right: '1%',
      left: '1%',
      height: 1,
      width: '98%',
      backgroundColor: colors.main.borderGrey,
    },
  },
  addressRecord: {
    padding: '8px 16px',
    margin: '4px 8px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: colors.main.newBackgroundGray,
      fontWeight: 700,
      borderRadius: 40,
    },
  },
  inputWithPredictions: {
    borderBottomLeftRadius: '0!important',
    borderBottomRightRadius: '0!important',
  },
}))

export default Hero
