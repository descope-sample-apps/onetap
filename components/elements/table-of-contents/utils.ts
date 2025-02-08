import type { RelatedContent } from '@/types/learning-center/post';
import type LCPost from '@/types/learning-center/post';

export const isLCPostEntry = (content: RelatedContent): content is LCPost => {
	return 'title' in content;
};
