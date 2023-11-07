import ClientsTestimonial from "../../Components/ClientsTestimonial/ClientsTestimonial";
import Header from "../../Components/Header/Header";
import JobZenithWork from "../../Components/JobZenithWork/JobZenithWork";
import ReactTab from "../ReactTab/ReactTab";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <JobZenithWork></JobZenithWork>
            <ReactTab></ReactTab>
            <ClientsTestimonial></ClientsTestimonial>
        </div>
    );
};

export default Home;