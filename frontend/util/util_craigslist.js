export const fetchPostings = () => {
  return $.ajax({
    url: 'localhost:3000/craigslist/atlanta/apartments/FeatureServer/0/query?returnCountOnly=true'
  });
}
