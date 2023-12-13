// utils/tensorflow.js
import * as tf from "@tensorflow/tfjs";

// Load your trained model
const loadModel = async () => {
  const model = await tf.loadLayersModel("path/to/your/model.json");
  return model;
};

// Make predictions using the loaded model
const predict = (model, input) => {
  const tensor = tf.tensor(input); // Transform your input data into a TensorFlow tensor
  const prediction = model.predict(tensor);
  return prediction;
};

export { loadModel, predict };
