'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { ElementType } from 'react';
import GradientOverlay from '../gradient-overlay';

import styles from './section-wrapper.module.scss';
import type { SectionWrapperProps } from './section-wrapper.types';

const SectionWrapper = ({
	as,
	className,
	classNameWrapper,
	order,
	children,
	gradient,
	gradientMobile,
	gradientClassname,
	ref,
	...restProps
}: SectionWrapperProps) => {
	const pathname = usePathname();
	const Component: ElementType = as || 'section';
	const isHome = pathname === '/';
	const finalGradient = gradient;

	return (
		<div
			className={clsx(
				styles.sectionWrapper,
				isHome && order === 1 && styles.pushUp,
				classNameWrapper
			)}
		>
			<Component
				className={clsx(
					styles.section,
					className
				)}
				ref={ref}
				{...restProps}
			>
				{children}
			</Component>
			{finalGradient ? (
				<GradientOverlay
					className={gradientClassname}
					gradientSrc={finalGradient}
					priority={order === 1}
				/>
			) : (
				// add noise to match section with gradients when is dark
				<GradientOverlay
					className={gradientClassname}
					priority={order === 1}
				/>
			)}
		</div>
	);
};

export default SectionWrapper;
