function BRCC({title,content}){
    return(
        <>
        <div style={styles.card}>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>


        </>
    )
}

const styles={
    card:{
        border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '10px',
    width: '300px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    }
}
export default BRCC;