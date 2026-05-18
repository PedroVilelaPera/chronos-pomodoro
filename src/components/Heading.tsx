import styles from './Heading.module.css';

type HeadingProps = {
  children: React.ReactNode;
};

export function Heading(props: HeadingProps) {
  console.log('Heading component rendered with props:', props);
  return <h1 className={styles.heading}>{props.children}</h1>;
}
