const URL = "https://wiki.mozilla.org/api.php?action=query&list=recentchanges&rcprop=title|timestamp|user&rclimit=500&format=json"

fetch(URL, {}).then((res) => res.json()).then((json) => console.log("Result", json.query.recentchanges))
