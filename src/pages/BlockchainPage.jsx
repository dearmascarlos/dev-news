import React from 'react'
import Header from '../components/Header/Header'
import NewsList from '../components/News/NewsList/NewsList'
import { Box, Typography } from '@mui/material'
import { getNews } from '../services/apiNews'

function BlockchainPage() {

  const [news, setNews] = React.useState([])

  const getBlockChainNews = async (q) =>  {
    const blockChainNews = await getNews('blockchain')
    setNews(blockChainNews)
    return false
  }

  React.useEffect(() => {getBlockChainNews()}, [])
  return (
    <div>
      <Header/>
      <Box sx={{mt: 30, mb: 5 }}>
        <Typography 
          sx={{
            fontSize: 32
          }}>
          BLOCKCHAIN NEWS
        </Typography>
      </Box>
          <NewsList news= {news}/>
    </div>
  )
}

export default BlockchainPage