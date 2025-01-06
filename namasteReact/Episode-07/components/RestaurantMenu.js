import {useState , useEffect} from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router";
import {MENU_API} from "../utils/constants";

const RestuarantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
//this useParam will return the argument in the URL like /restaurant/43444 
    const {resId} = useParams();  //so above 43444 will be the returned here to resId 
    console.log(resId);

    useEffect(() => {
        fetchMenu ();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch( MENU_API + resId); //new API
        const json = await data.json(); //converting the new API data to json type

        console.log(json);
        setResInfo(json.data);
    }

    if(resInfo === null) return <Shimmer />;

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
//below is the item cards of any one thing like here it for RECOMMENDED
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
     console.log(itemCards);
    return (
        <div className = "menu">
            <h1>{name}</h1>
            <p>{cuisines.join(",")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key = {item.card.info.id}> 
                        {item.card.info.name} - {" Rs."}
                        {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                    </li>
                )
                    
                )}
            </ul>
        </div>
    )
}
export default RestuarantMenu;
