import model from './model.js';

// create course based on given data
export const createCourse = (course) => {
  delete course._id;
  return model.create(course);
};

// get all courses
export const findAllCourses = () => model.find();

// find course based on the given id
export const findCourseById = (courseId) => model.findById(courseId);

// find all courses whose title contains the given string
export const findCoursesByPartialName = (partialName) => {
  const regex = new RegExp(partialName, 'i'); // i means lowercase
  return model.find({
    $or: [{ name: { $regex: regex } }, { description: { $regex: regex } }],
  });
};

// find course based on the given course number
export const findCourseByNumber = (number) => model.findOne({ number });

// find course based on the given name
export const findCourseByName = (name) => model.findOne({ name: name });

// update course with the given id with the given data
export const updateCourse = (courseId, course) =>
  model.updateOne({ number: courseId }, { $set: course });

// delete course matching the given id
export const deleteCourse = (courseId) => model.deleteOne({ _id: courseId });
