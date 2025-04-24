function Dynamiclist(){
    const items = ["React", "JavaScript", "CSS"];
    return(
        <>
         <div>
          <h1>My  List</h1>
          <ul>
              {items.map((item, index) => (
                  <li key={index}>{item}</li>
              ))}
          </ul>
      </div>
        </>
    )
}
export default Dynamiclist;