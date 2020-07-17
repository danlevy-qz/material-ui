import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import AppFooter from 'docs/src/modules/components/AppFooter';
import AppFrame from 'docs/src/modules/components/AppFrame';
import Link from 'docs/src/modules/components/Link';
import Head from 'docs/src/modules/components/Head';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      flex: '1 0 100%',
    },
    hero: {
      paddingTop: theme.spacing(8),
      color: theme.palette.primary.main,
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(8),
      [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(16),
        paddingBottom: theme.spacing(16),
        flexDirection: 'row',
        alignItems: 'flex-start',
        textAlign: 'left',
      },
    },
    title: {
      marginLeft: -12,
      whiteSpace: 'nowrap',
      letterSpacing: '.7rem',
      textIndent: '.7rem',
      fontWeight: theme.typography.fontWeightLight,
      [theme.breakpoints.only('xs')]: {
        fontSize: 28,
      },
    },
    logo: {
      flexShrink: 0,
      width: 120,
      height: 120,
      marginBottom: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        marginRight: theme.spacing(8),
        width: 195,
        height: 175,
      },
    },
    button: {
      marginTop: theme.spacing(4),
    },
    social: {
      padding: theme.spacing(2, 0),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: 21,
      boxSizing: 'content-box',
      '& a': {
        color: theme.palette.background.paper,
      },
    },
    github: {
      width: 105,
      display: 'flex',
      justifyContent: 'flex-end',
      marginRight: theme.spacing(1),
      '& span': {
        display: 'flex',
      },
    },
    twitter: {
      width: 160,
      display: 'flex',
    },
  }),
  { name: 'LandingPage' },
);

const GettingStartedLink = React.forwardRef((props, ref) => {
  return <Link href="/getting-started/installation" naked ref={ref} {...props} />;
});

// eslint-disable-next-line no-unused-vars
export default function LandingPage(props) {
  const t = useSelector((state) => state.options.t);
  const classes = useStyles();

  return (
    <AppFrame>
      <div className={classes.root}>
        <Head />
        <main id="main-content" tabIndex="-1">
          <div className={classes.hero}>
            <Container maxWidth="md" className={classes.content}>
              <img src="/static/logo_raw.svg" alt="" className={classes.logo} />
              <div>
                <Typography
                  variant="h3"
                  component="h1"
                  color="inherit"
                  gutterBottom
                  className={classes.title}
                >
                  {'MATERIAL-UI'}
                </Typography>
                <Typography variant="h5" component="p" color="inherit">
                  {t('strapline')}
                </Typography>
                <Button
                  component={GettingStartedLink}
                  className={classes.button}
                  variant="outlined"
                  color="primary"
                >
                  {t('getStarted')}
                </Button>
              </div>
            </Container>
          </div>
        </main>
        <AppFooter />
      </div>
    </AppFrame>
  );
}
