'use client';

import clsx from 'clsx';
import { useEffect, useRef, type FC } from 'react';

import { useScrollStatus } from '@/hooks/use-scroll-status';

import type { MenuListItemsProps } from '../menu-list.types';
import styles from '../menu-list.module.scss';

const scrollIntoViewIfNeeded = (item: HTMLElement) => {
	const container = item.parentElement;

	if (container) {
		const itemRect = item.getBoundingClientRect();
		const containerRect = container.getBoundingClientRect();

		if (
			itemRect.top < containerRect.top ||
			itemRect.bottom > containerRect.bottom
		) {
			container.scrollTop =
				item.offsetTop -
				container.offsetTop -
				container.clientHeight / 2 +
				item.clientHeight / 2;
		}
	}
};

export const MenuListItem: FC<MenuListItemsProps> = ({
	isActive,
	children,
	...props
}) => {
	const itemRef = useRef<HTMLLIElement | null>(null);
	const isScrolling = useScrollStatus();

	useEffect(() => {
		if (isActive && itemRef.current && !isScrolling) {
			scrollIntoViewIfNeeded(itemRef.current);
		}
	}, [isActive, isScrolling]);

	return (
		<li
			ref={itemRef}
			className={clsx(styles.item, isActive && styles.active)}
			{...props}
		>
			{children}
		</li>
	);
};
