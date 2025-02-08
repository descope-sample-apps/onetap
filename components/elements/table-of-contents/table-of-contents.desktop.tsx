'use client';

import clsx from 'clsx';

import useScrollSpy from '@/hooks/use-scroll-spy';
import { Link } from '@/components/elements/link';
import type { Content } from '@/types/content';

import {
	MenuList,
	MenuListItem,
	MenuListTitle,
	MenuListContainer,
	MenuListTextM
} from '../menu-list';

import type { TableOfContentsProps } from './table-of-contents.types';
import styles from './table-of-contents.module.scss';

const scrollSpyOptions = {
	noEmptyState: true,
	offset: { bottom: 200 }
};

const TableOfContentsDesktop = ({
	contents,
	className
}: TableOfContentsProps) => {
	const current = useScrollSpy(contents, scrollSpyOptions);

	const renderContents = ({ id, name }: Content) => {
		const isActive = current === id;
		return (
			<MenuListItem key={id} isActive={isActive}>
				<MenuListTextM
					className={styles.listItemLink}
					as={Link}
					href={`#${id}`}
				>
					{name}
				</MenuListTextM>
			</MenuListItem>
		);
	};

	return (
		<MenuListContainer className={clsx(styles.desktopBar, className)}>
			<MenuListTitle>Table of Contents</MenuListTitle>
			<MenuList className={styles.linksContainer}>
				{contents.map(renderContents)}
			</MenuList>
		</MenuListContainer>
	);
};

export default TableOfContentsDesktop;
