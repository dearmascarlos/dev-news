import React from 'react'
import Header from '../components/Header/Header'
import NewsList from '../components/News/NewsList/NewsList'
import { Box, Typography } from '@mui/material'
import { getNews } from '../services/apiNews'


function FrontendPage() {
  const [news, setNews] = React.useState([])

  const getFrontendNews = async (q) =>  {
    const frontendNews = await getNews('react.js')
    setNews(frontendNews)
    return false
  }

  React.useEffect(() => {getFrontendNews()}, [])
  return (
    <div>
      <Header/>
      <Box sx={{mt: 30, mb: 5 }}>
        <Typography 
          sx={{
            fontSize: 32
          }}>
          FRONTEND NEWS
        </Typography>
      </Box>
          <NewsList news= {news}/>
    </div>
  )
}

export default FrontendPage