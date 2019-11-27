#Load The Model
from keras.preprocessing.text import Tokenizer
from keras.models import model_from_json
import json
model_path='../model/sarcasm_detect'
h5_file_path='../model/sd_h5_file'
#file = open(model_path, 'r')
#model_json = file.read()
#file.close()
#model = model_from_json(model_json)
# load weights
#model.load_weights(h5_file_path)


#load model
from keras.models import load_model
model = load_model('my_model.h5')
print(model)
#Process the input file
input_file_path='../data/input_data/data.json'
result_file_path='../data/output_data/result.json'
input_file = open (input_file_path)
json_array = json.load(input_file)
store_list = []
for item in json_array:
    store_details = {"text":None, "location":None, "retweet_count":None, "favorite_count":None, "time_zone":None,  "is_sarcastic":None}
    store_details['text'] = item['text']
    store_details['location'] = item['location']
    store_details['retweet_count'] = item['retweet_count']
    store_details['favorite_count'] = item['favorite_count']
    store_details['time_zone'] = item['time_zone']
    store_list.append(store_details)

#print(store_list)
for i in store_list:
    headline=[i['text']]
    #headline = tokenizer.fit_on_texts(headline)
    #headline = tokenizer.texts_to_sequences(headline)
    headline = pad_sequences(headline, maxlen=29, dtype='int32', value=0)
    sentiment = model.predict(headline,batch_size=1,verbose = 2)[0]
    if(np.argmax(sentiment) == 0):
        i['is_sarcastic']=0
    elif (np.argmax(sentiment) == 1):
        i['is_sarcastic']=1

with open('results.json', 'w') as outfile:
    json.dump(store_list, result_file_path)
