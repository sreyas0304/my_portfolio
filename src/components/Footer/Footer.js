import React from 'react';
import { Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { useStyles } from './styles';

export const Footer = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <React.Fragment>
            <Typography
                variant="h6"
                className={classes.footerStyle}>
                Made with&nbsp;<span role="img" aria-label="heart">💖</span>&nbsp;by&nbsp;<a style={{ color: theme.palette.text.primary }} href="https://www.linkedin.com/in/sreyas-sawant-5b7a8118b" target="_blank" rel="noreferrer">Sreyas Sawant</a>
            </Typography>
        </React.Fragment>
    );
};