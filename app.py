from flask import Flask, jsonify, request, render_template
from keras.backend import foldl
from keras.models import load_model
import pickle
import numpy as np

new_model = load_model('ann_model.h5')
sc = pickle.load(open('scaler.pkl','rb'))

app = Flask(__name__) # This gives each file a unique name


@app.route("/home")
def home_page():
    return render_template('home.html')

@app.route("/index")
def index_page():
    return render_template('index.html')

@app.route("/show",methods=['GET','POST'])
def show_page():
    france=0
    germany=0
    spain=0
    if request.method =='POST':
        credit = int(request.form['crscore'])
        balance = float(request.form['balan'])
        age = int(request.form['age'])
        member = int(request.form['member-y'])
        gender = int(request.form['gender-m'])
        resident = request.form['sel-resid']
        card = int(request.form['cr-radio'])
        salary = float(request.form['estsal'])
        tenure = int(request.form['tenure'])
        no_prod = int(request.form['noprod'])
    if int(resident) == 1:
        france =1
    elif int(resident) ==2:
        germany =1
    elif int(resident) == 3:
        spain = 1

    show_json={
        'credit': credit,
        'balance': balance,
        'member': member,
        'gender':gender,
        'france-germany-spain':list([france,germany,spain]),
        'card':card,
        'age':age,
        'salary':salary,
        'tenure':tenure,
        'no. of product':no_prod
    }
    try:
        
        predict_req = [france,germany,spain,credit,gender,age,tenure,balance,no_prod,card,member,salary]

        x_feature = np.array(predict_req)

        x_feature = np.reshape(x_feature, (1,-1))
            
        y_pred = new_model.predict(sc.transform(x_feature))
            
        y_pred = y_pred[0][0]

        pred_value =float(100*y_pred)
        pred_result=str(y_pred > 0.5)
        pred_progres=int(pred_value)
        round_valu = '{0:.3g}'.format(pred_value)
        string_to = f"width:{pred_progres}%"
        
        return render_template("predict.html",pred_val=pred_value, pred_res= pred_result, pred_prog=string_to, round_val= round_valu)
    except:
        return jsonify({"An Error occured ": "Please check all input values / All inputs are mandatory"})

@app.route("/predict",methods=['GET','POST'])
def call_to_predict():
    try:
        request_data = request.get_json()
        
        predict_req = [request_data['france'],request_data['germany'],request_data['spain'],request_data['CreditScore'],
        request_data['Gender'],request_data['Age'],request_data['Tenure'],request_data['Balance'],request_data['NumOfProducts'],
        request_data['HasCrCard'],request_data['IsActiveMember'],request_data['EstimatedSalary']]

        x_feature = np.array(predict_req)

        x_feature = np.reshape(x_feature, (1,-1))
        
        # print("this is values of something",x_feature)
        
        y_pred = new_model.predict(sc.transform(x_feature))
        
        # print("this is PREDICTED VALUE",y_pred)
        
        y_pred = y_pred[0][0]
        
        predict_json= {
            'prediction value': float(y_pred),
            'prediction':  str(y_pred > 0.5)
            }
        
        # print("this is Flatten >>>>>>>>>>>>",y_pred)
        return jsonify({"PREDICTIONS":predict_json})
    except:
        return jsonify({"An Error occured ": "Please check all input values / All inputs are mandatory"})


app.run(port=5000,debug=True)

