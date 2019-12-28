function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
function MifflinStJeorBMR(user) {
  let { weight, height } = user;
  let gender_id = user.gender_id.gender;
  let age = getAge(user.birth_date);
  if (gender_id === "Male") {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  } else if (gender_id === "Female") {
    return 10 * weight + 6.25 * height - 5 * age - 161;
  } else if (gender_id === "Other") {
    //average of male and female
    return 10 * weight + 6.25 * height - 5 * age - 83;
  }
}
function RevisedHarrisBenedictBMR(user) {
  let { weight, height } = user;
  if (typeof weight !== "number") {
    weight = parseFloat(weight);
  }
  if (typeof height !== "number") {
    height = parseFloat(height);
  }
  let gender_id = user.gender_id.gender;
  let age = getAge(user.birth_date);
  if (gender_id === "Male") {
    return 13.397 * weight + 4.799 * height - 5.677 * age + 88.362;
  } else if (gender_id === "Female") {
    return 9.247 * weight + 3.098 * height - 4.33 * age + 447.593;
  } else if (gender_id === "Other") {
    //average of male and female
    return 11.322 * weight + 3.9485 * height - 5.0035 * age + 267.9775;
  }
}
function averageBMR(user) {
  return (MifflinStJeorBMR(user) + RevisedHarrisBenedictBMR(user)) / 2;
}
function recommendedCalories(user) {
  let multiplier = user.activity_level_id.multiplier;
  return Math.round(
    averageBMR(user) * multiplier - user.goal_id.caloric_deficit
  );
}
module.exports = {
  recommendedCalories
};