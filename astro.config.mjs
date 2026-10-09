// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import starlightImageZoom from 'starlight-image-zoom';

export default defineConfig({
	site: 'https://speleocluborobico.github.io',
	base: "/site",
	integrations: [
		starlight({
			plugins:  [
				starlightImageZoom(),
      		],
			components: {
				ThemeProvider: './src/components/ThemeProvider.astro',
				ThemeSelect: './src/components/ThemeSelect.astro',
			},
			title: 'Speleo Club Orobico',
			description: 'Sito dello Speleo Club Orobico (CAI Bergamo): storia, grotte, didattica e biblioteca.',
			favicon: '/favicon.ico',
			logo: {
    			src: './src/assets/logo.svg',
  			},
			locales: {
				root: {
					label: 'Italiano',
					lang: 'it',
				},
				'en': {
					label: 'English',
					lang: 'en',
				},
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/speleocluborobico/site' }],
			customCss: ['./src/styles/global.css'],
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
