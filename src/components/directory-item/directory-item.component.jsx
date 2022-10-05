


import { useNavigate } from 'react-router-dom';
import {BackgroundImage, Body, DirectoryItemContainer} from './directory-item.styles'

const DirectoryItem = ({category}) => {
    const {title, imageUrl, route}=category;
    const navigate = useNavigate(route);

    const onNavigateHandler = () => navigate(route);
    // console.log(imageUrl);
    return(
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage imageUrl={imageUrl}/>
            <Body>
                <h2>{title}</h2>
                <p>shop now</p>
            </Body>
        </DirectoryItemContainer>
);
}

export default DirectoryItem;
