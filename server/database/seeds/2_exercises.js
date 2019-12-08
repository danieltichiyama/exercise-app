exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("exercises")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("exercises").insert([
        {
          name: "45° Back Extension",
          description:
            "Position your thighs on the padding and hook your feet on the platform supports. Keeping your back straight, slowly bend at your waist until your legs and back are at a 45° degree angle. Slowly raise your body to the starting position. ",
          primary_bodypart_id: 11,
          exercise_type_id: 2,
          exercise_equipment_id: 6,
          exercise_difficulty_id: 2
        },
        {
          name: "Ball Hamstring Curl",
          description:
            "Lay on your back with a stability ball underneath your feet. Fully extend your knees and hips simultaneously. Flex your knees while keeping your hips extended. Flex your hamstrings on then return to the starting position. ",
          primary_bodypart_id: 7,
          exercise_type_id: 2,
          exercise_equipment_id: 4,
          exercise_difficulty_id: 2
        },
        {
          name: "Barbell Curl",
          description:
            "While holding the upper arms stationary, curle the weights forward while contracting the biceps as you breathe out. Continue the movement until your biceps are fully contracted and the bar is at shoulder level. Hold the contracted position for a second and squeeze the biceps hard. Slowly bring the weight back down to the starting position. ",
          primary_bodypart_id: 2,
          exercise_type_id: 2,
          exercise_equipment_id: 3,
          exercise_difficulty_id: 1
        },
        {
          name: "Barbell Hip Thrust",
          description:
            "Sit on the ground with a bench behind you. Have the barbell over your legs just above your hips. Lean back against the bench so that your shoulders are resting upon it, stretch your arm out to either side using the bench as support. Raise the weight by driving through your feet and extending your hips upwards. Slowly extend as far as you can, and then slowly return to the starting position. ",
          primary_bodypart_id: 1,
          exercise_type_id: 2,
          exercise_equipment_id: 3,
          exercise_difficulty_id: 3
        },
        {
          name: "Barbell Wrist Curl",
          description:
            "Grab a straight bar with a supinated (underhand) grip. Kneel down next to a flat bench and place your forearms on the bench with your wrists just off the bench. Let the barbell pull down on your wrists until they are extended. Curl the barbell until your wrists are fully flexed. Lower in a controlled manner and repeat. ",
          primary_bodypart_id: 12,
          exercise_type_id: 2,
          exercise_equipment_id: 3,
          exercise_difficulty_id: 1
        },
        {
          name: "Behind The Back Barbell Wrist Curl",
          description:
            "Stand straight and hold the barbell behind you using a pronated grip with your hands and feet shoulder-width apart. Slowly curl your wrists in a semi-circular motion upwards. Hold the barbell at the apex of the motion and then slowly lower the barbell back down to starting position. ",
          primary_bodypart_id: 12,
          exercise_type_id: 2,
          exercise_equipment_id: 3,
          exercise_difficulty_id: 2
        },
        {
          name: "Bench Dips",
          description:
            "Grip the edge of the bench with your hands, keep your feet together and legs straight. Lower your body straight down. Slowly press back up to the starting point. TIP: Make this harder by raising your feet off the floor and adding weight. ",
          primary_bodypart_id: 3,
          exercise_type_id: 2,
          exercise_equipment_id: 5,
          exercise_difficulty_id: 1
        },
        {
          name: "Bench Lunges",
          description:
            "Stand with your back to a bench (or raised surface) and place one of your feet on the bench. Squat down until your front leg is about parallel to the floor. Go back to the starting position. After completing the desired amount of reps, switch legs and repeat. ",
          primary_bodypart_id: 14,
          exercise_type_id: 2,
          exercise_equipment_id: 5,
          exercise_difficulty_id: 1
        },
        {
          name: "Bench Press",
          description:
            "Lay flat on the bench with your feet on the ground. With straight arms unrack the bar. Lower the bar to your mid chest. Raise the bar until you've locked your elbows. ",
          primary_bodypart_id: 10,
          exercise_type_id: 2,
          exercise_equipment_id: 3,
          exercise_difficulty_id: 2
        },
        {
          name: "Bent Over Barbell Row",
          description:
            "Grab a barbell with a shoulder width pronated or supinated grip. Bend forward at your hips while maintaining a flat back. Pull the weight toward your upper abdomen. Lower the weight in a controlled manner and repeat. ",
          primary_bodypart_id: 4,
          exercise_type_id: 2,
          exercise_equipment_id: 3,
          exercise_difficulty_id: 2
        },
        {
          name: "Bent-Over Rear Delt Raise",
          description:
            "With dumbbells in either hand, bend your knees with your feet slightly bowed out. Arch your back above your knees and start with the weights touching in front of your chestWith bent elbows, raise your arms up to shoulder level, pausing at the end of the motion. Slowly lower your arms back to starting positon. ",
          primary_bodypart_id: 15,
          exercise_type_id: 2,
          exercise_equipment_id: 3,
          exercise_difficulty_id: 2
        },
        {
          name: "Cable Push Downs",
          description:
            "Grip the pulley bar with palms facing down at shoulder width. Stand straight with a small forward incline. Keep your upper arms close to your body and slowly bring the pulley bar down until your arms are fully extended. Pause when you are at the contracted position of the motion, then slowly raise the pulley bar back to the starting point. ",
          primary_bodypart_id: 3,
          exercise_type_id: 2,
          exercise_equipment_id: 1,
          exercise_difficulty_id: 1
        },
        {
          name: "Crunches",
          description:
            'Lay flat on your back with your knees bent and your feet flat on the ground, about a foot from your lower back. Place your fingertips on your temples with your palms facing out. ", Draw your belly into the base of your spine to enlarge the muscles, then raise your head and shoulders off the floor. Return to starting position and repeat. ',
          primary_bodypart_id: 9,
          exercise_type_id: 2,
          exercise_equipment_id: 5,
          exercise_difficulty_id: 1
        },
        {
          name: "Deadlift",
          description:
            "Stand with your mid-foot under the bar and grip the bar with your hands, about a shoulder width apart. Bend your knees, then lift the bar by straightening your back. It is important to keep your back straight. Stand to your full height and hold. Lower the bar to the floor by bending your knees and keeping your back straight. ",
          primary_bodypart_id: 11,
          exercise_type_id: 2,
          exercise_equipment_id: 3,
          exercise_difficulty_id: 3
        },
        {
          name: "Dips",
          description:
            "Hold your body with arms locked above the bars. Lower your body slowly while leaning forward, flare out your elbows. Raise your body above the bars until your arms are locked. ",
          primary_bodypart_id: 10,
          exercise_type_id: 2,
          exercise_equipment_id: 5,
          exercise_difficulty_id: 2
        },
        {
          name: "Dips (narrow elbows)",
          description:
            "Hold your body at arms length above the bars. Inhale and slowly lower yourself downward. Keep your elbows close to your body and your torso upright. Exhale, and using your triceps raise your body back to the starting position. ",
          primary_bodypart_id: 3,
          exercise_type_id: 2,
          exercise_equipment_id: 5,
          exercise_difficulty_id: 3
        },
        {
          name: "Dumbbell Bench Press",
          description:
            "Lay flat on the bench with your feet on the ground. Raise the dumbbells until you have straight arms. Lower the dumbbells to your mid chest.Raise the dumbbells until you've locked your elbows. ",
          primary_bodypart_id: 10,
          exercise_type_id: 2,
          exercise_equipment_id: 3,
          exercise_difficulty_id: 1
        },
        {
          name: "Dumbbell Curl",
          description:
            "Stand up straight with a dumbbell in each hand at arm's length. Raise one dumbbell and twist your forearm until it is vertical and your palm faces the shoulder. Lower to original position and repeat with opposite arm. ",
          primary_bodypart_id: 2,
          exercise_type_id: 2,
          exercise_equipment_id: 3,
          exercise_difficulty_id: 1
        },
        {
          name: "Dumbbell Flys",
          description:
            "Lay flat on the bench and place your feet on the ground. Begin the exercise with the dumbbells held together above your chest, elbows slightly bent. Simultaneously lower the weights to either side. Pause when the weights are parallel to the bench, then raise your arms to the starting position. ",
          primary_bodypart_id: 10,
          exercise_type_id: 2,
          exercise_equipment_id: 3,
          exercise_difficulty_id: 1
        },
        {
          name: "Dumbbell Row",
          description:
            "Place your right leg on the top end of the bench so that your knee and shin rest flat on the bench, your foot hanging off the end. Bend your torso towards the floor and support yourself with your right arm by placing your palm flat against the bench. Grip the weight with your left and pull it straight up to the side of your chest. Repeat the motion. Switch the supporting leg and arm to work the other side. ",
          primary_bodypart_id: 13,
          exercise_type_id: 2,
          exercise_equipment_id: 3,
          exercise_difficulty_id: 2
        },
        {
          name: "Face Pulls",
          description:
            "Facing the pulley, pull the weight towards you while keeping your arms parallel to the ground. Pull your hands back to both sides of your head and hold the position. Slowly return weight to starting position. Repeat. ",
          primary_bodypart_id: 6,
          exercise_type_id: 2,
          exercise_equipment_id: 1,
          exercise_difficulty_id: 2
        },
        {
          name: "Forearm Curl",
          description:
            "Grip the dumbbell with your palm facing upwards with your forearm rested against the bench. Slowly curl your wrist upwards in a semicircular motion. Return to starting position and repeat. ",
          primary_bodypart_id: 12,
          exercise_type_id: 2,
          exercise_equipment_id: 3,
          exercise_difficulty_id: 1
        },
        {
          name: "Forearm Plank",
          description:
            "Place forearms on the ground with your elblows bent at a 90° degree angle aligned beneath your shoulders, with your arms parallel at shoulder-width. Your feet should be together, with only your toes touching the floor. Lift your belly off the floor and form a straight line from your hells to the crown of your head and hold. ",
          primary_bodypart_id: 12,
          exercise_type_id: 2,
          exercise_equipment_id: 5,
          exercise_difficulty_id: 1
        },
        {
          name: "Front Raises",
          description:
            "Grab two dumbbells while standing upright with the dumbbells at your side. Raise the two dumbbells with your elbows being fully extended until the dumbbells are eye level. Lower the weights in a controlled manner to the starting position and repeat. ",
          primary_bodypart_id: 6,
          exercise_type_id: 2,
          exercise_equipment_id: 3,
          exercise_difficulty_id: 1
        },
        {
          name: "Glute Bridge",
          description:
            "Lie down with your knees bent and your feet flat on the floor. Push your hips up so that your butt is elevated and your back straight. Tense your glutes and raise your hips towards the ceiling. Once you are at the highest point you can manage, hold the position for a few seconds, and then slowly return to the starting position. ",
          primary_bodypart_id: 1,
          exercise_type_id: 2,
          exercise_equipment_id: 5,
          exercise_difficulty_id: 1
        },
        {
          name: "Goblet Squat",
          description:
            "Hold the weight tucked into your upper chest area, keeping your elblows in. Your feet should be slightly wider than shoulder width. Sink down into the squat, keeping your elbows inside the track of your knees. Push through your heels while keeping your chest up and return to starting position. ",
          primary_bodypart_id: 14,
          exercise_type_id: 2,
          exercise_equipment_id: 3,
          exercise_difficulty_id: 1
        },
        {
          name: "Hammer Curl",
          description:
            "Hold the dumbbells with a neutral grip (thumbs facing the ceiling). Slowly lift the dumbbell up to chest height. Return to starting position and repeat. ",
          primary_bodypart_id: 2,
          exercise_type_id: 2,
          exercise_equipment_id: 3,
          exercise_difficulty_id: 1
        },
        {
          name: "Hamstring Curl",
          description:
            "Lay down on the machine, placing your legs beneath the padded lever. Position your legs so that the padded lever is below your calve muscles. Support yourself by grabbing the side handles of the machine, and slowly raise the weight with your legs, toes pointed straight. Pause at the apex of the motion, then slowly return to starting position. ",
          primary_bodypart_id: 7,
          exercise_type_id: 2,
          exercise_equipment_id: 6,
          exercise_difficulty_id: 1
        },
        {
          name: "Hanging Knee Raises",
          description:
            "Grab a pullup bar with a shoulder-width overhand grip, making sure your arms are completely straight and your feet are off the ground. Brace your core and use your abs to raise your knees towad your shoulders. Pause when the tops of your thighs reach your chest. Return to the starting position. ",
          primary_bodypart_id: 9,
          exercise_type_id: 2,
          exercise_equipment_id: 5,
          exercise_difficulty_id: 2
        },
        {
          name: "Incline Barbell Bench Press",
          description:
            "Raise the bench to a 30° - 40° degree angle. Grab a barbell with an overhand grip that's shoulder-width apart and hold it above your chest. Extend arms upward, locking out elbows. Lower the bar straight down in a slow, controlled movement to your chest. Pause, then press the bar in a straight line back up to the starting position. ",
          primary_bodypart_id: 10,
          exercise_type_id: 2,
          exercise_equipment_id: 3,
          exercise_difficulty_id: 2
        },
        {
          name: "Incline Dumbbell Press",
          description:
            "Raise the bench to a 30° - 40° degree angle. Lay on the bench and set your feet on the ground. Raise the dumbbells with straight arms then slowly lower them to about shoulder width. Raise them again until your arms are locked and at the starting position again. ",
          primary_bodypart_id: 10,
          exercise_type_id: 2,
          exercise_equipment_id: 3,
          exercise_difficulty_id: 1
        },
        {
          name: "Laying Leg Raises",
          description:
            "Lay on your back with your arms palms down on either side. Keep your legs together and as straight as possible. Slowly raise your legs to a 90° degree angle, pause at this position, or as high as you can reach your legs, and then slowly lower your legs back down. Duration of these movements should be slow so that you do not utilize momentum, enabling you to get the most out of the exercise. ",
          primary_bodypart_id: 9,
          exercise_type_id: 2,
          exercise_equipment_id: 5,
          exercise_difficulty_id: 1
        },
        {
          name: "Laying Triceps Extensions",
          description:
            "Lay on a flat bench while holding a barbell with a shoulder-width grip. Fully extend your elbows until the barbell is directly over your chest. Begin to flex your elbows and allow the barbell to nearly touch your forehead. Extend your elbows back to the starting position and repeat. ",
          primary_bodypart_id: 3,
          exercise_type_id: 2,
          exercise_equipment_id: 3,
          exercise_difficulty_id: 2
        },
        {
          name: "Leg Extension",
          description:
            "Sit on the machine with your back against the cushion and adjust the machine you are using so that your knees are at a 90° degree angle at the starting position. Raise the weight by extending your knees outward, then lower your leg to the starting position. Both movements should be done in a slow, controlled motion. ",
          primary_bodypart_id: 14,
          exercise_type_id: 2,
          exercise_equipment_id: 6,
          exercise_difficulty_id: 1
        },
        {
          name: "Leg Press",
          description:
            "Place your legs on the platform with your feet at shoulder width. Release the weight and extend your legs fully, without locking your knees. Lower the weight until your legs are at a 90° degree angle (but DO NOT allow your butt and lower back to rise off of the pad. This will put your back in a rounded position, which is very dangerous.) Raise the weight back to starting position. ",
          primary_bodypart_id: 14,
          exercise_type_id: 2,
          exercise_equipment_id: 6,
          exercise_difficulty_id: 2
        },
        {
          name: "Neutral Grip Pulldown",
          description:
            "Grip the bar with the palms facing forward, your hands need to be spaced out at a distance wider than shoulder width. As you have both arms extended in front of you holding the bar, bring your torso back around 30° degrees while sticking your chest out. Pull the bar down to about chin level or a little lower in a smooth movement whilst squeezing the shoulder blades together. After a second of squeezing, slowly raise the bar back to the starting position when your arms are fully extended. ",
          primary_bodypart_id: 4,
          exercise_type_id: 2,
          exercise_equipment_id: 1,
          exercise_difficulty_id: 1
        },
        {
          name: "Pull Ups",
          description:
            "Grab onto a bar and hang so that your arms are straight and your feet aren't touching the ground. Pull yourself up so that your chest touches the bar, then slowly lower yourself back down to the starting position. Repeat. ",
          primary_bodypart_id: 4,
          exercise_type_id: 2,
          exercise_equipment_id: 5,
          exercise_difficulty_id: 2
        },
        {
          name: "Reverse Curl",
          description:
            "Grab an EZ bar (or barbell) with a shoulder width pronated (overhand) grip. Curl the weight until your forearms and your biceps touch one another. Lower the weight in a controlled manner and repeat. ",
          primary_bodypart_id: 12,
          exercise_type_id: 2,
          exercise_equipment_id: 3,
          exercise_difficulty_id: 1
        },
        {
          name: "Roll-Outs",
          description:
            "Hold the Ab Roller with both hands and kneel on the floor with your feet up and crossed. Slowly roll the ab roller straight forward, stretching your body into a straight position. After a pause at the stretched position, start pulling yourself back to the starting position. This should be a slow and controlled movement. ",
          primary_bodypart_id: 9,
          exercise_type_id: 2,
          exercise_equipment_id: 7,
          exercise_difficulty_id: 1
        },
        {
          name: "Seated Bent-Over Rear Delt Raise",
          description:
            "With dumbbells in either hand, bend your knees with your feet slightly bowed out. Arch your back above your knees, and start with the weights touching in front of your chest. With bent elbows, raise your arms up to shoulder level, pausing at the end of the motion. Slowly lower your arms back to starting position. ",
          primary_bodypart_id: 15,
          exercise_type_id: 2,
          exercise_equipment_id: 3,
          exercise_difficulty_id: 2
        },
        {
          name: "Seated Cable Row",
          description:
            "Sit with your back straight on the machine and grip the handles. Pull the handles back using your arms. Your legs and torso should be at a 90° degree angle. Push out your chest. Pull the handles towards your body until your hands are beside your abdomen. ",
          primary_bodypart_id: 13,
          exercise_type_id: 2,
          exercise_equipment_id: 1,
          exercise_difficulty_id: 1
        },
        {
          name: "Seated Calf Raises",
          description:
            "Get comfortable on the machine, then place your lower thighs beneath the padded lever. Place your toes and the balls of your feet onto the foot supports. Prevent the weight from slipping forward by gripping the handles, and release the safety bar. Lower the weight until your calves are extended. Push your heels up to lift the padded lever and hold the contracted position, then slowly lower back down to the starting position. Repeat. ",
          primary_bodypart_id: 8,
          exercise_type_id: 2,
          exercise_equipment_id: 6,
          exercise_difficulty_id: 1
        },
        {
          name: "Seated DB Shrugs",
          description:
            "Sit on a bench with dumbbells in both hands, palms facing your body, back straight. Elevate your shoulders and hold the contracted position at the apex of the motion. Slowly lower your shoulders back to starting position. ",
          primary_bodypart_id: 5,
          exercise_type_id: 2,
          exercise_equipment_id: 3,
          exercise_difficulty_id: 1
        },
        {
          name: "Seated Dumbbell Shoulder Press",
          description:
            "Sit on a bench with back support. Raise the dumbbells to shoulder height with your palms forward. Raise the dumbbells upwards and pause at the contracted position. Lower the weights back to starting position. ",
          primary_bodypart_id: 6,
          exercise_type_id: 2,
          exercise_equipment_id: 3,
          exercise_difficulty_id: 1
        },
        {
          name: "Seated Triceps Extensions",
          description:
            "Sit on a bench and hold a dumbbell with both hands. Raise the dumbbell overhead at arms length, holding the weight up with the palms of your hands. Keep your elbows in while you lower the weight behind your head, your upper arms stationary. Raise the weight back to starting position. ",
          primary_bodypart_id: 3,
          exercise_type_id: 2,
          exercise_equipment_id: 3,
          exercise_difficulty_id: 2
        },
        {
          name: "Side Lateral Raises",
          description:
            "Stang up straight with dumbbells at either side, palms facing your hips. Raise your arms on either side with a slight bend in your elbow until they are parallel with the floor. Pause at the top of the motion. Slowly return your arms down to starting position. ",
          primary_bodypart_id: 6,
          exercise_type_id: 2,
          exercise_equipment_id: 3,
          exercise_difficulty_id: 1
        },
        {
          name: "Single Leg Glute Bridge",
          description:
            "Lie down with one knee bent and one with a slight bend. Push your hips up, so that your butt is elevated and your back straight. Tense your glutes and raise your hips towards the ceiling. Once you are at the highest point you can manage, hold the position for a few seconds, and then slowly return to the starting position. ",
          primary_bodypart_id: 1,
          exercise_type_id: 2,
          exercise_equipment_id: 5,
          exercise_difficulty_id: 1
        },
        {
          name: "Squat",
          description:
            "Stand with your feet shoulder-width apart. Maintain the natural arch in your back, squeezing your shoulder blades and raising your chest. Grip the bar across your shoulders and support it on your upper back. Unrack the bar by straightening your legs, and take a step back. Bend your knees as you lower the weight without altering the form of your back until your hips are below your knees. ",
          primary_bodypart_id: 14,
          exercise_type_id: 2,
          exercise_equipment_id: 3,
          exercise_difficulty_id: 1
        },
        {
          name: "Standing Calf Raises",
          description:
            "Adjust the machine in accordance with your height and place your shoulders underneath the padded lever. The balls of your feet should be supporting your weight on the calve block, your heels extending off of it. Extend your heels upwards while keeping your knees stationary, and pause at the contracted position. Slowly return to the starting position. Repeat. ",
          primary_bodypart_id: 8,
          exercise_type_id: 2,
          exercise_equipment_id: 6,
          exercise_difficulty_id: 1
        },
        {
          name: "Standing Smith Machine Shrugs",
          description:
            "Place the bar on a lower rung so that when gripped your arms are fully extended and your back in straight. Grip at shoulder width, raise the bar with your shoulders and pause at the contracted position. Slowly lower the bar back to starting position. ",
          primary_bodypart_id: 5,
          exercise_type_id: 2,
          exercise_equipment_id: 6,
          exercise_difficulty_id: 1
        },
        {
          name: "Stiff Leg Deadlifts",
          description:
            "Stand with a barbell at your shins with your feet shoulder width apart. Bend forward at your hips and keep your knees as fully extended as possible. Grab the barbell and then extend your hips while maintaining a straight back. From the standing position, lower the weight in a controlled manner. You can either lower the weight to the floor or before you touch the floor, depending on your mobility. ",
          primary_bodypart_id: 7,
          exercise_type_id: 2,
          exercise_equipment_id: 3,
          exercise_difficulty_id: 2
        }
      ]);
    });
};
