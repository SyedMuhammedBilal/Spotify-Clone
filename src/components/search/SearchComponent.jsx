import React from 'react'
import { useDataLayerValue } from '../../store/index'
import './Search.scss'

const SearchComponent = () => {
    const [{ categories }] = useDataLayerValue();
    console.log('pop=seartches=====>>>>', categories);
    
    return (
        <div className="wrapper">
            {categories?.categories?.items?.map((item) => {
                return (
                    <div key={item?.id} className="category">
                        <img src={item?.icons[0]?.url} alt="category" />
                        <div className="category__content">
                            <h5> {item?.name} </h5>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default SearchComponent
