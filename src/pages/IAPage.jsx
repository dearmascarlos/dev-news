import React from 'react'
import Header from '../components/Header/Header'
import NewsList from '../components/News/NewsList/NewsList'
import { Box, Typography } from '@mui/material'
import { getNews } from '../services/apiNews'


function IAPage() {
  const [news, setNews] = React.useState([])

  const getIAdNews = async (q) =>  {
    const IANews = await getNews('IA')
    setNews(IANews)
    return false
  }

  React.useEffect(() => {getIAdNews()}, [])
  return (
    <div>
      <Header/>
      <Box sx={{mt: 30, mb: 5 }}>
        <Typography 
          sx={{
            fontSize: 32
          }}>
          IA NEWS
        </Typography>
      </Box>
          <NewsList news= {news}/>
    </div>
  )
}

export default IAPage