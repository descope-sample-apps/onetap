import styles from './section-divider.module.scss';

const SectionDivider = ({ upsideDown }: { upsideDown?: boolean }) => (
	<div className={styles.wrapper} data-rotated={upsideDown}>
		<div className={styles.divider}></div>
	</div>
);

export default SectionDivider;
