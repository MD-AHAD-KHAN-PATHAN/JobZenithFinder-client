import ClientsTestimonial from "../../Components/ClientsTestimonial/ClientsTestimonial";
import Header from "../../Components/Header/Header";
import ReactTab from "../ReactTab/ReactTab";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ReactTab></ReactTab>
            <ClientsTestimonial></ClientsTestimonial>
        </div>
    );
};

export default Home;