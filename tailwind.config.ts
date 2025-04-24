/* eslint-disable import/no-commonjs */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable import/unambiguous */
module.exports = {
    content: [
        './assets/css/app.css',
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './app.vue',
        './assets/**/*.{css,vue,js,ts}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '',
                secondary: '',
                accent: '',
                neutral: {
                    100: '',
                    700: '',
                    500: ''
                },
                dark: ''
            },
            fontFamily: {
                sans: [],
                heading: []
            },
            borderRadius: {
                xl: '1rem',
                '2xl': '1.5rem',
            },
        }
    }

}
