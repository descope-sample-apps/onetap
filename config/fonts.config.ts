import { Inter, Source_Code_Pro } from 'next/font/google';
import localFont from 'next/font/local';

export const roobertFont = localFont({
	preload: false,
	src: [
		{
			path: '../assets/fonts/roobert/Roobert-Medium.woff',
			weight: '500',
			style: 'normal'
		}
	],
	fallback: [
		'-apple-system',
		'BlinkMacSystemFont',
		'Segoe UI',
		'Roboto',
		'Oxygen',
		'Ubuntu',
		'Cantarell',
		'Fira Sans',
		'Droid Sans',
		'Helvetica Neue',
		'sans-serif'
	],
	variable: '--font-primary'
});

export const interFont = Inter({
	preload: true,
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	fallback: [
		'-apple-system',
		'BlinkMacSystemFont',
		'Segoe UI',
		'Roboto',
		'Oxygen',
		'Ubuntu',
		'Cantarell',
		'Fira Sans',
		'Droid Sans',
		'Helvetica Neue',
		'sans-serif'
	],
	variable: '--font-secondary',
	subsets: ['latin']
});

export const sourceCodeProFont = Source_Code_Pro({
	preload: false,
	weight: ['400', '500', '600', '700'],
	fallback: ['monospace'],
	variable: '--font-code',
	subsets: ['latin']
});
