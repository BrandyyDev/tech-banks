import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBanksAsync } from '../redux/banks/banks.actions'
import { ContainerDashboard } from './Dashboard.styles'
import CardBank from '../components/cardBank/CardBank'

const Dashboard = () => {
  const { banks, isLoading, error } = useSelector(state => state.banks)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchBanksAsync())
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <ContainerDashboard>
      {banks?.map((item) => (
        <CardBank key={item.id} item={item} />
      ))}
    </ContainerDashboard>
  )
}
export default Dashboard