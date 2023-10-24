import React, {useEffect, useState} from 'react';
import {useParams, useSearchParams} from 'react-router-dom';

const FilterbyPrice = ({setMinP ,setMaxP}) => {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams();
    const params = useParams();

    useEffect(() => {
        const max = searchParams.get('max');
        const min = searchParams.get('min');

        if (max) {
            setMaxPrice(parseInt(max, 10));
            setMaxP(parseInt(max, 10))
        }
        if (min) {
            setMinPrice(parseInt(min, 10));
            setMinP(parseInt(min, 10))

        }
    }, [searchParams]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchParams({min: minPrice, max: maxPrice});
    };

    return (
        <div className="container mt-5 bg-light p-4 rounded-2">
            {JSON.stringify(searchParams.get('max'))}
            <h3>Price Filter</h3>
            <form id="priceFilterForm">
                <div className="form-row">
                    <label>Range Price:</label>
                    <input
                        type="range"
                        min="100"
                        max="500"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        step="10"
                    />
                    {maxPrice}
                    <div className="form-group col-md-4">
                        <label htmlFor="minPrice">Min Price:</label>
                        <input
                            type="number"
                            className="form-control w-100"
                            id="minPrice"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                            placeholder="Min"
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="maxPrice">Max Price:</label>
                        <input
                            type="number"
                            className="form-control w-100"
                            id="maxPrice"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                            placeholder="Max"
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <button className="btn btn-primary" onClick={handleSubmit}>
                            Filter
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FilterbyPrice;
