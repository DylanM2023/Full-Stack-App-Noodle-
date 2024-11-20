# Imports flask modules and datetime

from flask import *
import datetime

x = datetime.datetime.now()

# Initialises flask app
app = Flask(__name__)

# Creates a route for /data

@app.route("/data")
def get_time():

    # returns an api for showing in react.js
    return {
        "Name":"geek",
        "Age":"22",
        "Date":x,
        "programming":"python"
    }


# runs app

if __name__ == '__main__':
    app.run(debug=True)