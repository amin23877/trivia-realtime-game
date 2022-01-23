import './CategoriesList.scss'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CategoryItem from "./categoryItem/CategoryItem";
const CategoriesList = ({ categories, handleGotoBack, handleSelectCategory }) => {

    return (
        <>
            <div className="categories-list w-100 h-100">
                <div className="categories-list__header">
                    <p className="categories-list__header--title">
                        Select the category you want
                    </p>
                    <ArrowBackIcon onClick={handleGotoBack} className="categories-list__header--back-icon" />
                </div>
                <div className="categories-list__category-item-container">
                    {
                        categories && categories.map((category, index) => (
                            <CategoryItem handleSelectCategory={handleSelectCategory} index={index} data={category} key={category._id} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default CategoriesList