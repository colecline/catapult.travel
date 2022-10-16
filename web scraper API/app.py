import flask
import webScraping

app = flask.Flask(__name__)
app.config["DEBUG"] = True


@app.route('/', methods=['GET'])
def home():
    a = webScraping.web()
    return  a

app.run()
