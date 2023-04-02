import styles from "./../../styles/MySelect.module.css"

const MySelect = ({ sort, defaultValue, changeSort, options }) => {
    return (
        <select
            className={styles.select}
            onChange={(e) => changeSort(e.target.value)}
            value={sort}>

            <option disabled value="">{defaultValue}</option>

            {options.map((elem) => <option key={elem.name} value={elem.value}>{elem.name}</option>)}
        </select>
    )
}

export default MySelect