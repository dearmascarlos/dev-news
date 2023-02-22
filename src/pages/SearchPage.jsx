import React from 'react'
import Header from '../components/Header/Header'
import SearchList from '../components/SearchLIst/SearchList'
import { Box, Typography } from '@mui/material'
import { searchContext } from '../App'


function SearchPage() {

  const { search } = React.useContext(searchContext)

  return (
    <div>
      <Header/>
      <Box sx={{mt: 30, mb: 5 }}>
        <Typography 
          sx={{
            fontSize: 32
          }}>
          YOUR NEWS
        </Typography>
      </Box>
          <SearchList search={search}/>
    </div>
  )
}


export default SearchPage