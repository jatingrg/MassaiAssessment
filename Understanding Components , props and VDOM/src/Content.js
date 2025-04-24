import BCL from "./BCL";
import BRCC from "./BRCC";

function Content(){
    const cardData = [
        { title: "Card 1: Welcome", content: "This is the first card with some welcoming text." },
        { title: "Card 2: Information", content: "This card provides useful information for the user." },
        { title: "Card 3: Details", content: "Here you can see detailed information about the application." }
      ];
    const cardData1 =[
        {title:"starter",list1:"1 loream ispum",list2:"Loream, ipsum dolor",list3:"Monthly Updates",money:"free",buttoncontent:"Get Started"},
        {title:"Lorem Plus",list1:"1 loream ispum",list2:"Loream, ipsum dolor",list3:"Monthly Updates",money:"$32.00",buttoncontent:"Get Started"},
        {title:"Lorem Plus",list1:"1 loream ispum",list2:"Loream, ipsum dolor",list3:"Monthly Updates",money:"$50.00",buttoncontent:"Get Started"}


    ]  
    return(
        <>
            <div style={styles.container}>
                {cardData.map((data,index)=>(
                    <BRCC key={index} title={data.title} content={data.content}/>
                ))}
            </div>
            <hr/>
            <h4>ans3</h4>
            <div style={styles.container1}>
                {cardData1.map((data,index)=>(
                    <BCL key={index} title={data.title} list1={data.list1} list2={data.list2} list3={data.list3} money={data.money} buttoncontent={data.buttoncontent}/>
                ))}
            </div>

        </>
    )
}
const styles ={
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        padding: '20px',
      },
    container1:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-evenly',
        
       

    }  
}
export default Content;