module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                bg: '#13111B',
                gray: '#787878',
                graybg: '#1D1B24',
                inactive: '#4E4D54',
                primary: '#AE02FF'
            },
            backgroundImage: theme => ({
                'retro': "url('https://res.cloudinary.com/delg3uyp7/image/upload/v1618580902/music/retro_cgles7.png')",
                'chill': "url('https://res.cloudinary.com/delg3uyp7/image/upload/v1618584109/music/coffee_uor6hj.png')",
                'rock': "url('https://res.cloudinary.com/delg3uyp7/image/upload/v1618584189/music/rock_mvc2t1.png')",
                'smash': "url('https://res.cloudinary.com/delg3uyp7/image/upload/v1618588537/music/smash_afbcnz.png')",
                'time': "url('https://res.cloudinary.com/delg3uyp7/image/upload/v1618588664/music/time_cr8rcl.png')",
                'watsky': "url('https://res.cloudinary.com/delg3uyp7/image/upload/v1618588664/music/watsky_efsshl.png')",
                'clocks': "url('https://res.cloudinary.com/delg3uyp7/image/upload/v1618588663/music/coldplay_ayvewz.png')",
                'home': "url('https://res.cloudinary.com/delg3uyp7/image/upload/v1618588664/music/home_qpplrd.png')",
                'coldplay': "url('https://res.cloudinary.com/delg3uyp7/image/upload/v1618749108/music/coldplay2_cbdxn8.png')",
                'cash': "url('https://res.cloudinary.com/delg3uyp7/image/upload/v1618749108/music/cash_qtoodv.png')",
                'soundwaves': "url('https://res.cloudinary.com/delg3uyp7/image/upload/v1618764361/music/sound-waves_t4hmpd.png')",
            }),
            gradientColorStops: theme => ({
                'primaryopacity': 'rgba(174, 2, 255, 0.05)',
                'secondaryopacity': 'rgba(145, 94, 255, 0.05)',
                'primary': 'rgba(174, 2, 255)',
                'secondary': 'rgba(145, 94, 255)',
            })
        },
        screens: {
            'sm': '1066px'
        }
    },
    variants: {
        extend: {

        },
    },
    plugins: [],
}