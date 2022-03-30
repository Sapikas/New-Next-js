import Button from "../ui/button";
import styles from './events-search.module.css';
function EventSearch(props){
    return <form className={styles.form}>
        <div className={styles.controls}>
            <div className={styles.control}>
                <label htmlFor="year">Year</label>
                <select id='year'>
                    <option value='2021'>2021</option>
                    <option value='2022'>2022</option>
                </select>
            </div>
            <div className={styles.control}>
                <label htmlFor="month">Month</label>
                <select id='month'>
                    <option id='1'>January</option>
                    <option id='2'>February</option>
                    <option id='3'>March</option>
                    <option id='4'>April</option>
                    <option id='5'>May</option>
                    <option id='6'>June</option>
                    <option id='7'>July</option>
                    <option id='8'>Augoust</option>
                    <option id='9'>September</option>
                    <option id='10'>Octomber</option>
                    <option id='11'>November</option>
                    <option id='12'>December</option>
                </select>
            </div>
        </div>
        <Button>Find Events</Button>
    </form>
}

export default EventSearch;