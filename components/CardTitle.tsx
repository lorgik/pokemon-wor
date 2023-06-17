import Pagination from './Pagination';

const CardTitle = ({ styles, id }: { styles: any; id: number }) => {
  return (
    <h3 className={styles.title}>
      <Pagination id={id}>Номер {id}</Pagination>
    </h3>
  );
};

export default CardTitle;
