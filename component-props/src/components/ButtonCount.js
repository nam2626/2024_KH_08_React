export default function ButtonCount(props) {
    return <button onClick={props.addCount}>{props.count}</button>;
}