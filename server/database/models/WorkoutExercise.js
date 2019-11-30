const bookshelf = require('../bookshelf');

class WorkoutExercise extends bookshelf.Model {
    get tableName() {
        return 'workouts_exercises';
    }

    get hasTimestamps() {
        return true;
    }

    workouts_id() {
        return this.hasOne("Workout", "id", "workout_id");
    }

    exercises_id() {
        return this.hasOne("Exercise", "id", "exercise_id")
    }
}

module.exports = bookshelf.model("WorkoutExercise", WorkoutExercise);