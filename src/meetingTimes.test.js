import { getPercentOfInstructionalTime } from './meetingTimes'

describe('verify getPercentOfInstructionalTime is working correctly', () => {
  
  const allPeriods = [
    
    {period: 1, duration: 10, tags: ['instructional']},
    {period: 2, duration: 10, tags: ['instructional', 'core']},
    {period: 3, duration: 10, tags: ['instructional', 'free']},
    {period: 4, duration: 10, tags: ['free']},
    {period: 5, duration: 10, tags: ['free']},
  ]
  
  it('returns correct percentage', () => {
    const percent = getPercentOfInstructionalTime(allPeriods);
    expect(percent).toEqual(60);
  })
})