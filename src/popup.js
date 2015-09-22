var REGISTERED_PAGES = 'registered-pages';

function openFollowerPage() {
    var myid = chrome.runtime.id;
    chrome.tabs.create({url:"index.html"});
}


function registerCurrentPage() {
  chrome.tabs.query({'active': true}, function(tabs) {
    if (tabs.length == 0) {
        message("There is no page to register");
    }
    // TODO should we check current page?
    var url = tabs[0].url;
    alert('has url');
    chrome.storage.sync.get(REGISTERED_PAGES, function(data) {
      var pages = data[REGISTERED_PAGES];
      if (pages == undefined) {
        pages = [];
      }
      pages.push(url);
      chrome.storage.sync.set({REGISTERED_PAGES: pages}, function() {
        alert('Stored pages');
      });
    });
  });
}


function unregisterCurrentPage() {
  // TODO implement this.
}


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

