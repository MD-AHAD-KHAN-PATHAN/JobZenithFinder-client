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
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mx-0 md:mx-10 mx-6 gap-4 min-h-screen">
            {
                digitalCard?.map(item => <Card key={item._id} item={item}></Card>)
            }
        </div>
    );
};


export default MarketingCard;