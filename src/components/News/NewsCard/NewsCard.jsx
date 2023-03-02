import React from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import WebIcon from '@mui/icons-material/Web';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router';



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const pages = ['Tech', 'BlockChain', 'Frontend','Backend', 'IA', 'Tools']

function NewsCard( {title, url, text, content, image, date, author} ) {
  const navigate = useNavigate()

  const defaultImage = 'https://images.unsplash.com/photo-1603468620905-8de7d86b781e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'

  const checkImage = () => {
   return !image || image == null || image == '' ? image = defaultImage : image
  }
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [expanded, setExpanded] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card 
      sx={{ 
        maxWidth:800, 
        mb: 5,
        backgroundColor:'#977d4c',
        borderRadius: '20px'
      }}
    >
      <CardHeader
        title={title}
        subheader={date}
      />
      <CardMedia
        component="img"
        height="300"
        image={checkImage()}
        alt="Default"
      />
      <CardContent>
        <Typography variant="body2" color="text.main">
          {text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing >


    
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" onClick={(e) => navigate(`/${page}`)}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>


        <IconButton 
          aria-label="go to web" 
          href={url}
          target='_blank'
        >
          <WebIcon 
            sx={{mr: 2}}
          />Go News
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Summary</Typography>
          <Typography paragraph>
            {content}
          </Typography>

        </CardContent>
      </Collapse>
    </Card>
  );
}

export default NewsCard