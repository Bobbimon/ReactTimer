var Expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
  it('Should exist', () => {
    Expect(CountdownForm).toExist();
  });

  it('Should call onSetCountdown if valid seconds entered', () => {
    var spy = Expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = '109';
    TestUtils.Simulate.submit($el.find('form')[0]);
    Expect(spy).toHaveBeenCalledWith(109);
  });

  it('Should not call onSetCountdown if invalid seconds entered', () => {
    var spy = Expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = 'a';
    TestUtils.Simulate.submit($el.find('form')[0]);
    Expect(spy).toNotHaveBeenCalled();
  });
});
