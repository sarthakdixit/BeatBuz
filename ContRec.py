import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
import socket
import random 

HOST = '127.0.0.1'
PORT = 65432

ds = pd.read_csv(r'D:\@Projects\MusiFy\songs.csv')

tf = TfidfVectorizer(analyzer='word', ngram_range=(1, 3), min_df=0, stop_words='english')
tfidf_matrix = tf.fit_transform(ds['description'])

cosine_similarities = linear_kernel(tfidf_matrix, tfidf_matrix)
results = {}
for idx, row in ds.iterrows():
   similar_indices = cosine_similarities[idx].argsort()[:-100:-1] 
   similar_items = [(cosine_similarities[idx][i], ds['id'][i]) for i in similar_indices] 
   results[row['id']] = similar_items[1:]

def item(id):  
  return ds.loc[ds['id'] == id]['description'].tolist()[0].split(' - ')[0] # Just reads the results out of the dictionary.

def recommend(item_id, num):
    lst = []
    print("Recommending " + str(num) + " products similar to " + item(item_id) + "...")   
    print("-------")
    recs = results[item_id][:num]
    for rec in recs:
       print("Recommended: " + item(rec[1]) + " (score:" +      str(rec[0]) + ")")
       lst.append(str(rec[1]))
    ll = random.sample(lst, 5)
    return ",".join(ll)
       

while 1 :
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind((HOST, PORT))
        s.listen()
        conn, addr = s.accept()
        with conn:
            print('Connected by', addr)
            while True:
                data = conn.recv(1024)
                if not data:
                    break
                idd = data.decode()
                print(type(idd))
                s = recommend(item_id=int(idd), num=10)
                conn.sendall(s.encode('utf-8'))