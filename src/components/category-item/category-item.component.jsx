import './category-item.styles.scss';

const CategoryItem = ({category}) => {
    const {title, imageUrl}=category;
    // console.log(imageUrl);
    return(
        <div className='category-container'>
            <div className='background-image' style = {{backgroundImage : `url(${imageUrl})` }}/>
            <div className='category-body-container'>
                <h2>{title}</h2>
                <p>shop now</p>
            </div>
        </div>
);
}

export default CategoryItem;
