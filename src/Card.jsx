
function Card({title, description="", image}){
    return(
        <div className="card">
            <img src={image} alt="project image"></img>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default Card