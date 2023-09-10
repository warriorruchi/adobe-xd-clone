import './Card.css';

function Card(props) {

    return (
        <>
            <div className="card" >
                <div className='head'>

                    <img src={props.Url} alt="image" height="30px" width="30px" />



                    <div style={{ margin: "0" }}>
                        <h4 style={{ margin: "0", color: "#3CC3F2", font: "normal normal normal 24px/29px Exo 2.0" }}>{props.heading}</h4>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>
            </div>
        </>
    )
}
export default Card;