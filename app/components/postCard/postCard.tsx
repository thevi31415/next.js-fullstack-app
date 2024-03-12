import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="/about.png"
            alt=""
            className={styles.img}
            width={400}
            height={100}
          />
        </div>
        <span className={styles.date}>01.2.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Tiêu đề</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          adipisci eligendi doloremque ex ad quod provident? Suscipit ratione
          explicabo quia delectus? Est at iste aliquam aliquid quae excepturi,
          nulla deserunt.
        </p>
        <Link className={styles.link} href={""}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
