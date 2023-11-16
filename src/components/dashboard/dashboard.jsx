// import LineGraph from "./line";

function DashboardLayout() {
  return (
    <div className="w-full">
      <h3 className="font-bold text-2xl pt-6">Dashboard</h3>
      <div className="wrapper">
        <div className="unit one">1</div>
        <div className="unit two">2</div>
        <div className="unit three">{/* <LineGraph/> */}</div>
        <div className="unit four">4</div>
        <div className="unit five">5</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
