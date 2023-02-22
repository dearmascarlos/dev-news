import React from 'react'
import { getNews } from '../../services/apiNews'
import NewsCard from '../News/NewsCard/NewsCard'
import { Box } from '@mui/material'

function SearchList( { search }) {
  const [news, setNews]  = React.useState([])

  console.log(search)
 
  const getSearchNews = async (q) => {
    const getSearch = await getNews(search)
    console.log(getSearch)
    setNews(getSearch)
    return false
  }

    const renderSearchNews = () => {
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
    
      React.useEffect(() => {getSearchNews()}, [])
    
      return (
        <div className='content-wrap'>
        <Box clasName='left-section' sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', maxWidth: 800, paddingLeft: 2, paddingRight: 2}}>
          {renderSearchNews()}
        </Box>
        <Box clasName='right-section' sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap-reverse', maxWidth: 800, paddingLeft: 2, paddingRight: 2}}>
          {renderSearchNews()}
        </Box>
        </div>
      )
    }

export default SearchList