React.render(
  <header>
  <h1>The follower home page</h1>
  </header>,
  document.getElementById('title')
);

var Page = React.createClass({
  render: function() {
    return (
      <div className="page">
        {this.props.title}
      </div>
    );
  }
});

var Pages = React.createClass({
  render: function() {
    var pages = [];
    for (var value in this.props.titles) {
      pages.push(<Page title={this.props.titles[value]} />);
    }
    return <div>{pages}</div>;
  }
})

var titles=['xxx','yyy','zzz'];
React.render(
  <Pages titles={titles}/>,
  document.getElementById('pages')
)
