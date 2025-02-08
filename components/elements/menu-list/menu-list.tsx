import type { ElementType, FC } from 'react';

import type { TypographyProps } from '../typography';
import { LabelS, TextM, TextS } from '../typography';

import styles from './menu-list.module.scss';
import type { MenuListProps, MenuListContainerProps } from './menu-list.types';

export const MenuListContainer: FC<MenuListContainerProps> = ({
	children,
	...props
}) => (
	<div className={styles.container} {...props}>
		{children}
	</div>
);

export const MenuListTitle = <T extends ElementType>({
	children,
	...props
}: TypographyProps<T>) => (
	<LabelS as="p" className={styles.title} {...(props as TypographyProps<'p'>)}>
		{children}
	</LabelS>
);

export const MenuList: FC<MenuListProps> = ({ children, ...props }) => (
	<ul className={styles.items} {...props}>
		{children}
	</ul>
);

export const MenuListText = <T extends ElementType>({
	children,
	...props
}: TypographyProps<T>) => (
	<TextS isMedium {...(props as TypographyProps<'p'>)}>
		{children}
	</TextS>
);

export const MenuListTextM = <T extends ElementType>({
	children,
	...props
}: TypographyProps<T>) => (
	<TextM isMedium {...(props as TypographyProps<'p'>)}>
		{children}
	</TextM>
);
