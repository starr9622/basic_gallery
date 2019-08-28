export default function ajax(url, callback) {
  let t = new XMLHttpRequest();
  t.open("GET", url);
  t.onreadystatechange = function() {
    if (this.readyState == 4) {
      callback(JSON.parse(t.response));
    }
  };
  t.send();
}
