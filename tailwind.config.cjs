/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#027ed1',
				secondary: '#EDB280',
				accent: '#E8F0F6',
				mainDark: '#4F5E87',
				mainLessDark: '#566794',

				body: '#E8F0F6',
				lighterBody: '#f5f8fa',
				lightestBody: '#ffffff',
				grayHeader: '#5F6571',
				faint: '#222937',
				darkBlue: '#052043',
				darkTeal: '#5B6B8B',
				postColor: '#ffffff',
				mainText: '#222937',
				mainGray: '#676778'
			},
			fontFamily: {
				fugaz: 'Fugaz One'
			}
		}
	},
	plugins: []
};

// purple as dark:
// mainDark:'#3F4FA2',
// mainLessDark:'#4557B2',
//old body FFE5D0
// old main green 81C4B4
// old lighter body faefe6
//old dark sand EDB280
// old background color FAE7DB
// alternative main blue 5B86D1
// old darkTeal 5B6B8B
// more old light sand colors:
// lightBody1: '#faefe6',
// lightBody2: '#f7e7da',

// normal main blue 5B6B8B
// normal main green 7AC1B5
// normal faint 6D6767
