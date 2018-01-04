import turtle
from random import *
t = turtle.Turtle()
t.speed(0)

cube = 50

colors = ['royalblue', 'navy', 'blue', 'darkblue', 'mediumblue', 'midnightblue', 'cyan', 'aqua', 'darkcyan']

def traceBaton(longueur, rotation):
    # Entrée:
    # Longueur: nb de pixels
    # Rotation: angle en degré
    # Sortie:
    # Affiche un baton de taille = 'longueur' et orientée selon 'rotation'
    t.setheading(rotation)
    for i in range(4):
        t.fd(longueur)
        t.rt(90)
        t.fd(longueur/4)
        t.rt(90)

for i in range(100):
    for i in range(8):
        t.begin_fill()
        t.color(choice(colors))
        traceBaton(100, i*45)
        t.end_fill()
    t.penup()
    t.goto(random()*800-400,random()*800-400)
    t.pendown()

def ITetrimino(cube):
    t.setpos(0,0)
    t.pendown()
    t.begin_fill()
    t.color('black', 'cyan')
    for i in range(2):
        t.fd(cube*4)
        t.rt(90)
        t.fd(cube)
        t.rt(90)
    t.end_fill()
    t.penup()

def TTetrimino(cube):
    t.rt(90)
    t.setpos(cube*5,cube*2)
    t.pendown()
    t.begin_fill()
    t.color('black', 'magenta')
    t.fd(cube*3)
    t.rt(90)
    t.fd(cube)
    t.rt(90)
    t.fd(cube)
    t.lt(90)
    t.fd(cube)
    t.rt(90)
    t.fd(cube)
    t.rt(90)
    t.fd(cube)
    t.lt(90)
    t.fd(cube)
    t.rt(90)
    t.fd(cube)
    t.lt(90)
    t.end_fill()
    t.penup()

def ZTetrimino(cube):
    t.setpos(0,0)
    t.pendown()
    t.begin_fill()
    t.color('black', 'red')
    t.fd(cube*2)
    t.rt(90)
    t.fd(cube)
    t.lt(90)
    t.fd(cube)
    t.rt(90)
    t.fd(cube)
    t.rt(90)
    t.fd(cube*2)
    t.rt(90)
    t.fd(cube)
    t.lt(90)
    t.fd(cube)
    t.rt(90)
    t.fd(cube)
    t.end_fill()
    t.penup()

def STetrimino(cube):
    t.setpos(cube*3,0)
    t.pendown()
    t.begin_fill()
    t.color('black', 'green')
    t.fd(cube*2)
    t.rt(90)
    t.fd(cube)
    t.rt(90)
    t.fd(cube)
    t.lt(90)
    t.fd(cube)
    t.rt(90)
    t.fd(cube*2)
    t.rt(90)
    t.fd(cube)
    t.rt(90)
    t.fd(cube)
    t.lt(90)
    t.fd(cube)
    t.end_fill()
    t.penup()

def toutTracer(cube, rotation):
    effacer()
    t.setheading(rotation)
    ITetrimino(cube)
    TTetrimino(cube)
    ZTetrimino(cube)
    STetrimino(cube)
    
def effacer():
    t.reset()

t.pencolor('black')
