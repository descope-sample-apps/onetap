import type {
	DetailedHTMLProps,
	ElementType,
	HTMLAttributes,
	LiHTMLAttributes,
	ReactNode
} from 'react';

import type { TypographyProps } from '../typography';

interface MenuListComponentProps {
	children: ReactNode;
}

export type MenuListContainerProps = MenuListComponentProps &
	DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export type MenuListTitleProps<T extends ElementType> = MenuListComponentProps &
	TypographyProps<T>;

export type MenuListProps = MenuListComponentProps &
	DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>;

export type MenuListItemsProps = MenuListComponentProps &
	DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> & {
		isActive: boolean;
	};

export type MenuListTextProps<T extends ElementType> = MenuListComponentProps &
	TypographyProps<T>;
