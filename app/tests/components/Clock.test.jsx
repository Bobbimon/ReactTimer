var React = require('react');
var ReactDOM = require('react-dom');
var Expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', () => {
  it('Should exist', () => {
    Expect(Clock).toExist();
  });

  describe('render', () => {
    it('Should render clock to output', () => {
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
      var $el = $(ReactDOM.findDOMNode(clock));
      var actualText = $el.find('.clock-text').text();

      Expect(actualText).toBe('01:02');
    });
  });

  describe('formatSeconds', () => {
    it('Should format seconds', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 615;
      var expected = '10:15'
      var actual = clock.formatSeconds(seconds);

      Expect(actual).toBe(expected);
    });

    it('Should format seconds when min/sec are less than 10', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 61;
      var expected = '01:01'
      var actual = clock.formatSeconds(seconds);

      Expect(actual).toBe(expected);
    });
  });
});
