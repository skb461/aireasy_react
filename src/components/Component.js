
import "./../style.css";
import "./../query.css";
import HeadBar from "./HeadBar/HeadBar";
import ExpenseItem from "./ExpenseItem";
import Bnb from "./AirbnbSize/Bnb";
import Amenities from "./Amenities/Amenities";
import Map from "./Map/Map";
import Profit from "./Profit/Profit";
import Avtivity from "./RentalActivity/Avtivity";
import Setting from "./RentalSetting/Setting";
import RentalSize from "./RentalSize/RentalSize";
import Type from "./RentalType/Type";




function Component() {
  const abc = [
    {
      id: "e1",
      title: "Average Daily Rate",
      amount: "$220",
      text: "Dummy text",
    },
    {
      id: "e2",
      title: "Occupancy Rate",
      amount: "68%",
      text: "Dummy text",
    },
    {
      id: "e3",
      title: "Revenue",
      amount: "$2,932",
      text: "Dummy text",
    },
  ];
  return (
    <div className="App">
      <div className="flex">
        <HeadBar />
      </div>
      <div className="flex">
        <ExpenseItem className="shadow"
          title={abc[0].title}
          amount={abc[0].amount}
          text={abc[0].text}
        />
        <ExpenseItem className="shadow"
          title={abc[1].title}
          amount={abc[1].amount}
          text={abc[1].text}
        />
        <ExpenseItem className="shadow"
          title={abc[2].title}
          amount={abc[2].amount}
          text={abc[2].text}
        />
      </div>
      <div className="flex">
        <Profit className="shadow col-lg-4" />
        <Map className="shadow  col-lg-8" />
      </div>
      <div className="flex">
        <Type className="shadow  col-lg-6" />
        <RentalSize className="shadow  col-lg-6" />
      </div>
      <div className="flex">
        <Amenities className="shadow  col-lg-6" />
        <Bnb className="shadow  col-lg-6" />
      </div>
      <div className="flex">
        <Avtivity className="shadow  col-lg-6" />
        <Setting className="shadow  col-lg-6" />
      </div>
      
      
    </div>
  );
}

export default Component;
