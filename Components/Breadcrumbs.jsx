import {Link, useLocation} from 'react-router-dom';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <div className="row">
            <div className="col">
                <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                    <ol className="breadcrumb mb-0">


                        {pathnames.map((path, index) => {
                            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                            const isLast = index === pathnames.length - 1;

                            return isLast ? (
                                <li key={path} className="breadcrumb-item active" aria-current="page">
                                    {path}
                                </li>
                            ) : (
                            <Link key={path} to={routeTo} className="breadcrumb-item">
                                {path}
                            </Link>
                            );
                        })}


                    </ol>
                </nav>
            </div>
        </div>


    );
};

export default Breadcrumbs;
