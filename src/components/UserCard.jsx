const Card = ({ user }) => {
    console.log('user',user)
    return (
        
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                alt="img" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{user.firstName}</h2>
                <p>About: {user.about}</p>
                <p>Age: {user.age}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Intersted</button>
                <button className="btn btn-secondary">Ignored</button>
                </div>
            </div>
        </div>
    );
}

export default Card;