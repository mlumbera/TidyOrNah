import tensorflow as tf
import os
from tensorflow.keras.models import load_model
import cv2
import numpy as np
from matplotlib import pyplot as plt
# testing model

img = cv2.imread('tidy_desk.jpeg')
plt.imshow(img)
plt.show()


resize = tf.image.resize(img, (256,256))
# plt.imshow(resize.numpy().astype(int))
# plt.show()

new_model = load_model(os.path.join('models','tidy_or_nah.h5'))
result = new_model.predict(np.expand_dims(resize/255, 0))

if result > 0.5: 
    print(f'Predicted class is Tidy')
else:
    print(f'Predicted class is Messy')