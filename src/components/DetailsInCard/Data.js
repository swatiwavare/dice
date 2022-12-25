import React from 'react'
import { Card } from '@mui/material';
import Classes from './Data.module.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
const data = (props) => {
    const { name, description, language, avatar, score, watchers_count } = props;
    return (<Card variant="outlined" className={Classes.card_container}>
        <div className={Classes.card_name_content}>Name: {name}</div>
        <div className={Classes.card_content}>description: {description}</div>
        <div className={Classes.card_content}>language: {language}</div>
        <div className={Classes.card_content}>avatar: {avatar}</div>
        <div className={Classes.card_watchers_count_content}>
            <div className={Classes.card_icon_content}><SportsScoreIcon /> : {score}</div>
            <div className={Classes.card_icon_content}><VisibilityIcon /> : {watchers_count}</div>
        </div>
    </Card>)
}
export default data