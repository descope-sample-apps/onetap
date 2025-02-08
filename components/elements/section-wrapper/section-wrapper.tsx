'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { ElementType } from 'react';
import GradientOverlay from '../gradient-overlay';
import { DEFAULT_SECTION_THEME } from '../../../config/consts.config';

import styles from './section-wrapper.module.scss';
import type { SectionWrapperProps } from './section-wrapper.types';

const SectionWrapper = ({
	as,
	className,
	classNameWrapper,
	theme = DEFAULT_SECTION_THEME,
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
					styles[theme],
					theme === 'dark' && !finalGradient && styles.darkNoGradient,
					theme,
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
					isDark={theme === 'dark'}
					priority={order === 1}
				/>
			) : (
				// add noise to match section with gradients when is dark
				<GradientOverlay
					className={gradientClassname}
					isDark={theme === 'dark'}
					priority={order === 1}
				/>
			)}
		</div>
	);
};

export default SectionWrapper;
