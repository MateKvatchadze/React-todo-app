import "./FilterBar.css";

function FilterBar({setFilter, filter}){


const getClass = (type) => (filter === type ? "active" : "");

  return(
 
    <div className="filterBtns">
     <button className={getClass("all")}  onClick={() => setFilter("all")}>All</button>
      <button className={getClass("active")}  onClick={() => setFilter("active")}>Active</button>
      <button className={getClass("completed")}  onClick={() => setFilter("completed")}>Completed</button>
    </div>
  
  )
}

export default FilterBar