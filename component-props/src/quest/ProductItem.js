export default ({name, price, description}) => {
    return (
        <>
            <p>상품명 : {name}</p>
            <p>가격 : {price}</p>
            <p>설명 : {description}</p>
        </>
    );
}