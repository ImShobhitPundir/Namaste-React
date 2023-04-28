import ShimmerCard from "./ShimmerCard";
const Shimmer = () => {
  return (
    <div className="px-20 py-14">
        <div className="search-container" style={{padding:'5px'}}>
            <div className="shimmerBG title-line" style={{width:'300px',margin:'auto'}}></div>
        </div>
      <div className="flex flex-wrap" data-testid="shimmer">
      {
        Array(15).fill().map((row,index)=>(
          <ShimmerCard key={index}/>
        ))
      }        

      </div>
    </div>
  );
};

export default Shimmer;
