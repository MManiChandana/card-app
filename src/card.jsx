import profilePic from './assets/Screenshot 2024-07-01 154823.png'
function Card() {

    return(
        <div className="card">
            <img className="card-image" src= {profilePic} alt="profile picture"></img>
            <h2 className="card-title">Image</h2>
            <p className="card-text">I am an image.</p>
        </div>
    )
}

export default Card