import styles from "./search.module.scss"

export function Search() {
    return(
        <form className="d-flex justify-content-center mb-5 gap-4">
            <input className={` ${styles.input}`} type="text" placeholder="Search for Characters"/>
            <button className={`btn btn-primary fs-5 ${styles.btn}`}>Search</button>
        </form>         
    )
}