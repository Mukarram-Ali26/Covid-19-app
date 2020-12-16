import React from 'react';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';
import { Card, CardContent,Typography, Grid} from '@material-ui/core';

const Cards = ({data:{confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed){
        return 'Loading...'
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>INFECTED</Typography>
                        <Typography varient="h5">
                            <CountUp start={0} end={confirmed.value} duration={3} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toString()}</Typography>
                        <Typography varient="body2">Number of active casses of Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>RECOVERED</Typography>
                        <CountUp start={0} end={recovered.value} duration={3} separator="," />
                        <Typography color="textSecondary">{new Date(lastUpdate).toString()}</Typography>
                        <Typography varient="body2">Number of recoveries from Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>DEATHS</Typography>
                        <CountUp start={0} end={deaths.value} duration={3} separator="," />
                        <Typography color="textSecondary">{new Date(lastUpdate).toString()}</Typography>
                        <Typography varient="body2">Number of deaths caused by Covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;