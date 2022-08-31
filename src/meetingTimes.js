export function getPercentOfInstructionalTime(data){
  const allTimes = data.map(period => period.duration);
  const totalTime = calculateTimeSum(allTimes);

  const instructionalMeetings = data.filter(period => period.tags.includes('instructional'))
  const instructionalTimes = instructionalMeetings.map(period => period.duration);
  const totalInstructionalTime = calculateTimeSum(instructionalTimes);

  const percent = calculatePercent(totalInstructionalTime, totalTime);
  return percent;
}

function calculateTimeSum(times) {
  console.log('times: ', times);
  const initialTime = 0;
  const timeSum = times.reduce((previousValue, currentValue) => previousValue + currentValue, initialTime);
  console.log(timeSum);
  return timeSum;
}

function calculatePercent(instructionalTime, totalTime) {

  const portion = instructionalTime/totalTime;
  const percent = portion * 100;
  const roundedPercent = Math.round(percent * 10) / 10
  return roundedPercent;
}