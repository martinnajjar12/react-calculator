import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  headerFontSize: {
    fontSize: '3rem',
    margin: '25px 0',
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <main>
      <Typography variant="h1" className={classes.headerFontSize}>Welcome to MathMagicians</Typography>
      <Typography>
        A mathemagician is a mathematician who is also a magician. The term
        mathemagic is believed to have been introduced by Royal Vale Heath
        with his 1933 book Mathemagic The name mathemagician was probably
        first applied to Martin Gardner, but has since been used to describe
        many mathematician/magicians, including Arthur T. Benjamin, Persi
        Diaconis, and Colm Mulcahy. Diaconis has suggested that the reason
        so many mathematicians are magicians is that inventing a magic trick and
        inventing a theorem are very similar activities. Mathemagician is a neologism,
        specifically a portmanteau, that combines mathematician and magician. A great
        number of self-working mentalism tricks rely on mathematical principles. Max
        Maven often utilizes this type of magic in his performance. The Mathemagician is
        name of a character in the 1961 children&apos;s book The Phantom Tollbooth.
        He is the ruler Digitopolis, the kingdom of mathematics.
      </Typography>
    </main>
  );
};

export default Home;
