import { useEffect, useState } from "react";
import Card from "./Card";


const WebCard = ({web}) => {

    const [webCard, setWebCard] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/${web}`)
        .then(res => res.json())
        .then(data => {
            setWebCard(data);
        } )
    },[web])

    console.log(webCard);

    return (

        <div className="grid grid-cols-3 gap-4 min-h-screen">
            {
                webCard?.map(item => <Card key={item._id} item={item}></Card>)
            }
        </div>

    );
};


export default WebCard;