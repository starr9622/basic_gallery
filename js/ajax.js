export default function ajax(url, callback) {
  let t = new XMLHttpRequest();
  t.open("GET", url);
  t.onreadystatechange = function() {
    if (this.readyState == 4) {
      console.log(t.response);
      callback(JSON.parse(t.response));
    }
  };
  t.send();
}
