import React, { useEffect } from 'react'
import Header from '../components/Header/Header'
import { getNews } from '../services/apiNews'
import { Box, Typography } from '@mui/material'
import NewsList from '../components/News/NewsList/NewsList'
import { display } from '@mui/system'

function TechPage() {

  const [news, setNews] = React.useState([])

  const getTechNews = async (q) =>  {
    const techNews = await getNews('tech')
    setNews(techNews)
    return false
  }

  useEffect(() => {getTechNews()}, [])
  return (
    <div>
      <Header/>
      <Box sx={{mt: 30, mb: 5 }}>
        <Typography 
          sx={{
            fontSize: 32
          }}>
          TECH NEWS
        </Typography>
      </Box>
          <NewsList news= {news}/>
    </div>
  )
}

export default TechPage