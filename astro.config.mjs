// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import starlightImageZoom from 'starlight-image-zoom';

export default defineConfig({
	base: "/site",
	integrations: [
		starlight({
			plugins:  [
				starlightImageZoom(),
      		],
			components: {
				ThemeSelect: './src/components/ThemeSelect.astro',
			},
			title: 'Speleo Club Orobico',
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
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			customCss: ['./src/styles/global.css'],
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
