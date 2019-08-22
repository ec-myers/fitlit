const chai = require('chai');
const expect = chai.expect;

const Activity = require('../src/Activity-Repository');
const User = require('../src/User');
const UserRepository = require('../src/User-Repository');
const activityTestData = require('../test-data/activity-test-data');
const userTestData = require('../test-data/user-test-data');

describe('Activity', () => {
  let activity, user1, userID1;
  beforeEach(() => {
    activity = new Activity(activityTestData);
    user1 = new User(userTestData[0]);
    userID1 = 1;
  });

  it('should be a function', function () {
    expect(Activity).to.be.a('function');
  });

  it('should calculate stairs climbed for all users', function () {
    expect(activity.returnStairsClimbedAllUsersByDate('2019/06/15')).to.equal(59);
  });

  it('should calculate minutes active for all users', function () {
    expect(activity.returnActiveMinutesAllUsersByDate('2019/06/16')).to.equal(547);
  });

  it('should find all of the days the user met their step goal', function () {
    let days = ['2019/06/17', '2019/06/20']
    expect(activity.returnDatesStepGoalMet(user1, '2019/06/16')).to.deep.eql(days);
  });




});