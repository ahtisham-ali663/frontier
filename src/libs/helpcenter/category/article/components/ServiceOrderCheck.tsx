import { useState } from 'react'
import { InjectHTML, Button, Loading } from 'src/blitz'
import { makeStyles } from '@material-ui/core'
import colors from 'src/styles/theme/colors'
import { Input } from 'src/ui-kit'
import APIClient from 'src/api-client'
import { CheckMarkBlue, ErrorCheckMark } from 'src/blitz/assets/react-icons'

const OUTAGE_STATUS = {
  NONE: '',
  NO_OUTAGE: 'NO_OUTAGE',
  OUTAGE: 'OUTAGE',
  ERROR: 'ERROR',
  LOADING: 'LOADING',
}

const ServiceOrderCheck = ({ data }: any) => {
  const [inputNumber, setInputNumber] = useState('')
  const [status, setStatus] = useState(OUTAGE_STATUS.NONE)
  const styles = useStyles()
  if (!data || Object.keys(data || {}).length == 0) {
    return null
  }
  const {
    id,
    title,
    backgroundColor,
    buttonText,
    description,
    inputTitle,
    legalText,
    inputPlaceholder,
    outageHeader,
    outageMessage,
    noOutageHeader,
    noOutageMessage,
    apiErrorHeader,
  } = data || {}

  const handleCheck = async () => {
    try {
      setStatus(OUTAGE_STATUS.LOADING)
      const response = await APIClient.checkOutages(
        inputNumber.replace(/\D/g, ''),
      )
      setStatus(
        response?.data?.outage ? OUTAGE_STATUS.OUTAGE : OUTAGE_STATUS.NO_OUTAGE,
      )
    } catch (error) {
      setStatus(OUTAGE_STATUS.ERROR)
    }
  }

  const renderStatus = () => {
    if (status === OUTAGE_STATUS.NONE) {
      return null
    }
    if (status === OUTAGE_STATUS.LOADING) {
      return <Loading className={styles.loading} />
    }
    if (status === OUTAGE_STATUS.NO_OUTAGE) {
      return (
        <div className={styles.messageHeaderContainer}>
          <CheckMarkBlue className={styles.success} />
          <div>
            <InjectHTML
              styleType="h6"
              tagType="h6"
              value={noOutageHeader?.value}
            />
            <InjectHTML value={noOutageMessage?.value} />
          </div>
        </div>
      )
    }
    if (status === OUTAGE_STATUS.OUTAGE) {
      return (
        <div className={styles.messageHeaderContainer}>
          <ErrorCheckMark />
          <div>
            <InjectHTML
              styleType="h6"
              tagType="h6"
              value={outageHeader?.value}
            />
            <InjectHTML value={outageMessage?.value} />
          </div>
        </div>
      )
    }
    return (
      <div className={styles.messageHeaderContainer}>
        <ErrorCheckMark />
        <div>
          <InjectHTML
            styleType="h6"
            tagType="h6"
            value={apiErrorHeader?.value}
          />
        </div>
      </div>
    )
  }

  return (
    <div
      className={styles.root}
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
      {description?.value && (
        <InjectHTML
          tagType="p"
          styleType="p1"
          value={description?.value as string}
        />
      )}
      {inputTitle?.value && (
        <InjectHTML
          tagType="p"
          styleType="p1"
          value={inputTitle?.value as string}
        />
      )}
      <div className={styles.inputContainer}>
        <Input
          label={''}
          placeholder={inputPlaceholder?.value}
          name={'Billing Number'}
          value={inputNumber}
          fullWidth={true}
          onChange={(ev: any) => {
            setInputNumber(ev.target.value)
            setStatus(OUTAGE_STATUS.NONE)
          }}
          mask={'(999) 999-9999'}
        />
        <Button
          type="button"
          text={buttonText?.value}
          className={styles.button}
          disabled={
            inputNumber.replace(/\D/g, '').length !== 10 ||
            status === OUTAGE_STATUS.LOADING
          }
          onClick={handleCheck}
        />
      </div>
      <div className={styles.renderStatus}>{renderStatus()}</div>
      {legalText?.value && (
        <InjectHTML
          data-testid="legalText"
          tagType="p"
          styleType="p3"
          value={legalText?.value as string}
        />
      )}
    </div>
  )
}

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    padding: '2rem 2rem 1rem',
    marginBottom: 80,
    borderRadius: 32,
    [breakpoints.down('sm')]: {
      marginBottom: 32,
      padding: 16,
    },
  },
  title: {
    marginBottom: 16,
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    '& input': {
      flex: 1,
      height: 50,
      padding: '0px 16px',
      fontFamily: 'PP Object Sans Medium',
      letterSpacing: 1,
      fontSize: 16,
      border: 0,
    },
    '& button': {
      width: 'max-content',
      marginTop: 0,
    },
    [breakpoints.down('xs')]: {
      display: 'block',
      '& button': {
        width: '100%',
        marginTop: 20,
        display: 'block',
      },
    },
  },
  button: {
    marginTop: 32,
    display: 'flex',
    fontSize: 18,
  },
  renderStatus: {
    margin: '20px 0px',
  },
  loading: {
    margin: 0,
  },
  messageHeaderContainer: {
    display: 'flex',
    gap: 8,
    '& svg': {
      marginTop: 4,
      height: 20,
      width: 20,
    },
  },
  success: {
    '& path': {
      stroke: colors.main.green,
    },
  },
}))

export default ServiceOrderCheck
