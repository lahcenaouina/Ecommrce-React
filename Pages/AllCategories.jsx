import {Outlet, useNavigate} from 'react-router-dom'

const AllCategories = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>AllCategories</div>

            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item" onClick={() => navigate('cars')}><a href="#">Cars</a></li>
                    <li className="breadcrumb-item" onClick={() => navigate('posts')} ><a href="#">Posts</a></li>
                    <li className="breadcrumb-item active"   onClick={() => navigate('products')}  aria-current="page">Products</li>
                </ol>
            </nav>
            <Outlet/>
        </>

    )
}
export default AllCategories