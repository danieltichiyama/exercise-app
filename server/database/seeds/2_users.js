exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          email: "calvin@calvin.com",
          name: "Calvin Moon",
          password: "oHwruuZTop",
          gender_id: 1,
          birth_date: "1986-08-16",
          activity_level_id: 3,
          weight: 151.81,
          height: 180,
          points: 0,
          user_tier_id: 2,
          goal_id: 5,
          recommended_calories: 2000
        },
        {
          email: "janelle@janelle.com",
          name: "Janelle Hirano",
          password: "TUHCWQ1fRh5G",
          gender_id: 2,
          birth_date: "2018-08-05",
          activity_level_id: 3,
          weight: 202,
          height: 121,
          points: 0,
          user_tier_id: 5,
          goal_id: 1,
          recommended_calories: 2000
        },
        {
          email: "daniel@daniel.com",
          name: "Daniel Ichiyama",
          password: "CwrAWMWHjZD",
          gender_id: 1,
          birth_date: "2007-06-08",
          activity_level_id: 2,
          weight: 82,
          height: 243,
          points: 0,
          user_tier_id: 2,
          goal_id: 6,
          recommended_calories: 2000
        },
        {
          email: "brian@brian.com",
          name: "Brian Huffman",
          password: "7TovWx",
          gender_id: 1,
          birth_date: "2015-12-21",
          activity_level_id: 4,
          weight: 150,
          height: 132,
          points: 0,
          user_tier_id: 3,
          goal_id: 5,
          recommended_calories: 2000
        },
        {
          email: "rina@rina.com",
          name: "Rina Toyoshiba",
          password: "0kXEd5s6",
          gender_id: 2,
          birth_date: "2019-01-25",
          activity_level_id: 4,
          weight: 70,
          height: 90,
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
          weight: 45,
          height: 40,
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
          weight: 8,
          height: 120,
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
          weight: 16,
          height: 345,
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
          weight: 20,
          height: 895,
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
