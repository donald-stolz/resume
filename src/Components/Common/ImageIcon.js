import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
    avatar: {
        width: 'auto',
        height: 'auto',
    },
};

function ImageIcon(props) {
    const { classes, title, src } = props;
    return <Avatar alt={title} src={src} className={classes.avatar} />;
}

ImageIcon.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
};

ImageIcon.defaultProps = {
    title: 'Title',
    src: '/images/profilepic.jpg',
};

export default withStyles(styles)(ImageIcon);
