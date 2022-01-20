import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import './CategoriesList.scss'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useNavigate } from "react-router-dom";
import { GET_CATEGORIES_LIST } from 'redux/actions/mainActions/generalActions';
import CategoryItem from "./categoryItem/CategoryItem";

const CategoriesList = () => {
    const Dispatch = useDispatch()
    const navigate = useNavigate();

    const categories = useSelector((state) => state.stateGeneral.categoriesList);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if (categories) {
            setLoading(false)
        } else {
            Dispatch(GET_CATEGORIES_LIST())
            setLoading(true)
        }
    }, [categories])
    console.log('cat',categories)
    const handleGotoBack = () => {
        navigate('/')
    }

    return (

        <div className="categories-list w-100 h-100">
            <div className="categories-list__header">
                <p className="categories-list__header--title">
                    Select the category you want
                </p>
                <ArrowBackIcon onClick={handleGotoBack} className="categories-list__header--back-icon" />
            </div>
            <div className="categories-list__category-item-container">
                {
                    categories && categories.map((category) => (
                        <CategoryItem data={category} key={category._id} />
                    ))
                }
            </div>
        </div>
    )
}

export default CategoriesList