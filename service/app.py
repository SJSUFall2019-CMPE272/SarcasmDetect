from flask import Flask
from flask import request
import json
import re
import tweepy
from tweepy import OAuthHandler
from textblob import TextBlob
app = Flask(__name__)
class TwitterClient(object):


    def __init__(self):

        consumer_key = '3Af0WvitS6ezs2r3tJ6HqUfSm'
        consumer_secret = 'Wn9UKTT2WHBM2HMehsNao8LjmYTnnp1owVSWnL9opyZlAV19qR'
        access_token = '948484236796809216-UKZbNuqAscnEr2imv1RVLnXxiAqZbqG'
        access_token_secret = 'Qp6S7WYLlbShnS1BVbkJzcLPTDqaPcgAJN5xnqTgoxpJc'

        # keys and tokens from the Twitter Dev Console


        # attempt authentication
        try:
            # create OAuthHandler object
            self.auth = OAuthHandler(consumer_key, consumer_secret)
            # set access token and secret
            self.auth.set_access_token(access_token, access_token_secret)
            # create tweepy API object to fetch tweets
            self.api = tweepy.API(self.auth)
        except:
            print("Error: Authentication Failed")


    def clean_tweet(self, tweet):
        '''
        Utility function to clean tweet text by removing links, special characters
        using simple regex statements.
        '''
        return ' '.join(re.sub("(@[A-Za-z0-9]+)|([^0-9A-Za-z \t]) |(\w+:\/\/\S+)", " ", tweet).split())


    def processTweet(self,tweet):
        # process the tweets

        #Convert to lower case
        tweet = tweet.lower()
        #Convert www.* or https?://* to URL
        tweet = re.sub('((www.[^\s]+)|(https?://[^\s]+))','',tweet)
        #Convert @username to AT_USER
        tweet = re.sub('@[^\s]+','',tweet)
        #Remove additional white spaces
        tweet = re.sub('[\s]+', ' ', tweet)
        #Replace #word with word
        tweet = re.sub(r'#([^\s]+)', r'\1', tweet)
        #trim
        tweet = tweet.strip('\'"')
        return tweet
        #end


    def get_tweets(self, query, count = 10):
        '''
        Main function to fetch tweets and parse them.
        '''
        # empty list to store parsed tweets
        tweets = []

        try:
            # call twitter api to fetch tweets
            fetched_tweets = self.api.search(q = query, count = 10,lang = "en")
            t = TwitterClient()
            # parsing tweets one by one
            for tweet in fetched_tweets:
                # empty dictionary to store required params of a tweet
                parsed_tweet = {}

                # saving text of tweet
                parsed_tweet['text'] = t.processTweet(tweet.text)
                #parsed_tweet['description'] = tweet.user.description
                # saving sentiment of tweet
                #parsed_tweet['sentiment'] = self.get_tweet_sentiment(tweet.text)
                parsed_tweet['location'] = tweet.user.location
                parsed_tweet['retweet_count'] = tweet.retweet_count
                parsed_tweet['favorite_count'] = tweet.favorite_count
                #parsed_tweet['created_at'] = tweet.created_at
                parsed_tweet['time_zone'] = tweet.user.time_zone
                #parsed_tweet['hashtags'] = tweet.user.hashtags

                # appending parsed tweet to tweets list
                #if tweet.retweeted == False:
                if tweet.retweet_count > 10:
                    # if tweet has retweets, ensure that it is appended only once
                    if parsed_tweet not in tweets:
                        tweets.append(parsed_tweet)
                else:
                    tweets.append(parsed_tweet)

            # return parsed tweets
            return tweets

        except tweepy.TweepError as e:
            # print error (if any)
            print("Error : " + str(e))

#@app.route("/", methods=[ 'POST'])


@app.route("/analyze", methods=['POST'])
def getSarcasmData():
    if request.method == 'POST':  #this block is only entered when the form is submitted
        req_data = request.get_json()
        print(req_data)
        #trends = req_data.form.get('trends')

    t = TwitterClient()
    tweets = t.get_tweets(query = req_data)
    print(len(tweets))
    for tweet in tweets:
        print(tweet)
        #print(t.processTweet(tweet['text']))
    with open('data.json', 'w', encoding='utf-8') as f:
        json.dump(tweets, f, ensure_ascii=False, indent=4)

    return "Analyzing the trend now!"


if __name__ == "__main__":
    app.run(debug=True)
