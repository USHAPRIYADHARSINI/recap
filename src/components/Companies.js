import React from 'react'
import { useEffect, useState } from 'react'
import Company from './Company';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
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
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

function Companies() {
    const [companies, setCompanies] = useState([]);
    const [search, setSearch] = useState("");

   

    useEffect(()=>{
        fetch("https://632161fcfd698dfa29f6a334.mockapi.io/companies")
        // .then(console.log("fetched"))
        // .then((data)=> data.json)
        // .then((data)=> console.log(data, "data fetched successfully"))
        .then(function(response){
          response.json()
          .then(function(data) {
              setCompanies(data);
          })
        // .then ((mv)=>console.log(mv))
        .catch((err)=> console.error(err));
     
        }
        )
     },[])

     async function handleChange(value) {
      setSearch([value])
      const searchFilter = companies
      .filter((data)=>(data.name)==search)
      // .map((data)=> console.log(data))
      // console.log((data)=> data.name)
      console.log(searchFilter)
  }
    return <div>
    <h1>companies</h1>
    <Search>
            <SearchIconWrapper>
              <SearchIcon /> 
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(event)=>handleChange(event.target.value)}
            />
          </Search>
          <p>{search}</p>
    <div className='companies-list-container'>
    {/* console.log({usersList}) */}
    {companies.map((company, index)=> (
      <Company key = {index} company ={company} id ={index}/>) )}
    </div>
    </div>
}

export default Companies