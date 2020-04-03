# coding:utf-8
import time
import serial
import sys
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import re
import datetime


"""
参考: pyserial公式ドキュメント
[1]サイトトップ http://pythonhosted.org/pyserial/
[2]API一覧 http://pythonhosted.org/pyserial/pyserial_api.html
[3]イントロダクション http://pythonhosted.org/pyserial/shortintro.html
"""


def to_firebase(now_time, dataset):
    try:
        data_ref.child("DATE").push(now_time)
        data_ref.child("CO2").push(dataset[0])
        data_ref.child("DUST").push(dataset[1])
        print("SUCCESS ADD DATA.")
    except:
        print("FAILED ADD DATA.")

    time.sleep(5.0)
    get_data()


def get_data():
    # ちゃんと開けていたらループに入る
    while ser.is_open:
        row_data = ser.readline(50).decode()
        if row_data != "":
            data_str = regex.findall(row_data)
            data = [float(data) for data in data_str]

            # now_time = str(datetime.datetime.now().time())[:8]
            # DATASETS['DATE'].append(now_time)
            DATASETS['CO2'].append(data[0])
            DATASETS['DUST'].append(data[1])

            # print('DATE: ', now_time)
            print('CO2: ', data[0], '[ppm]')
            print('DUST : ', data[1], '[ug/ m3]', end='\n\n')
            # print(s, s2)

            # １分間測定したら平均を出してループを抜ける
            if len(DATASETS["CO2"]) == 12:
                CO2_avg = round(sum(DATASETS["CO2"]) / len(DATASETS["CO2"]), 2)
                DUST_avg = round(sum(DATASETS["DUST"]) / len(DATASETS["DUST"]), 2)
                DATASETS["CO2"] = []
                DATASETS["DUST"] = []
                break

        time.sleep(5.0)  # 0.1秒待つ

    now_time = str(datetime.datetime.now().time())[:8]

    to_firebase(now_time, [CO2_avg, DUST_avg])

    print("serial connection closed")


if __name__ == "__main__":
    # Arduinoの初期設定
    ser = serial.Serial()
    ser.baudrate = 9600  # ArduinoのSerial.beginで指定した値
    ser.timeout = 0  # タイムアウトの時間
    ser.port = "COM6"  # Arduinoのポート番号.場合によって違うので注意！！！

    # 開いてみる
    try:
        ser.open()
        print("open " + ser.port)
    except:
        print("can't open" + ser.port)
        sys.exit(0)

    # firebaseの初期設定
    cred = credentials.Certificate('./db-test-18686-firebase-adminsdk-ecl84-bbd9f62fcb.json')
    firebase_admin.initialize_app(cred, {
        'databaseURL': 'https://db-test-18686.firebaseio.com/',
        'databaseAuthVariableOverride': {
            'uid': 'my-service-worker'
        }
    })

    ref = db.reference('/another_resource')
    data_ref = ref.child('concent_data')

    # データの初期設定
    DATASETS = {
        # 'DATE': [],
        'CO2': [],
        'DUST': []
    }
    regex = re.compile('\d+\.?\d+')

    # 測定開始
    get_data()