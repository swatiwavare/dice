import axios from 'axios'
import React, { useState } from 'react'
import DetailsInCard from '../DetailsInCard/DetailsInCard'
import { Button, TextField } from '@mui/material'
import classes from './SearchBar.module.css'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('')
    const [sort, setSort] = useState('score');
    const [repos, setRepos] = useState([]);
    const [showSort, setShowSort] = useState(false);
    const searchHandler = (e) => {
        setSearchInput(e.target.value)
    }
    const clickHandler = () => {
        axios(`https://api.github.com/search/repositories?q=${searchInput}&sort=score`)
            .then(result => {
                setRepos(result.data.items);
                setShowSort(true)
            })
            .catch(err => console.log(err))
    }

    const changeSort = (event) => {
        let sortType = event.target.value
        setSort(sortType);
        let newRepos = JSON.parse(JSON.stringify(repos));
        newRepos.sort((a, b) => a[sortType] > b[sortType] ? 1 : -1)
        setRepos(newRepos);
    }

    return (
        <>
            <div className={classes.search_container}>
                <div className={classes.text_field}><TextField fullWidth id="outlined-basic" label="search" variant="outlined" value={searchInput} onChange={searchHandler} /></div>
                <div className={classes.text_field}><Button onClick={clickHandler} variant="contained">Search</Button></div>
                {
                    showSort && <div className={classes.text_field}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={sort}
                                label="Age"
                                onChange={changeSort}
                            >
                                <MenuItem value='score'>score</MenuItem>
                                <MenuItem value='watchers_count'>watchers count</MenuItem>
                                <MenuItem value='name'>name</MenuItem>
                                <MenuItem value='created_at'>created at</MenuItem>
                                <MenuItem value='updated_at'>updated at</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                }
            </div>
            <DetailsInCard repos={repos} />
        </>
    )

}
export default SearchBar