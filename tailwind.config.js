module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                bg: '#13111B',
                gray: '#787878',
                graybg: '#1D1B24',
                inactive: '#4E4D54'
            },
            backgroundImage: theme => ({
                'retro': "url('https://res.cloudinary.com/delg3uyp7/image/upload/v1618580902/music/retro_cgles7.png')",
                'chill': "url('https://res.cloudinary.com/delg3uyp7/image/upload/v1618584109/music/coffee_uor6hj.png')",
                'rock': "url('https://res.cloudinary.com/delg3uyp7/image/upload/v1618584189/music/rock_mvc2t1.png')",
            })
        },
    },
    variants: {
        extend: {

        },
    },
    plugins: [],
}