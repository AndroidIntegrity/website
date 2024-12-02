const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputDir = path.join(__dirname, 'public/img');
const outputDir = path.join(__dirname, 'public/img/optimized');
const profileInputDir = path.join(__dirname, 'public/img/profiles');
const profileOutputDir = path.join(__dirname, 'public/img/optimized/profiles');

const optimizeImages = (inputDir, outputDir) => {
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.readdir(inputDir, (err, files) => {
        if (err) {
            console.error('Error reading input directory:', err);
            return;
        }

        files.forEach(file => {
            const inputFilePath = path.join(inputDir, file);
            const outputFilePath = path.join(outputDir, file);

            sharp(inputFilePath)
                .resize(800)
                .toFormat('jpeg', { quality: 80 })
                .toFile(outputFilePath, (err, info) => {
                    if (err) {
                        console.error('Error processing file:', err);
                    } else {
                        console.log('Optimized:', outputFilePath);
                    }
                });
        });
    });
};

optimizeImages(inputDir, outputDir);
optimizeImages(profileInputDir, profileOutputDir);