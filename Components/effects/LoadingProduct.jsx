import '../../assets/styles/loadingProduct.css'

const LoadingProduct = ( {Message}) => {
    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                </div>
                    <strong className="sr-only mt-1 mx-lg-3">{!Message ? 'Please wait while loading the products... ' : Message}</strong>
            </div>
        </>
    )
}
export default LoadingProduct;