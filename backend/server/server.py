from dotenv import load_dotenv
load_dotenv()
from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import MySQLdb
import os

app = Flask(__name__)
CORS(app, resources={r"*": {"origins": "*"}})
db = MySQLdb.connect(os.getenv("HOST_DB"), os.getenv("USER_DB"), os.getenv("PASS_DB"), os.getenv("DATABASE"))
cursor = db.cursor()

def add_entry(new_entry):
    try:
        query = """INSERT INTO users (
                    beneficiaryNullifier, creatorNullifier, executor1Nullifier,
                    executor2Nullifier, contractAddress,
                    tokenAddress, delayYears, funds
                ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"""
        values = (
            new_entry["beneficiaryNullifier"], new_entry["creatorNullifier"],
            new_entry["executor1Nullifier"], new_entry["executor2Nullifier"],
            new_entry["contractNullifier"], new_entry["tokenAddress"], 
            new_entry["delayYears"], new_entry["funds"]
        )
        cursor.execute(query, values)
        db.commit()
    except Exception as e:
        print("Error adding entry to database:", str(e))

def load_entries():
    try:
        query = "SELECT * FROM users"
        cursor.execute(query)
        entries = cursor.fetchall()
        return entries
    except Exception as e:
        print("Error loading entries from database:", str(e))
        return []

def filter_entries(entries, filters):
    filtered_entries = []

    for entry in entries:
        if any(entry[i] == filter_dict['value'] for i, filter_dict in enumerate(filters)):
            filtered_entries.append(entry)

    return filtered_entries

@app.route('/', methods=['POST'])
def handle_post_request():
    try:
        data = request.get_json()
        print(data)
        if data.get("action") == "add-contract-data":
            new_entry = {
                "beneficiaryNullifier": data.get('beneficiaryNullifier'),
                "creatorNullifier": data.get('creatorNullifier'),
                "executor1Nullifier": data.get('executor1Nullifier'),
                "executor2Nullifier": data.get('executor2Nullifier'),
                "contractNullifier": data.get('contractNullifier'),
                "tokenAddress": data.get('tokenAddress'),
                "delayYears": data.get("delayYears"),
                "funds": data.get("funds")
            }

            add_entry(new_entry)
            return jsonify({'status': "success"})

        elif data.get("action") == "query":
            nullifier = data.get("nullifier")
            filters = [
                {'parameter': 'creatorNullifier', 'value': nullifier},
                {'parameter': 'beneficiaryNullifier', 'value': nullifier},
                {'parameter': 'executor1Nullifier', 'value': nullifier},
                {'parameter': 'executor1Nullifier', 'value': nullifier},
                {'parameter': 'executor2Nullifier', 'value': nullifier},
                {'parameter': 'executor3Nullifier', 'value': nullifier}
            ]

            entries = load_entries()
            filtered_data = filter_entries(entries, filters)
            return jsonify(filtered_data)

        result = {'status': "success"}
        return jsonify(result)

    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500

@app.route('/upload', methods=['POST'])
def upload_file():
    try:
        uploaded_file = request.files['file']
        filePath = os.getcwd() + '/uploads/' + uploaded_file.filename
        uploaded_file.save( filePath)
        
        os.system(f"cp {filePath} ../../anon-aadhaar-main/ " )
        os.system(f"cd ../../anon-aadhaar-main && yarn pdf:pcd {uploaded_file.filename} {request.get_json().get('password')}")
        os.system(f"cp ../../anon-aadhaar-main/packages/anon-aadhaar-pcd/build/pdf/{uploaded_file.filename} ./uploads/{uploaded_file.filename.strip('.pdf')}_signed.pdf")
        
        return jsonify({'message': 'File uploaded successfully'})
    except Exception as e:
        return jsonify({'error': str(e)})

@app.route('/download/<filename>', methods=['GET'])
def download_file(filename):
    try:
        file_path = './uploads/' + filename
        return send_file(file_path, as_attachment=True)
    except Exception as e:
        return jsonify({'error': str(e)})


if __name__ == '__main__':
    app.run(debug=True)
