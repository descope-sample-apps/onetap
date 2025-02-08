'use client';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

import { Link } from '@/components/elements/link';
import type { Content } from '@/types/content';
import routes from '@/lib/routes';

import {
	MenuList,
	MenuListItem,
	MenuListTitle,
	MenuListContainer,
	MenuListTextM
} from '../menu-list';

import styles from './table-of-contents.module.scss';

const TableOfLinksDesktop = ({
	contents,
	title,
	className
}: TableOfLinksProps) => {
	const currentPath = usePathname();

	const renderContents = ({ id, name, slug }: ContentLink) => {
		const parts = currentPath?.split('/');
		const pathLastItem = parts?.[parts.length - 1];
		return (
			<MenuListItem key={id} isActive={pathLastItem?.includes(slug) ?? false}>
				<MenuListTextM
					className={styles.listItemLink}
					as={Link}
					href={slug === 'resources' ? '/resources' : routes.RESOURCES(slug)}
				>
					{name}
				</MenuListTextM>
			</MenuListItem>
		);
	};

	return (
		<MenuListContainer className={clsx(styles.desktopBar, className)}>
			<MenuListTitle>{title}</MenuListTitle>
			<MenuList className={styles.linksContainer}>
				{contents.map(renderContents)}
			</MenuList>
		</MenuListContainer>
	);
};

export type ContentLink = Content & {
	slug: string;
};

export interface TableOfLinksProps {
	title?: string;
	contents: ContentLink[];
	className?: string;
}

export default TableOfLinksDesktop;
