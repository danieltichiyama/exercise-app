const bcrypt = require("bcryptjs");

let password = bcrypt.hashSync("password", 12);

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          email: "calmoon808@gmail.com",
          name: "Calvin Moon",
          password: password,
          gender_id: 1,
          birth_date: "1986-08-16",
          activity_level_id: 3,
          weight: 160,
          height: 68,
          points: 0,
          user_tier_id: 2,
          goal_id: 5,
          recommended_calories: 2000
        },
        {
          email: "janellehirano@gmail.com",
          name: "Janelle Hirano",
          password: password,
          gender_id: 2,
          birth_date: "2018-08-05",
          activity_level_id: 3,
          weight: 100,
          height: 60,
          points: 0,
          user_tier_id: 5,
          goal_id: 1,
          recommended_calories: 2000
        },
        {
          email: "daniel.ichiyama@gmail.com",
          name: "Daniel Ichiyama",
          password: password,
          gender_id: 1,
          birth_date: "2007-06-08",
          activity_level_id: 2,
          weight: 200,
          height: 67,
          points: 0,
          user_tier_id: 2,
          goal_id: 6,
          recommended_calories: 2000
        },
        {
          email: "brianwkhuffman@gmail.com",
          name: "Brian Huffman",
          password: password,
          gender_id: 1,
          birth_date: "2015-12-21",
          activity_level_id: 4,
          weight: 155,
          height: 70,
          points: 0,
          user_tier_id: 3,
          goal_id: 5,
          recommended_calories: 2000
        },
        {
          email: "rina@rina.com",
          name: "Rina Toyoshiba",
          password: password,
          gender_id: 2,
          birth_date: "2019-01-25",
          activity_level_id: 4,
          weight: 126,
          height: 65,
          points: 0,
          user_tier_id: 4,
          goal_id: 3,
          recommended_calories: 2000
        },
        {
          email: "rerrett5@yahoo.co.jp",
          name: "Rafa Errett",
          password: "WfFYojjjiDuM",
          gender_id: 3,
          birth_date: "2011-08-31",
          activity_level_id: 3,
          weight: 170,
          height: 68,
          points: 0,
          user_tier_id: 2,
          goal_id: 3,
          recommended_calories: 2000
        },
        {
          email: "craitt6@redcross.org",
          name: "Celestine Raitt",
          password: "mnU7mWZ3wE4",
          gender_id: 3,
          birth_date: "2013-04-13",
          activity_level_id: 1,
          weight: 160,
          height: 77,
          points: 0,
          user_tier_id: 3,
          goal_id: 3,
          recommended_calories: 2000
        },
        {
          email: "jscholard7@is.gd",
          name: "Jabez Scholard",
          password: "db9x7wmW5cx",
          gender_id: 1,
          birth_date: "2007-06-01",
          activity_level_id: 3,
          weight: 169,
          height: 58,
          points: 0,
          user_tier_id: 5,
          goal_id: 5,
          recommended_calories: 2000
        },
        {
          email: "grittmeier8@biglobe.ne.jp",
          name: "Gypsy Rittmeier",
          password: "ruUB8z",
          gender_id: 2,
          birth_date: "2019-09-07",
          activity_level_id: 1,
          weight: 220,
          height: 55,
          points: 0,
          user_tier_id: 3,
          goal_id: 4,
          recommended_calories: 2000
        },
        {
          email: "dgellan9@nature.com",
          name: "Darcie Gellan",
          password: "XtCApli",
          gender_id: 2,
          birth_date: "2014-02-27",
          activity_level_id: 1,
          weight: 167,
          height: 74,
          points: 0,
          user_tier_id: 5,
          goal_id: 6,
          recommended_calories: 2000
        }
      ]);
    });
};
