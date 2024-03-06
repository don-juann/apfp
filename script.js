// Machine Learning part is done in this file

// A variable to store model
let model;

// Function to load a model
async function loadModel() {
    model = await tf.loadLayersModel('/model/model.json');
    console.log('Model loaded successfully.');
}

// Function to do classification of the images
async function classifyImage() {
    const img = document.getElementById('preview');
    const tensor = tf.browser.fromPixels(img).resizeNearestNeighbor([192, 192]).toFloat().expandDims();
    const predictions = await model.predict(tensor).data();
    const maxPrediction = Math.max(...predictions);
    const maxIndex = predictions.indexOf(maxPrediction);
    const labels = [
        "akiec: Actinic keratoses and intraepithelial carcinoma / Bowen's disease",
        "bcc: Basal cell carcinoma",
        "bkl: Benign keratosis-like lesions",
        "df: Dermatofibroma",
        "mel: Melanoma",
        "nv: Melanocytic nevi",
        "vasc: Vascular lesions"
    ];
    
    document.getElementById('result').innerText = `Prediction: ${labels[maxIndex]} \nConfidence: ${(maxPrediction * 100).toFixed(2)}%`;
}

function previewImage() {
    const preview = document.getElementById('preview');
    const file = document.getElementById('imageInput').files[0];
    const reader = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = '';
    }
}

loadModel();
