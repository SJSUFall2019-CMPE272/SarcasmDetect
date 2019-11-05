#Import the necessary methods from tweepy library
from tweepy.streaming import StreamListener
from tweepy import OAuthHandler
from tweepy import Stream

#Variables that contains the user credentials to access Twitter API 
access_token ="948484236796809216-UKZbNuqAscnEr2imv1RVLnXxiAqZbqG"
access_token_secret ="Qp6S7WYLlbShnS1BVbkJzcLPTDqaPcgAJN5xnqTgoxpJc"
consumer_key ="3Af0WvitS6ezs2r3tJ6HqUfSm"
consumer_secret ="Wn9UKTT2WHBM2HMehsNao8LjmYTnnp1owVSWnL9opyZlAV19qR"


#This is a basic listener that just prints received tweets to stdout.
class StdOutListener(StreamListener):

    def on_data(self, data):
        print (data)
        return True

    def on_error(self, status):
        print (status)


if __name__ == '__main__':

    #This handles Twitter authetification and the connection to Twitter Streaming API
    l = StdOutListener()
    auth = OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_token, access_token_secret)
    stream = Stream(auth, l)
    extractor = twitter_setup() 
    extractor.search(q="#GalaxyFold", count=200)

   