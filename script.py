import serial
import RPi.GPIO as GPIO
import time
import mysql.connector

mydb = mysql.connector.connect(
        host = "localhost",
        user = "5ATL",
        passwd = "sistemi",
        database = "parcheggio"
    ) 

mycursor = mydb.cursor()

ser=serial.Serial("/dev/ttyACM0", 9600)  #change ACM number as found from ls /dev/tty/ACM*
ser.baudrate=9600

while True:
    read_ser=ser.readline()
    read = read_ser.decode('utf-8')
    read = read.strip()

    if read=='1':
        query = f"SELECT postiDisponibili FROM posti"
        mycursor.execute(query)
        posti = mycursor.fetchall()
        posti = posti[0][0]

        if posti>0:
            query = f"UPDATE posti SET postiDisponibili={posti-1}"
            mycursor.execute(query)
            mydb.commit()   

            query = f"INSERT INTO log (entrataUscita) VALUES (1)"
            mycursor.execute(query)
            mydb.commit()  

            query = f"UPDATE toUpdate SET isToUpdate=1"
            mycursor.execute(query)
            mydb.commit()   
    if read=='-1':
        query = f"SELECT postiDisponibili FROM posti"
        mycursor.execute(query)
        posti = mycursor.fetchall()
        posti = posti[0][0]

        query = f"SELECT postiTotali FROM posti"
        mycursor.execute(query)
        postiTot = mycursor.fetchall()
        postiTot = postiTot[0][0]

        if posti<postiTot:
            query = f"UPDATE posti SET postiDisponibili={posti+1}"
            mycursor.execute(query)
            mydb.commit()   

            query = f"INSERT INTO log (entrataUscita) VALUES (0)"
            mycursor.execute(query)
            mydb.commit()

            query = f"UPDATE toUpdate SET isToUpdate=1"
            mycursor.execute(query)
            mydb.commit() 
