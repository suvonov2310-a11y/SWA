const movies = [
    { title: "Spider-Man: No Way Home", cat: "marvel", img: "https://image.tmdb.org/t/p/w500/1g0dhfRj9htNi7Szes6Y7viH0og.jpg", link: "https://www.youtube.com/embed/JfVOs4VSpmA" },
    { title: "Avengers: Endgame", cat: "marvel", img: "https://image.tmdb.org/t/p/w500/or06vS3ST0PrBjncyP9CNeM67JS.jpg", link: "https://www.youtube.com/embed/TcMBFSGVi1c" },
    { title: "Iron Man", cat: "marvel", img: "https://image.tmdb.org/t/p/w500/781977.jpg", link: "https://www.youtube.com/embed/8hYlB38asgnI" },
    { title: "Black Panther", cat: "marvel", img: "https://image.tmdb.org/t/p/w500/uxzzSRpS6T2S7S5vB97669nS0xz.jpg", link: "https://www.youtube.com/embed/_Z3QKkl1WyM" },
    { title: "Thor", cat: "marvel", img: "https://image.tmdb.org/t/p/w500/pIkRyV18p6zbaQYpEDfwpPKI9SR.jpg", link: "https://www.youtube.com/embed/Go8nTmfrQd8" },
    
    { title: "The Batman", cat: "dc", img: "https://image.tmdb.org/t/p/w500/74xTEgtmR3ibG1u2MvXqboar2SN.jpg", link: "https://www.youtube.com/embed/mqqft239LnY" },
    { title: "Joker", cat: "dc", img: "https://image.tmdb.org/t/p/w500/udDclKVUZRUqUGiDNVMo09A3AgM.jpg", link: "https://www.youtube.com/embed/zAGVQLHvwOY" },
    { title: "Man of Steel", cat: "dc", img: "https://image.tmdb.org/t/p/w500/78B478.jpg", link: "https://www.youtube.com/embed/wArmHSPIvlQ" },
    { title: "Aquaman", cat: "dc", img: "https://image.tmdb.org/t/p/w500/xLPffp6uIBQwSTmU7q9S9tY7SNa.jpg", link: "https://www.youtube.com/embed/WDkg3h8PCVU" },
    { title: "Wonder Woman", cat: "dc", img: "https://image.tmdb.org/t/p/w500/imekS7vBSR2sq5cr8pDy79bYvqz.jpg", link: "https://www.youtube.com/embed/1Q8fG0TtVAY" },

    { title: "Wednesday", cat: "netflix", img: "https://image.tmdb.org/t/p/w500/9PFonB9t4S392Jx1Y9Ym1gaqU6R.jpg", link: "https://www.youtube.com/embed/Di310WS8zLk" },
    { title: "Stranger Things", cat: "netflix", img: "https://image.tmdb.org/t/p/w500/49WJfev0moxm9z8AezuOxvY1ZCX.jpg", link: "https://www.youtube.com/embed/b9EkMc79ZSU" },
    { title: "Squid Game", cat: "netflix", img: "https://image.tmdb.org/t/p/w500/d96cjJhvlMA.jpg", link: "https://www.youtube.com/embed/oqxAJKy0ii4" },
    { title: "Money Heist", cat: "netflix", img: "https://image.tmdb.org/t/p/w500/reEMJA1uzpG6S07v30U2C1p9442.jpg", link: "https://www.youtube.com/embed/hMANIarjT50" },
    { title: "The Witcher", cat: "netflix", img: "https://image.tmdb.org/t/p/w500/7vjvLs7TV4no1vR6_AzhvR_S_C_u.jpg", link: "https://www.youtube.com/embed/ndl1W4ltcmg" },

    { title: "Abdullajon", cat: "uzmovi", img: "https://via.placeholder.com/200x300?text=Abdullajon", link: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Suyunchi", cat: "uzmovi", img: "https://via.placeholder.com/200x300?text=Suyunchi", link: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Osmondagi Bolalar", cat: "uzmovi", img: "https://via.placeholder.com/200x300?text=Osmondagi", link: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Mahallada duv-duv gap", cat: "uzmovi", img: "https://via.placeholder.com/200x300?text=Mahalla", link: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Kelinlar Qo'zg'oloni", cat: "uzmovi", img: "https://via.placeholder.com/200x300?text=Kelinlar", link: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
];

const grid = document.getElementById('movieGrid');

function displayMovies(list) {
    grid.innerHTML = '';
    list.forEach(m => {
        grid.innerHTML += `
            <div class="movie-card" onclick="window.open('${m.link}', '_blank')">
                <img src="${m.img}">
                <div class="movie-info"><h4>${m.title}</h4></div>
            </div>
        `;
    });
}

function filterKino(c) {
    if(c === 'all') displayMovies(movies);
    else displayMovies(movies.filter(m => m.cat === c));
}

function searchMovie() {
    let val = document.getElementById('searchInput').value.toLowerCase();
    displayMovies(movies.filter(m => m.title.toLowerCase().includes(val)));
}

// Birinchi marta yuklash
displayMovies(movies);