
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([{
        "email": "calvin@calvin.com",
        "name": "Calvin Moon",
        "password": "oHwruuZTop",
        "gender": "Female",
        "birth_date": "1986-08-16",
        "activity_level_id": 3,
        "weight": 334,
        "height": "0'71",
        "points": 0,
        "tier_id": 2,
        "goals_id": 5
      }, {
        "email": "janelle@janelle.com",
        "name": "Janelle Hirano",
        "password": "TUHCWQ1fRh5G",
        "gender": "Female",
        "birth_date": "2018-08-05",
        "activity_level_id": 3,
        "weight": 446,
        "height": "4'86",
        "points": 0,
        "tier_id": 5,
        "goals_id": 1
      }, {
        "email": "daniel@daniel.com",
        "name": "Daniel Ichiyama",
        "password": "CwrAWMWHjZD",
        "gender": "Female",
        "birth_date": "2007-06-08",
        "activity_level_id": 2,
        "weight": 182,
        "height": "8'19",
        "points": 0,
        "tier_id": 2,
        "goals_id": 6
      }, {
        "email": "brian@brian.com",
        "name": "Brian Huffman",
        "password": "7TovWx",
        "gender": "Female",
        "birth_date": "2015-12-21",
        "activity_level_id": 4,
        "weight": 336,
        "height": "4'26",
        "points": 0,
        "tier_id": 3,
        "goals_id": 5
      }, {
        "email": "rina@rina.com",
        "name": "Rina Toyoshiba",
        "password": "0kXEd5s6",
        "gender": "Male",
        "birth_date": "2019-01-25",
        "activity_level_id": 4,
        "weight": 139,
        "height": "2'89",
        "points": 0,
        "tier_id": 4,
        "goals_id": 3
      }, {
        "email": "rerrett5@yahoo.co.jp",
        "name": "Rafa Errett",
        "password": "WfFYojjjiDuM",
        "gender": "Female",
        "birth_date": "2011-08-31",
        "activity_level_id": 3,
        "weight": 98,
        "height": "0'77",
        "points": 0,
        "tier_id": 2,
        "goals_id": 3
      }, {
        "email": "craitt6@redcross.org",
        "name": "Celestine Raitt",
        "password": "mnU7mWZ3wE4",
        "gender": "Female",
        "birth_date": "2013-04-13",
        "activity_level_id": 1,
        "weight": 17,
        "height": "2'30",
        "points": 0,
        "tier_id": 3,
        "goals_id": 3
      }, {
        "email": "jscholard7@is.gd",
        "name": "Jabez Scholard",
        "password": "db9x7wmW5cx",
        "gender": "Male",
        "birth_date": "2007-06-01",
        "activity_level_id": 3,
        "weight": 16,
        "height": "6'74",
        "points": 0,
        "tier_id": 5,
        "goals_id": 5
      }, {
        "email": "grittmeier8@biglobe.ne.jp",
        "name": "Gypsy Rittmeier",
        "password": "ruUB8z",
        "gender": "Female",
        "birth_date": "2019-09-07",
        "activity_level_id": 1,
        "weight": 20,
        "height": "5'63",
        "points": 0,
        "tier_id": 3,
        "goals_id": 4
      }, {
        "email": "dgellan9@nature.com",
        "name": "Darcie Gellan",
        "password": "XtCApli",
        "gender": "Female",
        "birth_date": "2014-02-27",
        "activity_level_id": 1,
        "weight": 167,
        "height": "1'08",
        "points": 0,
        "tier_id": 5,
        "goals_id": 6
      }]);
    });
};
