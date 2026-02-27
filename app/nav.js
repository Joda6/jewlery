"use client"
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import Image from 'next/image'
import Link from 'next/link';
import {searchcont} from './searchcontext';
import { useContext } from 'react';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
export default function PrimarySearchAppBar() {
  
const {search,setsearch} = useContext (searchcont)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:'rgb(158, 124, 74)',color:'bisque'
        ,height:'20vh',borderRadius:'20px'}}className= {'app'}>
        <Toolbar style={{paddingTop:'25px'}}>

         
        <Link href={'/'}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'block', sm: 'block' } }}
            style={{cursor:'pointer',paddingRight:'20px'}}
            className= {'gold'}
          >
           GOLD Brand
          </Typography>
        </Link>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={search}
              onChange={function (e) {
                setsearch(e.target.value)
              }}
            />
          </Search>

          <Box sx={{ flexGrow: 1 }} />

          {/* Messages visible on all screens */}
          <Link href={'/product/Add'}>
          <Box>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge  color="error">
                <MailIcon />
              </Badge>
            </IconButton>
          </Box>
</Link>
        </Toolbar>
      </AppBar>

<Image
  src="/jewnav.jfif"
  alt="jewelry banner"
  width={1200}
  className='navimg'
  height={500}
  style={{ width: "100%", height: "100vh",cursor:'pointer',objectFit:'cover',objectPosition:'center'}}
/>
    </Box>

  );
}