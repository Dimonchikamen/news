import { Spinner } from "react-bootstrap";
import styles from "./Loader.module.css";

const Loader: React.FC = () => {
    return (
        <div className={styles.container}>
            <Spinner animation="border"/>
        </div>
    );
}

export default Loader;