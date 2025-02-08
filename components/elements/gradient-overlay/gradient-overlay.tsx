import Image from 'next/image';
import clsx from 'clsx';

import type { GradientOverlayProps } from './gradient-overlay.types';
import styles from './gradient-overlay.module.scss';

const GradientOverlay = ({
	gradientSrc,
	className,
	isDark,
	priority
}: GradientOverlayProps) => {
	return (
		<>
			{gradientSrc && (
				<div
					className={clsx(
						styles.gradientWrapper,
						isDark && styles.isDark,
						className
					)}
				>
					<Image
						className={styles.gradient}
						src={gradientSrc}
						alt=""
						aria-hidden
						priority={priority}
					/>
				</div>
			)}
			{isDark && <div className={styles.noise} />}
		</>
	);
};

export default GradientOverlay;
