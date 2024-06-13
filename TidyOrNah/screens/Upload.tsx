import { useState } from 'react';
import { Button, Image, View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import * as tf from '@tensorflow/tfjs';

export default function ImagePickerExample() {
  const [image, setImage] = useState("null");

  const [objPredictions, setObjPredictions] = useState([]);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }

    let isDesk = findDesk()
  };

  const findDesk = async () => {
        const model = await cocoSsd.load()

        // convert image uri to ImageData

        newImage = new ImageData()

        const imgTensor = tf.browser.fromPixels(image);

        model.detect(imgTensor).then((predictions) => {
            setObjPredictions(predictions);
        })

            .catch(err => {
                console.error(err)
            });

        console.log(objPredictions)
  };

  return (
    <View style={styles.container}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});
