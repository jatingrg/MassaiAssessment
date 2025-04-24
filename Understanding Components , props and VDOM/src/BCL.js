function BCL({ title, list1, list2, list3, money, buttoncontent }) {
    return (
        
        <div style={styles.container}>
            <div style={styles.boxcontainer}>
               <h2>{title}</h2>
            <ul style={styles.container1}>
                <li>{list1}</li>
                <li>{list2}</li>
                <li>{list3}</li>
            </ul>
            <h1>{money}</h1>
            <button style={styles.button}>{buttoncontent}</button>
        </div>
        </div>
    );
}

const styles = {
    container: {
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-evenly'
       

        
    },
    boxcontainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        padding:'10px',
        marginLeft:'50px',
        justifyItems:'spacearound'
      
      },
    container1:{

      },
    button: {
        backgroundColor: 'violet',
        color: 'white',
        border: 'none',
        padding:'15px',
        borderRadius:'5px'
       
    }
};

export default BCL;
