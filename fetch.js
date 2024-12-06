const URL = "https://wiki.mozilla.org/api.php?action=query&list=recentchanges&rcprop=title|timestamp|user&rclimit=500&format=json"

fetch(URL, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:135.0) Gecko/20100101 Firefox/135.0',
  }
})
  .then((res) => res.json())
  .then((json) => console.log("Result", json.query.recentchanges))
