import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import './CategoryItem.scss'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useNavigate } from "react-router-dom";
import { IMAGE_URL } from "common/values/CORE";

const CategoryItem = ({ data, index, handleSelectCategory }) => {
    const Dispatch = useDispatch()
    const navigate = useNavigate();

    return (

        <div onClick={() => handleSelectCategory(data)} className="category-item" style={{ animationDelay: `${150 * index}ms` }}>
            <div className="category-item__image">
                <img src={IMAGE_URL + data.logo} />
            </div>
            <p className="category-item__name">
                {data.name}
            </p>
        </div>
    )
}

export default CategoryItem