'use client';

import clsx from 'clsx';
import ClickAwayListener from 'react-click-away-listener';
import { type FC, type KeyboardEvent } from 'react';

import useToggle from '@/hooks/use-toggle';
import useScrollSpy from '@/hooks/use-scroll-spy';
import type { Content } from '@/types/content';

import { LabelS, TextL, TextM } from '../typography';
import { Icon } from '../icon';

import styles from './table-of-contents.module.scss';
import type { TableOfContentsProps } from './table-of-contents.types';

const renderContents = (
	{ id, name }: Content,
	cb: () => void,
	current: string
) => {
	const isActive = current === id;
	return (
		<li key={id} className={clsx(styles.listItem, isActive && styles.active)}>
			<TextM as="a" href={`#${id}`} onClick={cb}>
				{name}
			</TextM>
		</li>
	);
};

const scrollSpyOptions = {
	noEmptyState: true,
	offset: { bottom: 200 }
};

const TableOfContentsMobile: FC<TableOfContentsProps> = ({
	contents,
	className
}) => {
	const current = useScrollSpy(contents, scrollSpyOptions);
	const { isOn, setOff, toggle } = useToggle('off');
	const currentHeading = contents?.find((content) => current === content.id);

	const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
		if (e.key === 'Enter') toggle();
	};

	return (
		<div className={styles.mobileWrapper}>
			<LabelS as="p" className={styles.label}>
				Table of Contents
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
							<div className={clsx(styles.menu, isOn && styles.showMenu)}>
								<ul className={clsx(styles.menuList)}>
									{contents?.map((content) =>
										renderContents(content, setOff, current)
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

export default TableOfContentsMobile;
