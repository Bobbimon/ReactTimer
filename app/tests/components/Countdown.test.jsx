var React = require('react');
var ReactDOM = require('react-dom');
var Expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
  it('Should exist', () => {
    Expect(Countdown).toExist();
  });

  describe('handleSetCountdown', () => {
    it('Should set state to started and count down', (done) => {
      var countDown = TestUtils.renderIntoDocument(<Countdown/>);
      countDown.handleSetCountdown(10);

      Expect(countDown.state.count).toBe(10);
      Expect(countDown.state.countdownStatus).toBe('started');

      setTimeout(() => {
        Expect(countDown.state.count).toBe(9);
        done();
      }, 1001);
    });
    it('Should never set count to less than zero', (done) => {
      var countDown = TestUtils.renderIntoDocument(<Countdown/>);
      countDown.handleSetCountdown(1);

      setTimeout(() => {
        Expect(countDown.state.count).toBe(0);
        done();
      }, 1501);
    });

    it('Should pause countdown on paused status',  (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('paused');

      setTimeout(() => {
        Expect(countdown.state.count).toBe(3);
        Expect(countdown.state.countdownStatus).toBe('paused');
        done();
      }, 1001);
    });
    it('Should reset count on stopped status',  (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('stopped');

      setTimeout(() => {
        Expect(countdown.state.count).toBe(0);
        Expect(countdown.state.countdownStatus).toBe('stopped');
        done();
      }, 1001);
    });
  });
});
