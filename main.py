from flask import Flask, render_template

app = Flask(__name__, template_folder=".", static_folder="static")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/lightmode")
def AI():
    return render_template("AIL.html")

@app.route("/darkmode")
def dark():
    return render_template("AIL2.html")

@app.route("/favicon.ico")
def favicon():
    return app.send_static_file("icon.ico")


app.run(debug=True)
