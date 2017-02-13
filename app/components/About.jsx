var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather application built on React.</p>
      <p>Here are some of the tools in the app:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react" target="_blank">React</a>
        </li>
        <li>
          <a href="http://openweathermap.org" target="_blank">Open Weather Map</a>
        </li>
      </ul>
    </div>
  );
}

module.exports = About;
