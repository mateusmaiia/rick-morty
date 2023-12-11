import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./index.css"
import { Filters } from "./components/Filters";
import { Cards } from "./components/Cards";
import { useState, useEffect } from "react";
import { Pagination } from "./components/Pagination/pagination";
import { Search } from "./components/Searchs/searchs";


function App() {  
  
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, setFetchedData] = useState([]);
  let { results } = fetchedData;
  
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(() => {
    (async function(){
      let data = await fetch(api).then(res => res.json())
      setFetchedData(data);
    })()
  }, [api])

  return (
      <div>
        <h1 className="text-center ubuntu my-4">Rick & Morty <span className="text-primary">Wiki</span></h1>

        <Search />

        <div className="container">
          <div className="row">
            <div className="col-3">
             <Filters />
            </div>
            <div className="col-8">
              <div className="row">
                <Cards results={results}/>
              </div>
            </div>
          </div>
        </div>

        <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber}/>
      </div>

  )
}

export default App
  
