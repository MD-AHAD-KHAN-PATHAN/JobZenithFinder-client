import { useEffect, useState } from "react";
import Card from "./Card";

const MarketingCard = ({digital}) => {

    const [digitalCard, setDigitalCard] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/${digital}`)
        .then(res => res.json())
        .then(data => {
            setDigitalCard(data);
        } )
    },[digital])

    return (
        <div className="grid grid-cols-3 gap-4 min-h-screen">
            {
                digitalCard?.map(item => <Card key={item._id} item={item}></Card>)
            }
        </div>
    );
};


export default MarketingCard;