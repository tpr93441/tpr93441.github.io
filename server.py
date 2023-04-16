from flask import Flask, render_template


app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/About.html")
def about():
    return render_template("About.html")


@app.route("/FAQ.html")
def FAQ():
    return render_template("FAQ.html")


@app.route("/vapor-blast.html")
def VAPOR_BLAST():
    return render_template("vapor-blast.html")


@app.route("/sand-blasting.html")
def SAND_BLASTING():
    return render_template("sand-blasting.html")


@app.route("/cerakote.html")
def CERAKOTE():
    return render_template("cerakote.html")


@app.route("/restoration.html")
def RESTORATION():
    return render_template("restoration.html")

@app.route("/chemical-stripping.html")
def CHEMICAL_STRIPPING():
    return render_template("chemical-stripping.html")

@app.route("/powder-coating.html")
def POWDER_COATING():
    return render_template("powder-coating.html")


if __name__ == "__main__":
    app.run(debug=True)

