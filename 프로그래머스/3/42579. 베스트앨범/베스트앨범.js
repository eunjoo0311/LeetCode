function solution(genres, plays) {
    const genreTotal = {};
    const genreSongs = {};

    for (let i = 0; i < genres.length; i++) {
        const genre = genres[i];
        const play = plays[i];

        if (!genreTotal[genre]) {
            genreTotal[genre] = 0;
            genreSongs[genre] = [];
        }

        genreTotal[genre] += play;
        genreSongs[genre].push([i, play]); // [고유번호, 재생수]
    }

    const sortedGenres = Object.keys(genreTotal).sort((a, b) => genreTotal[b] - genreTotal[a]);

    const answer = [];

    for (const genre of sortedGenres) {
        genreSongs[genre].sort((a, b) => {
            if (b[1] === a[1]) {
                return a[0] - b[0];
            }
            return b[1] - a[1];
        });

        answer.push(genreSongs[genre][0][0]);

        if (genreSongs[genre].length > 1) {
            answer.push(genreSongs[genre][1][0]);
        }
    }

    return answer;
}