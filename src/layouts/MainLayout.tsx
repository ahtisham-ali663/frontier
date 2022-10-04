import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useDispatch } from 'react-redux'
import LinearProgress from '@material-ui/core/LinearProgress'
import { makeStyles } from '@material-ui/core'
import { appDataSlice } from 'src/redux/slicers'
import { Alert } from 'src/blitz'
import { useAppData, useAlterChatRedirects } from 'src/hooks'
import { LOCAL_STORAGE_KEYS } from 'src/constants'
const SomethingWrong = dynamic(() => import('src/components/SomethingWrong'))
const PageHead = dynamic(() => import('src/components/PageHead'))
const NewFooter = dynamic(() => import('src/components/NewFooter'))
const NewHeader = dynamic(() => import('src/components/NewHeader'))
const Chat = dynamic(() => import('src/components/Chat'))

let isAlertsParsed = false

interface PageProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
  success: boolean
  children: any
}

const Layout = ({ data, success, children }: PageProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true)
  const [alerts, setAlerts] = useState([])
  const classes = useStyles()
  const dispatch = useDispatch()
  useAlterChatRedirects(!isLoading)
  const alertsData = useAppData('alertsListHomePage', true)
  // Updating data to redux store
  useEffect(() => {
    dispatch(appDataSlice.actions.setData(data))
    setIsLoading(false)
  }, [dispatch, data])

  const parseAlerts = () => {
    try {
      const closedAlerts = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_KEYS.CLOSED_ALERTS) || '[]',
      )
      const alerts =
        alertsData?.list?.targetItems?.map(
          ({ id, message, messageType, strongText }: any) => ({
            id,
            message: message?.value,
            strongText: strongText?.value,
            isSuccess: messageType?.type?.type?.value === 'Success',
          }),
        ) || []
      const filteredAlerts = alerts?.filter(
        ({ id }: any) => !closedAlerts?.find((alertId: any) => alertId === id),
      )
      setAlerts(filteredAlerts)
    } catch (error) {
      console.error('Error parsing alerts')
    }
  }

  useEffect(() => {
    if (!isAlertsParsed && alertsData?.list) {
      parseAlerts()
      isAlertsParsed = true
    }
  }, [alertsData])

  if (isLoading) return <LinearProgress />

  if (!success) return <SomethingWrong />

  const handleAlertClose = (id: string) => {
    const existingClosedAlerts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEYS.CLOSED_ALERTS) || '[]',
    )
    existingClosedAlerts.push(id)
    localStorage.setItem(
      LOCAL_STORAGE_KEYS.CLOSED_ALERTS,
      JSON.stringify(existingClosedAlerts),
    )
    parseAlerts()
  }

  return (
    <>
      <PageHead />
      <NewHeader />
      <div className={classes.main}>
        {alerts?.map(
          ({
            id,
            message,
            strongText,
            isSuccess,
          }: {
            id: string
            message: string
            strongText: string
            isSuccess: boolean
          }) => {
            return (
              <div key={id}>
                <Alert
                  message={message}
                  isSuccess={isSuccess}
                  strongText={strongText}
                  handleClose={() => handleAlertClose(id)}
                />
              </div>
            )
          },
        )}
        {children}
      </div>
      <NewFooter />
      <Chat />
    </>
  )
}

export default Layout

const useStyles = makeStyles(({ breakpoints }) => ({
  main: {
    marginTop: 39,
    [breakpoints.down('sm')]: {
      marginTop: 0,
    },
  },
}))
