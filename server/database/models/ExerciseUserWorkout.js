const bookshelf = require('../bookshelf');

class ExerciseUserWorkout extends bookshelf.Model {
    get tableName() {
        return 'exercises_users_workouts';
    }

    get hasTimestamps() {
        return true;
    }

    workouts_id() {
        return this.hasOne("Workout", "id", "workout_id");
    }

    exercises_id() {
        return this.hasOne("Exercise", "id", "exercise_id");
    }

    user_id() {
        return this.belongsTo("User");
    }
}

module.exports = bookshelf.model("ExerciseUserWorkout", ExerciseUserWorkout);