import PropTypes from 'prop-types'
import styles from "./cards.module.scss"

export function Cards({results}){
    let display;
    // console.log(results)
    if(results){
        display = results.map((result) => {
            let {id, name, image, location, status} = result;
            return(
                <div className="col-4 position-relative mb-4" key={id}>
                    <div className={`${styles.cards}`}>
                        <img src={image} alt="" className={`img-fluid ${styles.img}`} />
                        <div className="content" style={{padding: "10px"}}>
                            <div className="fs-4 f2-bold mb-4">{name}</div>f
                            <div className="">
                                <div className="fs-6">Last location</div>
                                <div className="fs-5">{location.name}</div>
                            </div>
                        </div>
                    </div>
                    {function(){
                        if(status === "Dead"){
                            return(
                                <div className={`bg-danger badge position-absolute ${styles.badge}`} >{status}</div>
                            )
                        }
                        else if(status === "Alive"){
                            return (
                                <div className={`bg-success badge position-absolute ${styles.badge}`} >{status}</div>
                            )
                        }
                        else{
                            return(
                                <div className={`bg-secondary badge position-absolute ${styles.badge}`} >{status}</div>
                            )
                        }
                    }()}
                    
                </div>
            );
        });
    }else{
        display = "No Characters Found :/"
    }

    return(
        <>{display}</>
    )
}

Cards.propTypes = {
    results: PropTypes.array
}