const key ='c72fc933633703a295e29e1f8dd20cc3';

const requests = {
   requestPopular:'https://api.themoviedb.org/3/movie/popular?api_key='+key+'&language=en-US&page=1',
   requestTopRated:'https://api.themoviedb.org/3/movie/top_rated?api_key='+key+'&language=en-US&page=1',
   requestTrending:'https://api.themoviedb.org/3/trending/all/day?api_key='+key+'&language=en-US',
   requestHorror:'https://api.themoviedb.org/3/discover/movie?api_key='+key+'&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27',
   requestUpcoming:'https://api.themoviedb.org/3/movie/upcoming?api_key='+key+'&language=en-US&page=1', 
};

export default requests;
