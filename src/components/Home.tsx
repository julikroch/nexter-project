import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

type Highlight = {
    icon: any;
    label: string;
}

type HomeT = {
    id: number;
    title: string;
    image: string;
    location: Highlight;
    rooms: Highlight;
    meters: Highlight;
    price: Highlight;
}

const Home = (props: HomeT) => {

    const [favorite, setFavorite] = useState('');

    const handleClick = (id: string) => setFavorite(favorite === id ? '' : id);

    const { id, image, title, location, rooms, meters, price } = props

    return (
        <div className="home" key={id}>
            <img src={require(`../img/${image}`).default} alt={title} className="home__img" />
            <FaHeart className={`home__like ${favorite === image ? 'home__like--favorite' : 'home__like--default'}`} onClick={() => handleClick(image)} />
            <h5 className="home__name">{title}</h5>
            <div className="home__location">
                {<props.location.icon />}
                <p>{location.label}</p>
            </div>
            <div className="home__rooms">
                {<rooms.icon />}
                <p>{rooms.label}</p>
            </div>
            <div className="home__area">
                {<meters.icon />}
                <p>{meters.label}<sup>2</sup></p>
            </div>
            <div className="home__price">
                {<price.icon />}
                <p>${price.label}</p>
            </div>

            <button className="btn home__btn">Contact realtor</button>
        </div>
    )
}

export default Home;