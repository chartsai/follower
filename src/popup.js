function openFollowerPage() {
    var myid = chrome.runtime.id;
    chrome.tabs.create({url:"index.html"});
}


function registerCurrentPage() {
  // TODO implement this
  alert("Has not be implemented");
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

