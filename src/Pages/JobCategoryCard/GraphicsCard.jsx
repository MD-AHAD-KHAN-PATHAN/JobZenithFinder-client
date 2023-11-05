import { useEffect, useState } from "react";
import Card from "./Card";

const GraphicsCard = ({graphics}) => {

    console.log(graphics);

    const [graphicsCard, setGraphicsCard] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/${graphics}`)
        .then(res => res.json())
        .then(data => {
            setGraphicsCard(data);
        } )
    },[graphics])

    return (
        <div className="grid grid-cols-3 gap-4 min-h-screen">
            {
                graphicsCard?.map(item => <Card key={item._id} item={item}></Card>)
            }
        </div>
    );
};


export default GraphicsCard;