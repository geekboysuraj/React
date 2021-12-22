import Header from "./Header";

const Show = ({data}) => {
    return(
        
        <div className="show-data">
            <Header title="Your Details" />
            <h2>Name :         {data.name}</h2>
            <h2>Email :        {data.email}</h2>
            <h2>Phone Number : {data.number}</h2>
            <h2>State :        {data.state}</h2>
            <h2>Country :      {data.country}</h2>
        </div>
    );
}

export default Show;