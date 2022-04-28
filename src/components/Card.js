import './Card.css';

function Card(props) {
    const classes = 'card_expance ' + props.className;
    return <div className={classes}>{props.children}</div>;
}

export default Card;