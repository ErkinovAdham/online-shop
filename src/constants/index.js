const type = {
  person: "person",
  movie: "movie",
  tv: "tv",
  list: "list",
  keyword: "keyword",
  account: "account",
};
const typeAccount = {
  person: "person",
  movies: "movies",
  tv: "tv",
  list: "list",
  keyword: "keyword",
  account: "account",
};
const status = {
  popular: "popular",
  topRated: "top_rated",
  now: "now",
  upcoming: "upcoming",
  watchlist: "watchlist",
  favorite: "favorite",
  rated: "rated",
  lists: "lists",
};
const credits = {
  movieCredits: "credits",
  personCredits: "top_rated",
};
const sortBy = {
  "popularity Descending": "popularity.asc",
  "popularity Ascending": "popularity.desc",
  "rating Descending": "release_date.asc",
  "rating Ascending": "release_date.desc",
  "release Date Descending": "revenue.asc",
  "release Date Ascending": "revenue.desc",
  "title A-Z": "original_title.asc",
  "title Z-A": "original_title.desc",
};

const sortByTv = {
  "popularity Descending": "popularity.desc",
  "popularity Ascending": "popularity.asc",
  "rating Descending": "vote_average.desc",
  "rating Ascending": "vote_average.asc",
  "release Date Descending": "first_air_date.desc",
  "release Date Ascending": "first_air_date.asc",
};

export { typeAccount, sortByTv, sortBy, credits, status, type as default };
