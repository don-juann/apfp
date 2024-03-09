# Skin Lesion Classification with Machine Learning

This project aims to classify skin lesion images into seven different categories using Machine Learning techniques. It uses the HAM10000 dataset, which contains 10,015 dermoscopic images.

## Introduction
Skin cancer is a significant public health concern, and early detection is crucial for successful treatment. This project explores the use of Convolutional Neural Networks (CNNs) to automatically classify skin lesion images into seven categories: melanoma, melanocytic nevus, basal cell carcinoma, actinic keratosis, benign keratosis, dermatofibroma, and vascular lesion.

## Data and Methods
### Dataset
- The [HAM10000 dataset](https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/DBW86T) consists of 10,000 dermoscopic images.
- The dataset was downloaded locally and then uploaded to Google Drive for easy access from Google Colaboratory.
- [Link to the dataset on Google Drive](https://drive.google.com/drive/folders/1RFX58NYHw0sHY9C62-UvPYlV0v4dVgJQ?usp=sharing)

### Data Preprocessing
- Applied techniques of undersampling and oversampling to balance the dataset.
- Generated augmented images to prevent overfitting and underfitting.

### Model Architecture
- Developed a custom CNN model using TensorFlow and Keras.
- Utilized a base model with the following structure:
  - Input Layer: (192, 192, 3)
  - Convolutional Layers with ReLU activation
  - Max Pooling Layers
  - Dropout Layers
  - Flatten Layer
  - Dense Layers with Batch Normalization
  - Output Layer with Softmax activation

### Transfer Learning
- Employed the MobileNetV2 pre-trained model for transfer learning.
- Global Average Pooling applied to reduce spatial dimensions.
- Added a Dense layer with 128 units.

## Results
- Trained the first CNN model with the following outcomes:
  - Around 65% accuracy on regular data.
  - Almost 100% accuracy on the training dataset.
  - Approximately 70% accuracy on the evaluation dataset.
- MobileNetV2 pre-trained model achieved almost 72% accuracy on the testing dataset.

## Discussion
- **Model Comparison:**
  - First model showed poor performance initially but improved with augmentation.
  - Transfer learning with MobileNetV2 significantly boosted accuracy.
- **Web Integration:**
  - Created a localhost web page using HTML, CSS, and JavaScript to deploy the final model.
  - [GitHub link](https://github.com/don-juann/classification-skin-lesion) provided for downloading and trying out the web page.

## Web Integration
- Created a web interface to allow users to interact with the skin lesion classification model.
- Instructions for launching the web page locally are provided below.

## Instructions
1. Clone the repository to your local machine:
```
git clone https://github.com/don-juann/classification-skin-lesion.git
```
2. Navigate to the project directory.
3. Open Command Line (Win+R, cmd) and enter the location of the project directory.
4. Enter the command to start a local server:
```
python -m http.server 3000
```
5. Open a web browser and go to 'http://localhost:3000' to access the web page.
6. Upload image and get result by pressing the button below.

## References
- [A Guide to an Efficient Way to Build Neural Network Architectures - Part II](https://towardsdatascience.com/a-guide-to-an-efficient-way-to-build-neural-network-architectures-part-ii-hyper-parameter-42efca01e5d7)
- [ImageDataGenerator - TensorFlow v2.15.0.post1 Documentation](https://www.tensorflow.org/api_docs/python/tf/keras/preprocessing/image/ImageDataGenerator)
- [MobileNet, MobileNetV2, and MobileNetV3 - Keras Documentation](https://keras.io/api/applications/mobilenet/)
- [The Functional API - TensorFlow Core Documentation](https://www.tensorflow.org/guide/keras/functional)
