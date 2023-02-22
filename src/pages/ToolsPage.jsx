import React from 'react'
import Header from '../components/Header/Header'
import NewsList from '../components/News/NewsList/NewsList'
import { Box, Typography } from '@mui/material'
import { getNews } from '../services/apiNews'


function ToolsPage() {
  const [news, setNews] = React.useState([])

  const getToolNews = async (q) =>  {
    const toolNews = await getNews('tools dev')
    setNews(toolNews)
    return false
  }
  console.log(news);
  React.useEffect(() => {getToolNews()}, [])
  return (
    <div>
      <Header/>
      <Box sx={{mt: 30, mb: 5 }}>
        <Typography 
          sx={{
            fontSize: 32
          }}>
          TOOLS NEWS
        </Typography>
      </Box>
          <NewsList news= {news}/>
    </div>
  )
}


export default ToolsPage