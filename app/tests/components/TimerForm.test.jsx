var Expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var TimerForm = require('TimerForm');

describe('TimerForm', () => {
  it('Should exist', () => {
    Expect(TimerForm).toExist();
  });

  it('Should call onSetTimer if valid seconds entered', () => {
    var spy = Expect.createSpy();
    var timerForm = TestUtils.renderIntoDocument(<TimerForm onSetTimer={spy}/>);
    var $el = $(ReactDOM.findDOMNode(timerForm));

    TestUtils.Simulate.submit($el.find('form')[0]);
    Expect(spy).toHaveBeenCalledWith(0);
  });
});
