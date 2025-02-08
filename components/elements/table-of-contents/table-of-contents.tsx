import type { FC } from 'react';

import TableOfContentsMobile from './table-of-contents.mobile';
import TableOfContentsDesktop from './table-of-contents.desktop';
import type { TableOfContentsProps } from './table-of-contents.types';

const TableOfContents: FC<TableOfContentsProps> = (props) => {
	return (
		<>
			<TableOfContentsDesktop {...props} />
			<TableOfContentsMobile {...props} />
		</>
	);
};

export default TableOfContents;
