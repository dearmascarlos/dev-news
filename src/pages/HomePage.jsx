import React from 'react'
import Header from '../components/Header/Header'
import NewsList from '../components/News/NewsList/NewsList'
import { Box, Typography } from '@mui/material'
import { getCurrentNews } from '../services/apiNews'

function HomePage() {
  const [news, setNews] = React.useState([])

  const today = new Date()
  const date = today.toString()

  console.log(date);

  const showCurrentNews = async (q) =>  {
    const currentNews = await getCurrentNews('technology')
    setNews(currentNews)
    return false
  }

  React.useEffect(() => {showCurrentNews()}, [])
  return (
    <div>
      <Header/>
      <Box sx={{mt: 30, mb: 5 }}>
        <Typography 
          sx={{
            fontSize: 32
          }}>
          TODAY NEWS
        </Typography>
        <Typography 
          sx={{
            fontSize: 18
          }}>
          {date}
        </Typography>
      </Box>
          <NewsList news= {news}/>
    </div>
  )
}

export default HomePage