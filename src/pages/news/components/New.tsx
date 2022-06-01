import styles from "./New.module.css";

interface INew {
    title: string;
    content: string,
    createdAt: Date,
    updatedAt: Date
}

const New: React.FC<INew> = ({title, content, createdAt, updatedAt}) => {
    return (
      <div className={styles.new}>
          <h3>{title}</h3>
          <p>{content}</p>
      </div>  
    );
}

export default New;