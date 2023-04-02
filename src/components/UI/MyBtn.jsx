import styles from "../../styles/MyBtn.module.css"

const MyBtn = (props) => {
    const style = [styles.btn]

    if (props.styleprop) {
        style.push(props.styleprop)
    }

    return (
        <button className={style.join(" ")} {...props}></button>
    )
}

export default MyBtn