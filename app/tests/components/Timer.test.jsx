var React = require('react');
var ReactDOM = require('react-dom');
var Expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
  it('Should exist', () => {
    Expect(Timer).toExist();
  });

  describe('handleSetTimer', () => {
    it('Should set state to started and count up', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);

      timer.handleStatusChange('started');
      Expect(timer.state.count).toBe(0);

      setTimeout(() => {
        Expect(timer.state.timerStatus).toBe('started');
        Expect(timer.state.count).toBe(1);
        done();
      }, 1001);
    });

    it('Should pause countdown on paused status',  (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.setState({count: 10});
      timer.handleStatusChange('started');
      timer.handleStatusChange('paused');

      setTimeout(() => {
        Expect(timer.state.timerStatus).toBe('paused');
        Expect(timer.state.count).toBe(10);
        done();
      }, 1001);
    });

    it('Should reset count on stopped status',  (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.setState({count: 10});
      timer.handleStatusChange('started');
      timer.handleStatusChange('stopped');

      setTimeout(() => {
        Expect(timer.state.count).toBe(0);
        Expect(timer.state.timerStatus).toBe('stopped');
        done();
      }, 1001);
    });
  });
});
