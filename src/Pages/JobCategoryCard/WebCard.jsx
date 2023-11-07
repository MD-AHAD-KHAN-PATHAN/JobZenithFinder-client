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

    return (

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mx-0 md:mx-10 mx-6 gap-4 min-h-screen">
            {
                webCard?.map(item => <Card key={item._id} item={item}></Card>)
            }
        </div>

    );
};


export default WebCard;