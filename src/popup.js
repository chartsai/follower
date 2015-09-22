function openFollowerPage() {
    var myid = chrome.runtime.id;
    chrome.tabs.create({url:"index.html"});
}


function registerCurrentPage() {
  // TODO implement this
  chrome.tabs.query({'active': true}, function(tabs) {
    if (tabs.length == 0) {
        message("There is no page to register");
    }

    var url = tabs[0].url;
    var uuid = createUUID();

    chrome.storage.sync.set({uuid: url}, function() {
      chrome.storage.sync.get(uuid, function(urls) {
        // FIXME the URL is undefined.
        // Maybe we cannot use UUID to save url?
        alert(urls[uuid]);
      });
    });
  });
}

function createUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
  });
}
// TODO unregisterCurrentPage() and its React class


var Home = React.createClass({
  render: function() {
    return (
      <p className='action' onClick={openFollowerPage}>Go to Home</p>
    );
  }
});


var Register = React.createClass({
  render: function() {
    return (
      <p className='action' onClick={registerCurrentPage}>Register this page</p>
    );
  }
});


React.render(
  <div>
    <Home />
    <Register />
  </div>,
  document.getElementById('content')
);

