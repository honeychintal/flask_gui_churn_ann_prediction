from keras.models import load_model
import pickle
new_model = load_model('ann_model.h5')
sc = pickle.load(open('scaler.pkl','rb'))

class Prediction:
    def predicting_val(*x):
        pred_y = new_model.predict(sc.transform(x))
        return pred_y

obj= Prediction 
print("this is upper message",obj.predicting_val([0.0, 1.0, 0.0, 738, 1, 58, 2, 133745.44, 4, 1, 0, 28373.86]))

print("this is lower message",obj.predicting_val([1, 0, 0, 600,  1, 40, 3, 60000, 2, 1, 1, 50000]))
