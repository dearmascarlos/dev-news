import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import NewsCard from '../NewsCard/NewsCard'

function NewsList( { news } ) {

  const renderNews = () => {
    return (
        news && news?.map((news, i) => {
            return (
                <NewsCard
                    key={i}
                    title={news.title}
                    url={news.url}
                    text={news.description}
                    content={news.content}
                    image={news.urlToImage}
                    date={news.publishedAt}
                    author={news.author}
                />  
            )
        })
    )
  }

  useEffect(() => {renderNews()}, [])

  return (
    <div className='content-wrap'>
    <Box clasName='left-section' sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', maxWidth: 800, paddingLeft: 2, paddingRight: 2}}>
      {renderNews()}
    </Box>
    <Box clasName='right-section' sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap-reverse', maxWidth: 800, paddingLeft: 2, paddingRight: 2}}>
      {renderNews()}
    </Box>
    </div>
  )
}

export default NewsList