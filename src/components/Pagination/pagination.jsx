import  PropTypes from 'prop-types'

export function Pagination({setPageNumber, pageNumber}){
    // Esse x simboliza o valor default do estado PageNumber que está no componente App.jsx
    function next(){
        setPageNumber(x => x + 1)
    }
    function prev(){
        if(pageNumber === 1) return
        setPageNumber(x => x - 1)
    }

  return (
    <div className="container d-flex justify-content-center gap-5 my-5">
      <button 
        onClick={prev}
        className="btn btn-primary"
      >
        Prev
      </button>
      <button 
        onClick={next}
        className="btn btn-primary"
      >
        Next
      </button>
    </div>
  )
}

Pagination.propTypes = {
    setPageNumber: PropTypes.func,
    pageNumber: PropTypes.number
}

