from flask import Flask, render_template, request, redirect
from werkzeug.utils import secure_filename
import os
app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = './uploads/'
ALLOWED_EXTENSIONS = {'txt', 'png', 'jpeg', 'jpg', 'pdf'}

@app.route('/')
def redir_to_upload():
    return redirect('/upload')

@app.route('/upload')
def upload_file():
    return render_template('upload.html')

@app.route('/uploader', methods = ['GET', 'POST'])
def file_uploader():
    if request.method == 'POST':
        f = request.files['file']
        if f and allowed_file(f.filename):
            f_name = secure_filename(f.filename)
            f.save(os.path.join(app.config['UPLOAD_FOLDER'], f_name))
            return 'file uploaded successfully'
        return 'file not valid'

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


if __name__ == '__main__':
    app.run(debug=True)