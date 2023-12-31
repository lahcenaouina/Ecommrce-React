
const Pagination = () => {
    return (
    <nav className="mt-4" aria-label="Page navigation sample">
        <ul className="pagination">
            <li className="page-item disabled">
                <a className="page-link" href="#">
                    Previous
                </a>
            </li>
            <li className="page-item active">
                <a className="page-link" href="#">
                    1
                </a>
            </li>
            <li className="page-item">
                <a className="page-link" href="#">
                    2
                </a>
            </li>
            <li className="page-item">
                <a className="page-link" href="#">
                    3
                </a>
            </li>
            <li className="page-item">
                <a className="page-link" href="#">
                    Next
                </a>
            </li>
        </ul>
    </nav>

    )
}
export default Pagination