from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('p1.html')

@app.route('/p1')
def page1():
    return render_template('p1.html')

@app.route('/p2')
def page2():
    return render_template('p2.html')

@app.route('/p3')
def page3():
    return render_template('p3.html')

@app.route('/p4')
def page4():
    return render_template('p4.html')

@app.route('/p5')
def page5():
    return render_template('p5.html')

@app.route('/p6')
def page6():
    return render_template('p6.html')

@app.route('/p7')
def page7():
    return render_template('p7.html')

@app.route('/p8')
def page8():
    return render_template('p8.html')

@app.route('/p9')
def page9():
    return render_template('p9.html')

@app.route('/p10')
def page10():
    return render_template('p10.html')

@app.route('/p11')
def page11():
    return render_template('p11.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8090)
