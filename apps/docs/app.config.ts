export default defineAppConfig({
	shadcnDocs: {
		site: {
			name: '🐥 Helix',
			description:
				'A fully-extensible server framework for building scalable and maintainable applications with ease.',
		},
		theme: {
			customizable: true,
			color: 'zinc',
			radius: 0.5,
		},
		header: {
			title: 'Helix Server',
			showTitle: true,
			darkModeToggle: true,
			languageSwitcher: {
				enable: true,
				triggerType: 'icon',
				dropdownType: 'select',
			},
			logo: {
				light: '/logo-dark.svg',
				dark: '/logo.svg',
			},
			nav: [],
			links: [
				{
					icon: 'lucide:coffee',
					to: '#',
					target: '_blank',
				},
				{
					icon: 'lucide:github',
					to: 'https://github.com/helix-server/core',
					target: '_blank',
				},
			],
		},
		aside: {
			useLevel: false,
			collapse: true,
		},
		main: {
			breadCrumb: true,
			showTitle: true,
			editLink: {
				enable: true,
				pattern:
					'https://github.com/helix-server/core/edit/main/apps/docs/content/:path',
				text: 'Edit this page on GitHub',
				icon: 'lucide:square-pen',
				placement: ['docsFooter', 'toc'],
			},
		},
		footer: {
			credits: 'Copyright © 2026',
			links: [
				{
					icon: 'lucide:github',
					to: 'https://github.com/helix-server/core',
					target: '_blank',
				},
			],
		},
		toc: {
			enable: true,
			links: [
				{
					title: 'Star on GitHub',
					icon: 'lucide:star',
					to: 'https://github.com/helix-server/core',
					target: '_blank',
				},
				{
					title: 'Create Issues',
					icon: 'lucide:circle-dot',
					to: 'https://github.com/helix-server/core/issues',
					target: '_blank',
				},
			],
		},
		search: {
			enable: true,
			inAside: false,
		},
	},
});
