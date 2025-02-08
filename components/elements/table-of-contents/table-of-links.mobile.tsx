'use client';

import clsx from 'clsx';
import ClickAwayListener from 'react-click-away-listener';
import { type FC, type KeyboardEvent } from 'react';
import { usePathname } from 'next/navigation';

import useToggle from '@/hooks/use-toggle';
import routes from '@/lib/routes';

import { LabelS, TextL, TextM } from '../typography';
import { Icon } from '../icon';

import styles from './table-of-contents.module.scss';
import type { ContentLink, TableOfLinksProps } from './table-of-links.desktop';

const renderContents = (
	{ id, name, slug }: ContentLink,
	cb: () => void,
	currentPageSlug: string
) => {
	const isActive = currentPageSlug?.includes(slug);
	return (
		<li key={id} className={clsx(styles.listItem, isActive && styles.active)}>
			<TextM
				as="a"
				href={slug === 'resources' ? '/resources' : routes.RESOURCES(slug)}
				onClick={cb}
			>
				{name}
			</TextM>
		</li>
	);
};

const TableOfLinksMobile: FC<TableOfLinksProps> = ({
	title,
	contents,
	className
}) => {
	const currentPath = usePathname();
	const parts = currentPath?.split('/');
	const pathLastItem = parts?.[parts.length - 1];
	const { isOn, setOff, toggle } = useToggle('off');
	const currentHeading = contents?.find((content) =>
		pathLastItem?.includes(content.slug)
	);

	const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
		if (e.key === 'Enter') toggle();
	};

	return (
		<div className={styles.mobileWrapper}>
			<LabelS as="p" className={styles.label}>
				{title}
			</LabelS>
			<ClickAwayListener onClickAway={setOff}>
				<nav className={clsx(styles.mobileBar, className)}>
					<div
						onClick={toggle}
						className={styles.container}
						role="button"
						tabIndex={0}
						onKeyDown={handleKeyDown}
					>
						<TextL
							isMedium
							className={styles.heading}
							variant="secondaryMedium"
						>
							{currentHeading?.name ||
								contents?.[0]?.name ||
								'Table of Contents'}
						</TextL>
						<button type="button" className={styles.menuButton}>
							<span className="visually-hidden">
								{isOn ? 'Close table of contents' : 'Open table of contents'}
							</span>
							{isOn ? <Icon name="Close" /> : <Icon name="ChevronDown" />}
						</button>
						{isOn && (
							<div className={clsx(styles.menu, { [styles.showMenu]: isOn })}>
								<ul className={clsx(styles.menuList)}>
									{contents?.map((content) =>
										renderContents(content, setOff, pathLastItem ?? '')
									)}
								</ul>
							</div>
						)}
					</div>
				</nav>
			</ClickAwayListener>
		</div>
	);
};

export default TableOfLinksMobile;
