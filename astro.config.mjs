// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import starlightCatppuccin from '@catppuccin/starlight';
import starlightImageZoom from 'starlight-image-zoom';

// https://astro.build/config
export default defineConfig({
	base: "/site",
	integrations: [
		starlight({
			plugins:  [
                starlightCatppuccin({
          			dark: { flavor: "macchiato", accent: "sky" },
          			light: { flavor: "latte", accent: "sky" },
        		}),
				starlightImageZoom(),
      		],
			title: 'Speleo Club Orobico',
			logo: {
    			src: './src/assets/logo.svg',
  			},
			locales: {
				root: {
					label: 'Italiano',
					lang: 'it', // lang is required for root locales
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
