import { Helmet } from "react-helmet";
import ClientsTestimonial from "../../Components/ClientsTestimonial/ClientsTestimonial";
import Header from "../../Components/Header/Header";
import JobZenithWork from "../../Components/JobZenithWork/JobZenithWork";
import ReactTab from "../ReactTab/ReactTab";

const Home = () => {
   
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>JobZenith | Home</title>
            </Helmet>
            <Header></Header>
            <JobZenithWork></JobZenithWork>
            <ReactTab></ReactTab>
            <ClientsTestimonial></ClientsTestimonial>
        </div>
    );
};

export default Home;