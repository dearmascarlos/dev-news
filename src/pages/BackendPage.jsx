import React from 'react'
import Header from '../components/Header/Header'
import NewsList from '../components/News/NewsList/NewsList'
import { Box, Typography } from '@mui/material'
import { getNews } from '../services/apiNews'


function BackendPage() {
  const [news, setNews] = React.useState([])

  const getBackendNews = async (q) =>  {
    const backendNews = await getNews('SQL')
    setNews(backendNews)
    return false
  }

  React.useEffect(() => {getBackendNews()}, [])
  return (
    <div>
      <Header/>
      <Box sx={{mt: 30, mb: 5 }}>
        <Typography 
          sx={{
            fontSize: 32
          }}>
          BACKEND NEWS
        </Typography>
      </Box>
          <NewsList news= {news}/>
    </div>
  )
}

export default BackendPage