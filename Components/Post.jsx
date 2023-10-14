const Post = ({Data}) => {
    return (
        <div className="card border-light mb-3 border-2" style={{maxWidth: "18rem"}}>
            <div className="card-header">
                {Data.Title}
            </div>
            <div className="card-body">
                <h5 className="card-title">{Data.id} </h5>
                <p className="card-text">
                    {Data.body}
                </p>
            </div>
        </div>

    )
}
export default Post;