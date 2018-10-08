import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card, { CardActions, CardContent } from '@material-ui/core/Card';
import { CircularProgress } from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
		marginTop: 10,
    maxWidth: '500',
  },
  progress: {
    marginTop: 5,
		marginLeft: 'auto',
		marginRight: 'auto'
  },
};

function MediaCard(props) {
  const { classes, children } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CircularProgress
					size={250}
				 className={classes.progress} variant="static" value={95} />
        <CardContent>
          {children}
        </CardContent>

      </Card>
    </div>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
