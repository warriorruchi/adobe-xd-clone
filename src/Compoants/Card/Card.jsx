import './Card.css';

function Card(props) {

    return (
        <>
            <div className="card" >
                <div className='head'>
                    
                        <img src={props.Url} alt="image" height="30px" width="30px" />
                        {/* {console.log(props.)} */}
                       
                    
                    <div style={{margin:"0"}}>
                        <h4 style={{margin:"0",color:"#2d6f98"}}>{props.heading}</h4>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ratione magni dicta earum.</p>
            </div>
        </>
    )
}
export default Card;