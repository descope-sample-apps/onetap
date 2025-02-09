import type { CSSProperties, ElementType, ReactNode, Ref } from 'react';
import type { ThreeElements } from '@react-three/fiber';

export interface SectionBaseProps {
	order: number;
	titlesLoop: string[];
	id: string;
}

export interface SectionWrapperProps {
	as?: Exclude<ElementType, keyof ThreeElements>;
	className?: string;
	classNameWrapper?: string;
	styles?: CSSProperties;
	onClick?: () => void;
	childrenWrapper?: ReactNode;
	ref?: Ref<HTMLDivElement>;

	order: number;
	children: ReactNode | ReactNode[];
	gradient?: any;
	gradientMobile?: any;
	gradientClassname?: string;
}
